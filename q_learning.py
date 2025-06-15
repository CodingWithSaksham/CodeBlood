import numpy as np
from collections import defaultdict

class QLearningAgent:

    def __init__(self, num_actions=5, alpha=0.1, gamma=0.99, epsilon=0.4, min_epsilon=0.1, e_decay_rate=0.98):
        self.num_actions = num_actions  
        self.Q = defaultdict(lambda: np.zeros(num_actions))
        self.alpha = alpha
        self.gamma = gamma
        self.epsilon = epsilon
        self.min_epsilon = min_epsilon
        self.e_decay_rate = e_decay_rate

    def update(self, state, action, reward, next_state):
        max_next = np.max(self.Q[next_state])
        old_value = self.Q[state][action]
        self.Q[state][action] += self.alpha * (reward + self.gamma * max_next - old_value)
        print(f"Q[{state}][{action}] updated from {old_value:.3f} to {self.Q[state][action]:.3f} | reward: {reward}")

    def choose_action(self, state):
        if np.random.rand() < self.epsilon:
            action = np.random.randint(self.num_actions)
            print(f"Choosing random action: {action}")
            return action
        else:
            action = int(np.argmax(self.Q[state]))
            print(f"Choosing best action: {action}")
            return action

    def decay_epsilon(self):
        old_epsilon = self.epsilon
        self.epsilon = max(self.min_epsilon, self.epsilon * self.e_decay_rate)
        print(f"Epsilon decayed from {old_epsilon:.4f} to {self.epsilon:.4f}")
