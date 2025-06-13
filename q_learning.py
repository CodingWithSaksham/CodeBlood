import numpy as np
from collections import defaultdict

class QLearningAgent:
    def __init__(self, num_actions=5, alpha=0.1, gamma=0.99):
        self.Q = defaultdict(lambda: np.zeros(num_actions))
        self.alpha = alpha
        self.gamma = gamma

    def update(self, state, action, reward, next_state):
        """
        Update Q-value using standard Q-learning update rule.
        """
        max_next = np.max(self.Q[next_state])
        old_value = self.Q[state][action]
        self.Q[state][action] += self.alpha * (reward + self.gamma * max_next - old_value)
        print(f"Q[{state}][{action}] updated from {old_value:.3f} to {self.Q[state][action]:.3f}")

    def choose_action(self, state):
        """
        For now, choose the greedy action (can add epsilon-greedy later).
        """
         """
        Chooses an action using ε-greedy policy.
        """
        if np.random.rand() < self.epsilon:
            # Explore: random action
            return np.random.choice(self.actions)
        else:
            # Exploit: best action for this state
            return np.argmax(self.q_table[state])

