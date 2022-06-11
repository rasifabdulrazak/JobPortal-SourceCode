from django.shortcuts import render
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
from .models import Conversation
from django.db.models import Q
from .serializer import ChatSerializer
# Create your views here.
class ChatView(APIView):
    def post(self,request,format=None):
        print(request.data)
        serializer = ChatSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print(serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    def get(self,request,pk):
        print(pk)
        user = Conversation.objects.filter(Q(user1__id=pk) | Q(user2__id=pk))
        print(user)
        serializer = ChatSerializer(user,many=True)
        print(serializer)
        return Response(serializer.data)

