from django.db import models

# Create your models here.
class UserData(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=15)
    address = models.TextField()

    def __str__(self):
        return self.name
