from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import *
from user.serializer import *


class JobListingSerializer(serializers.ModelSerializer):
    hr_recruiter = RegisterSerializer()
    class Meta:
        model = PostJob
        fields = '__all__'

class HrRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username','email','phonenumber','work_status','password'] 

    def create(self, validated_data):
        user = CustomUser.objects.create(
            username=validated_data['username'],
            phonenumber=validated_data['phonenumber'],
            email=validated_data['email'],
            work_status=validated_data['work_status'],
            is_staff=True,
            is_active=False,
      
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    