from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Conversation
from user.serializer import RegisterSerializer

class ChatSerializer(serializers.ModelSerializer):
    user1__id = serializers.CharField(source='user1.username',read_only=True)
    user2__id = serializers.CharField(source='user2.username',read_only=True)
    
    class Meta:
        model = Conversation
        fields = '__all__'