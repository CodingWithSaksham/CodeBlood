from typing import Any, Dict
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from rest_framework.status import HTTP_200_OK
from logging import getLogger

from .q_learning import QLearningAgent

logger = getLogger("game.websocket")
agent = QLearningAgent()

prev_player_health = 1000
prev_boss_health = 1000


def compute_reward(prev_player_health, player_health, prev_boss_health, boss_health):
    # Simple example: positive for boss damage, negative for player damage
    boss_damage = prev_boss_health - boss_health
    player_damage = prev_player_health - player_health
    reward = (boss_damage * 2) - (player_damage * 3)  # weight boss damage higher
    return reward


def state_from_data(data: Dict[str, Any]):
    return (
        data["distance"],
        data["player_health"],
        data["boss_health"],
        data["action_taken"],
    )


class RLConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        logger.debug(f"→ connect: {self.scope['path']} from {self.scope.get('client')}")
        await self.accept()

    async def disconnect(self, code):
        logger.debug(f"→ disconnect (code={code})")
        await self.disconnect(code=HTTP_200_OK)

    async def receive_json(self, content: Dict[str, Any], **kwargs):
        global prev_boss_health, prev_player_health
        logger.debug(f"← receive_json: {content}")

        state = state_from_data(content)
        action = content.get("action_taken")

        assert action is not None, "Action is None!"

        reward = compute_reward(
            content.get("prev_player_health"),
            content.get("player_health"),
            content.get("prev_boss_health"),
            content.get("boss_health"),
        )

        agent.update(state, action, reward, state)
        next_action = agent.choose_action(state)
        # next_state = state  # In this simple case, next_state is same as current

        await self.send_json({"next_action": int(next_action)})
        logger.info(f"Sent response: {{'next_action': {next_action}}}")

        prev_player_health = content.get("player_health")
        prev_boss_health = content.get("boss_health")
