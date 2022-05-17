from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework import serializers

# Create your views here.
class JobListingView(APIView):
    permission_classes = (AllowAny,)
    def get(self,request):
        jobs = PostJob.objects.all()
        serializer = JobListingSerializer(jobs,many=True)
        return Response(serializer.data)


class HrRegistrationView(APIView):
    def post(self,request):
        serializer = HrRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    def get(self,request):
        hr = CustomUser.objects.filter(is_superuser=0,is_staff=1).order_by('-date_joined')
        serializer = HrRegisterSerializer(hr,many=True)
        return Response(serializer.data)


    
class JobRenderingView(viewsets.ModelViewSet):
    queryset = PostJob.objects.all()
    serializer_class = JobListingSerializer