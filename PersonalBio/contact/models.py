from django.db import models

# Create your models here.
class ContactInfo(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=50)
    message = models.TextField(max_length=500)
    created_at = models.DateTimeField()
