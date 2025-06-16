import asyncio
import websockets
import json
from q_learning import QLearningAgent



agent = QLearningAgent()

def state_from_data(data):
    """
    Convert JSON game data into a tuple state for Q-table.
    """
    return (
        {"near": 0, "mid": 1, "far": 2}[data["distance"]],
        {"low": 0, "mid": 1, "high": 2}[data["player_health"]],
        {"low": 0, "mid": 1, "high": 2}[data["boss_health"]],
        int(data["skill_ready"])
    )

async def handler(websocket):
    async for message in websocket:
        try:
            data = json.loads(message)
            print(f"Received data: {data}")

            # Extract state info
            state = state_from_data(data)
            action = data["action_taken"]
            reward = data["reward"]
            done = data["done"]
            next_state = state  

            # Update Q-table
            agent.update(state, action, reward, next_state)

            # Send next recommended action 
            next_action = agent.choose_action(next_state)
            response = {"next_action": next_action}
            await websocket.send(json.dumps(response))
            print(f"Sent response: {response}")

        except Exception as e:
            print(f"Error processing message: {e}")

async def main():
    async with websockets.serve(handler, "localhost", 8000):
        print("Server running on ws://localhost:8000")
        await asyncio.Future()  # Keep running forever

if __name__ == "__main__":
    asyncio.run(main())
