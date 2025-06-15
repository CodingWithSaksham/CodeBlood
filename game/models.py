from django.db import models
from uuid import uuid4


# Create your models here.
class Player(models.Model):
    player_id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    player_name = models.CharField(unique=True, max_length=100)
    high_score = models.IntegerField(default=0)


class Lobby(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    host = models.ForeignKey(Player, related_name="host_id", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
