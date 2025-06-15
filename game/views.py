from django.utils import timezone
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny

from .models import Lobby, Player
from .serializers import LobbySerializer, PlayerSerializer

# Create your views here.


class LobbyViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = LobbySerializer
    queryset = Lobby.objects.all()

    def perform_destroy(self, instance: Lobby):
        now = timezone.now()
        time_elapsed = (now - instance.created_at).total_seconds()

        player = instance.host

        if time_elapsed > player.high_score:
            player.high_score = int(time_elapsed)
            player.save()

        instance.delete()


class PlayerViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = PlayerSerializer
    queryset = Player.objects.all()
