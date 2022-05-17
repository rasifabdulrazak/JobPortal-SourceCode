from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import *


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        token['is_superuser'] = user.is_superuser
        token['is_staff'] = user.is_staff
        # ...
        return token

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username','email','phonenumber','work_status','password'] 

    def create(self, validated_data):
        user = CustomUser.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            phonenumber=validated_data['phonenumber'],
            work_status=validated_data['work_status'],
            
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfileDetails
        fields = '__all__'
    

class UserPersonalSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPersonalDetails
        fields = '__all__'

class UserSkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSkills
        fields = '__all__'


class UserEmploymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserEmploymentDetails
        fields = '__all__'

class UserEducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserEducationDetails
        fields = '__all__'


class UserProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProjectDetails
        fields = '__all__'