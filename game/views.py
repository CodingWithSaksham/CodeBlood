from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import Lobby, Player
from .serializers import LobbySerializer, PlayerSerializer

# Create your views here.


class LobbyViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = LobbySerializer
    queryset = Lobby.objects.all()

    @action(detail=True, methods=["POST"])
    def start(self, request, pk=None):
        lobby = self.get_object()

        return Response({"id": lobby.id})


class PlayerViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = PlayerSerializer
    queryset = Player.objects.all()
