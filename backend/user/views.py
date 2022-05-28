from django.shortcuts import render
from .serializer import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
# from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
# from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
# from rest_auth.registration.views import SocialLoginView


# # Create your views here.

# class FacebookLogin(SocialLoginView):
#     adapter_class = FacebookOAuth2Adapter
# class GoogleLogin(SocialLoginView):
#     adapter_class = GoogleOAuth2Adapter


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
    def get(self,request,pk=None):
        if pk!=None:
            users = CustomUser.objects.filter(id=pk)
            serializer = RegisterSerializer(users,many=True)
            return Response(serializer.data)

        users = CustomUser.objects.filter(is_superuser=0,is_staff=0).order_by('-date_joined')
        serializer = RegisterSerializer(users,many=True)
        return Response(serializer.data)

    def patch(self,request,pk):
        print(pk)
        user = CustomUser.objects.get(id=pk)
        user.is_active = not(user.is_active)
        user.save()
        return Response({"user_id": user.id})



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
    def get(self,request,pk):
        user_profile = UserProfileDetails.objects.filter(user=pk)
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
    def get(self,request,pk):
        user_personal = UserPersonalDetails.objects.filter(user=pk)
        serializer = UserPersonalSerializer(user_personal,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = UserPersonalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print(serializer.errors)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



class UserSkillsView(APIView):
    permission_classes = (AllowAny,)
    def get(self,request,pk):
        user_skills = UserSkills.objects.filter(user=pk)
        serializer = UserSkillsSerializer(user_skills,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = UserSkillsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self,request,pk):
        user_skills = UserSkills.objects.filter(id=pk)
        user_skills.delete()
        serializer = UserSkillsSerializer(user_skills,many=True)
        return Response(serializer.data)



class UserEmploymentView(APIView):
    permission_classes = (AllowAny,)
    def get(self,request,pk):
        user_employment = UserEmploymentDetails.objects.filter(user=pk)
        serializer = UserEmploymentSerializer(user_employment,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = UserEmploymentSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            print("WERTY")
            serializer.save()
            print("qwertyu")
            return Response(serializer.data)
        else:
            print(serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk):
        user_employment = UserEmploymentDetails.objects.filter(id=pk)
        user_employment.delete()
        serializer = UserEmploymentSerializer(user_employment,many=True)
        return Response(serializer.data)



class UserEducationView(APIView):
    permission_classes = (AllowAny,)
    def get(self,request,pk):
        user_education = UserEducationDetails.objects.filter(user=pk)
        serializer = UserEducationSerializer(user_education,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = UserEducationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk):
        user_education = UserEducationDetails.objects.filter(id=pk)
        user_education.delete()
        serializer = UserEducationSerializer(user_education,many=True)
        return Response(serializer.data)



class UserProjectView(APIView):
    permission_classes = (AllowAny,)
    def get(self,request,pk):
        user_project = UserProjectDetails.objects.filter(user=pk)
        serializer = UserProjectSerializer(user_project,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = UserProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk):
    
        user_project = UserProjectDetails.objects.filter(id=pk)
      
        user_project.delete()
        serializer = UserProjectSerializer(user_project,many=True)
        return Response(serializer.data)

