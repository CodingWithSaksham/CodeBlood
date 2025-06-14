from typing import Any, Dict
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from rest_framework.status import HTTP_200_OK
from logging import getLogger

from .q_learning import QLearningAgent

logger = getLogger("game.websocket")
agent = QLearningAgent()


def state_from_data(data: Dict[str, Any]):
    """
    Convert JSON game data into a tuple state for Q-table.
    """
    return (
        {"near": 0, "mid": 1, "far": 2}[data.get("distance", "near")],
        {"low": 0, "mid": 1, "high": 2}[data.get("player_health", "low")],
        {"low": 0, "mid": 1, "high": 2}[data.get("boss_health", "low")],
        int(data.get("skill_ready", 0)),
    )


class RLConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        logger.debug(f"→ connect: {self.scope['path']} from {self.scope.get('client')}")
        await self.accept()

    async def disconnect(self, code):
        logger.debug(f"→ disconnect (code={code})")
        await self.disconnect(code=HTTP_200_OK)

    async def receive_json(self, content, **kwargs):
        logger.debug(f"← receive_json: {content}")

        # extract RL tuple
        state = state_from_data(content)
        action = content["action_taken"]
        reward = content["reward"]
        done = content["done"]
        next_state = state  # or computed next_state

        agent.update(state, action, reward, next_state)

        # send back JSON automatically
        next_action = agent.choose_action(next_state)
        await self.send_json({"next_action": next_action})
        logger.info(f"Sent response: {{'next_action': {next_action}}}")
