from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import *
from hr_module.models import PremiumCustomers



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
        fields = '__all__'

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
    user = RegisterSerializer(partial=True)
    # email=serializers.CharField()
    # files = serializers.FileField()
   
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

class UserResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserResume
        fields='__all__'


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

class PaymentSuccessSerializer(serializers.ModelSerializer):
    email =serializers.CharField(source='user.email',read_only=True)
    phonenumber =serializers.CharField(source='user.phonenumber',read_only=True)
    user_id =serializers.CharField(source='user.username',read_only=True)
    plan_id =serializers.CharField(source='plan.plan_name',read_only=True)
    duration=serializers.CharField(source='plan.duration',read_only=True)
    class Meta:
        model = PremiumCustomers
        fields = '__all__'

# class PremiumCustomerSerializer(serializers.ModelSerializer):
  
#     class Meta:
#         model = PremiumCustomers
#         fields = '__all__'