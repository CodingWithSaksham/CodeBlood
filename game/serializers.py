from rest_framework.serializers import ModelSerializer

from .models import Lobby, Player


class PlayerSerializer(ModelSerializer):
    class Meta:
        model = Player
        fields = ["player_id", "player_name", "high_score"]


class LobbySerializer(ModelSerializer):
    class Meta:
        model = Lobby
        fields = "__all__"
