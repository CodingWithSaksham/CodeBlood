import asyncio
import websockets
import json
from q_learning import QLearningAgent

agent = QLearningAgent()

def compute_reward(prev_player_health, player_health, prev_boss_health, boss_health):
    # Simple example: positive for boss damage, negative for player damage
    boss_damage = prev_boss_health - boss_health
    player_damage = prev_player_health - player_health
    reward = (boss_damage * 2) - (player_damage * 3)  # weight boss damage higher
    return reward

def state_from_data(data):
    return (
        data["distance"],
        data["player_health"],
        data["boss_health"],
        data["boss_action_taken"]
    )

async def handler(websocket):
    async for message in websocket:
        try:
            data = json.loads(message)
            print(f"Received data: {data}")

            state = state_from_data(data)
            action = data["player_action_taken"]

            reward = compute_reward(
                data["prev_player_health"], 
                data["player_health"], 
                data["prev_boss_health"], 
                data["boss_health"]
            )

            next_state = state  # In this simple case, next_state is same as current

            agent.update(state, action, reward, next_state)
            next_action = agent.choose_action(next_state)

            response = {"next_action": int(next_action)}
            await websocket.send(json.dumps(response))
            print(f"Sent response: {response}")

        except Exception as e:
            print(f"Error processing message: {e}")

async def main():
    async with websockets.serve(handler, "localhost", 8000):
        print("Server running on ws://localhost:8000")
        await asyncio.Future()

if __name__ == "__main__":
    asyncio.run(main())
