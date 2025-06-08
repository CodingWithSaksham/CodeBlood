from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import LobbyViewSet, PlayerViewSet

router = DefaultRouter()
router.register(r"lobbies", LobbyViewSet, basename="lobby")
router.register(r"player", PlayerViewSet, basename="player")

urlpatterns = [path("", include(router.urls))]
