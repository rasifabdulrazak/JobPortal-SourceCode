from django.shortcuts import render
from .serializer import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from backend.settings import RAZORPAYAUTHONE,RAZORPAYAUTHSECOND
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import FormParser, MultiPartParser

import razorpay

client = razorpay.Client(
    auth=(RAZORPAYAUTHONE,RAZORPAYAUTHSECOND))



class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserRegistration(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk=None):
        if pk != None:
            users = CustomUser.objects.filter(id=pk)
            serializer = RegisterSerializer(users, many=True)
            return Response(serializer.data)

        users = CustomUser.objects.filter(
            is_superuser=0, is_staff=0).order_by('-date_joined')
        serializer = RegisterSerializer(users, many=True)
        return Response(serializer.data)

    def patch(self, request, pk):
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
    parser_classes = [MultiPartParser, FormParser]
    def get(self, request, pk):
        user_profile = UserProfileDetails.objects.filter(user=pk)
        serializer = UserProfileSerializer(user_profile, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request,pk):
        print(request)
        instance = UserProfileDetails.objects.get(user=pk)
        serializer = UserProfileSerializer(
            instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        print("+++++++++++++++++")
        print(request.data)
        print("+++++++++++++++++")
        user = UserProfileDetails.objects.get(user=pk)
        print("&&&&&&&&&&&&&&&&&&&")
        print(user)
        print("###############")
        serializer = UserProfileSerializer(user, data=request.data, partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print(serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class UserResumeView(APIView):
    permission_classes = (AllowAny,)
    parser_classes = [MultiPartParser, FormParser]
    def post(self,request):
        serializer = UserResumeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print(serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    def get(self,request,pk):
        user_resume = UserResume.objects.filter(user=pk)
        serializer = UserResumeSerializer(user_resume, many=True)
        return Response(serializer.data)

    def delete(self,request,pk):
        user_resume = UserResume.objects.filter(id=pk)
        user_resume.delete()
        serializer = UserResumeSerializer(user_resume, many=True)
        return Response(serializer.data)

    def put(self, request,pk):
        print(request.data)
        instance = UserResume.objects.get(id=pk)
        serializer = UserResumeSerializer(
            instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class UserPersonalDetailsView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, pk):
        user_personal = UserPersonalDetails.objects.filter(user=pk)
        serializer = UserPersonalSerializer(user_personal, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserPersonalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserSkillsView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, pk):
        user_skills = UserSkills.objects.filter(user=pk)
        serializer = UserSkillsSerializer(user_skills, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSkillsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        user_skills = UserSkills.objects.filter(id=pk)
        user_skills.delete()
        serializer = UserSkillsSerializer(user_skills, many=True)
        return Response(serializer.data)


class UserEmploymentView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, pk):
        user_employment = UserEmploymentDetails.objects.filter(user=pk)
        serializer = UserEmploymentSerializer(user_employment, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserEmploymentSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            print("WERTY")
            serializer.save()
            print("qwertyu")
            return Response(serializer.data)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        user_employment = UserEmploymentDetails.objects.filter(id=pk)
        user_employment.delete()
        serializer = UserEmploymentSerializer(user_employment, many=True)
        return Response(serializer.data)

    def put(self, request,pk):
        print(request.data)
        instance = UserEmploymentDetails.objects.get(id=pk)
        serializer = UserEmploymentSerializer(
            instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class UserEducationView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, pk):
        user_education = UserEducationDetails.objects.filter(user=pk)
        serializer = UserEducationSerializer(user_education, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserEducationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        user_education = UserEducationDetails.objects.filter(id=pk)
        user_education.delete()
        serializer = UserEducationSerializer(user_education, many=True)
        return Response(serializer.data)

    def put(self, request,pk):
        print(request.data)
        instance = UserEducationDetails.objects.get(id=pk)
        serializer = UserEducationSerializer(
            instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserProjectView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, pk):
        user_project = UserProjectDetails.objects.filter(user=pk)
        serializer = UserProjectSerializer(user_project, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        user_project = UserProjectDetails.objects.filter(id=pk)
        user_project.delete()
        serializer = UserProjectSerializer(user_project, many=True)
        return Response(serializer.data)

    def put(self, request,pk):
        print(request.data)
        instance = UserProjectDetails.objects.get(id=pk)
        serializer = UserProjectSerializer(
            instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def payment(request):
    razorpay_order = client.order.create(data={
        "amount":int(request.data["price"]) * 100,
        "currency": "INR",
        'payment_capture':'0',
    })
    return Response(razorpay_order)

class PaymentSuccessView(APIView):
    def post(self,request):
        print("++++++++++++++")
        print(request.data)
        print("------------------")
        serializer = PaymentSuccessSerializer(data=request.data)
        print("$$$$$$$$$$$$$$$$$$$$$$$$$4")
        if serializer.is_valid():
            print("@@@@@@@@@@@@@@@@@@@@@@@@")
            serializer.save()
            print("******************************")
            return Response(serializer.data)
        else:
            print(serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    def get(self,request):
        customer = PremiumCustomers.objects.all()
        serializer = PaymentSuccessSerializer(customer, many=True)
        return Response(serializer.data)

# @api_view(['GET'])
# def getPremiumCustomers(request):
#     customer = PremiumCustomers.objects.all()
#     serializer = PremiumCustomerSerializer(customer, many=True)
#     return Response(serializer.data)
    