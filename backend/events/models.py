
from django.db import models

# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    start_datetime = models.DateTimeField(blank=True, null=True)
    end_datetime = models.DateTimeField(blank=True, null=True)
    event_image = models.URLField(
        default="https://via.placeholder.com/150", blank=True, null="True"
    )
>>>>>>> f80b11adecc4d87ef78d708bb77415c9bc27d965
