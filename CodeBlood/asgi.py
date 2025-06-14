"""
ASGI config for CodeBlood project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from django.urls import path
from django.conf import settings
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator

from game.websocket import RLConsumer

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "CodeBlood.settings")

websocket_app = URLRouter([path("bot/", RLConsumer.as_asgi())])

if settings.DEBUG:
    websocket_handler = websocket_app
else:
    websocket_handler = AllowedHostsOriginValidator(websocket_app)

application = ProtocolTypeRouter(
    {
        "http": get_asgi_application(),
        "websocket": websocket_handler,
    }
)
