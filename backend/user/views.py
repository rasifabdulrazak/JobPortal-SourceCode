from django.shortcuts import render
from .serializer import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated

# Create your views here.


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



class UserRegistration(APIView):
    def post(self,request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    def get(self,request):
        users = CustomUser.objects.filter(is_superuser=0).order_by('-date_joined')
        serializer = RegisterSerializer(users,many=True)
        return Response(serializer.data)
    


class LogoutView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)



class UserProfileDetailsView(APIView):
    permission_classes = (AllowAny,)
    def get(self,request):
        user_profile = UserProfileDetails.objects.all()
        serializer = UserProfileSerializer(user_profile,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def put(self,request):
        instance = UserProfileDetails.objects.get(id = request.GET['id'])
        serializer = UserProfileSerializer(instance,request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



class UserPersonalDetailsView(APIView):
    permission_classes = (AllowAny,)
    def get(self,request):
        user_personal = UserPersonalDetails.objects.all()
        serializer = UserPersonalSerializer(user_personal,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = UserPersonalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



class UserSkillsView(APIView):
    permission_classes = (AllowAny,)
    def get(self,request):
        user_skills = UserSkills.objects.all()
        serializer = UserSkillsSerializer(user_skills,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = UserSkillsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        


class UserEmploymentView(APIView):
    permission_classes = (AllowAny,)
    def get(self,request):
        user_employment = UserEmploymentDetails.objects.all()
        serializer = UserEmploymentSerializer(user_employment,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = UserEmploymentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



class UserEducationView(APIView):
    permission_classes = (AllowAny,)
    def get(self,request):
        user_education = UserEducationDetails.objects.all()
        serializer = UserEducationSerializer(user_education,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = UserEducationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



class UserProjectView(APIView):
    permission_classes = (AllowAny,)
    def get(self,request):
        user_project = UserProjectDetails.objects.all()
        serializer = UserProjectSerializer(user_project,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = UserProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
