from django.db import models
from user.models import CustomUser
# Create your models here.
class Conversation(models.Model):
    user1 = models.ForeignKey(CustomUser,on_delete=models.CASCADE, related_name= 'user_1')
    user2 = models.ForeignKey(CustomUser,on_delete=models.CASCADE, related_name= 'user_2')