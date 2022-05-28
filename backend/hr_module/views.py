from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework import serializers
from rest_framework.decorators import api_view

# Create your views here.
class JobListingView(APIView):
    permission_classes = (AllowAny,)
    def get(self,request,pk=None):
        if pk!=None:
            jobs = PostJob.objects.filter(hr_recruiter=pk).order_by('-posting_date')
            serializer = JobListingSerializer(jobs,many=True)
            return Response(serializer.data)
        else:
            jobs = PostJob.objects.all().order_by('-posting_date')
            serializer = JobListingSerializer(jobs,many=True)
            return Response(serializer.data)

    def delete(self,request,pk):
        print(pk)
        jobs = PostJob.objects.filter(id = pk)
        print(jobs)
        jobs.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        


class HrRegistrationView(APIView):
    def post(self,request):
        serializer = HrRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    def get(self,request,pk=None):
        print(pk)
        if pk!=None:
            hr=CustomUser.objects.filter(id=pk)
            serializer = HrRegisterSerializer(hr,many=True)
            return Response(serializer.data)
        hr = CustomUser.objects.filter(is_superuser=0,is_staff=1).order_by('-date_joined')
        serializer = HrRegisterSerializer(hr,many=True)
        return Response(serializer.data)

    def patch(self,request,pk):
        print(pk)
        user = CustomUser.objects.get(id=pk)
        user.is_active = not(user.is_active)
        user.save()
        return Response({"user_id": user.id})


    
class JobRenderingView(viewsets.ModelViewSet):
    queryset = PostJob.objects.all().order_by('-posting_date')
    serializer_class = JobListingSerializer

    def create(self,request):
        serializer = JobListingSerializer(data=request.data)
        if serializer.is_valid():
            print("sdfghj")
            serializer.save()
            return Response(serializer.data)
        else:
            print("sdfghj")
            print(serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def hr(request):
    serializer = JobListSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    
class PremiumPlanView(viewsets.ModelViewSet):
    queryset = PremiumPlans.objects.all().order_by('-added_date')
    serializer_class = PremiumPlansSerializer

    def create(self,request):
        serializer = PremiumPlansSerializer(data=request.data)
        if serializer.is_valid():
            print("sdfghj")
            serializer.save()
            return Response(serializer.data)
        else:
            print("sdfghj")
            print(serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
class SavedJobsView(viewsets.ModelViewSet):
    queryset = SavedJobs.objects.all().order_by('-saved_date')
    serializer_class = SavedJobsSerializer

class SaveJobs(APIView):
    def get(self,request,pk):
        saved_jobs = SavedJobs.objects.filter(saved_user = pk).order_by('-saved_date')
        serializer = SavedJobsSerializer(saved_jobs,many=True)
        return Response(serializer.data)


@api_view(['POST'])
def savingJobs(request):
    serializer = SavingJobsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)