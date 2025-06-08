from django.db import models
from uuid import uuid4

# Create your models here.


class Player(models.Model):
    player_id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    player_name = models.CharField(unique=True, max_length=100)
    high_score = models.FloatField(default=0)


class Lobby(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    host = models.ForeignKey(Player, related_name="host_id", on_delete=models.CASCADE)
    player_name = models.ForeignKey(
        Player,
        to_field="player_name",
        related_name="host_name",
        on_delete=models.CASCADE,
    )
    score = models.FloatField(default=0)
    created_at = models.DateField(auto_now=True)
