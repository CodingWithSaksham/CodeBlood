"""
ASGI config for CodeBlood project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
from django.urls import path
from django.conf import settings

from game.websocket import RLConsumer

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "CodeBlood.settings")

django_asgi_app = get_asgi_application()  # <--- create once

websocket_urlpatterns = [path("bot/", RLConsumer.as_asgi())]
websocket_app = URLRouter(websocket_urlpatterns)

application = ProtocolTypeRouter(
    {
        "http": django_asgi_app,
        "websocket": AllowedHostsOriginValidator(websocket_app)
        if not settings.DEBUG
        else websocket_app,
    }
)
