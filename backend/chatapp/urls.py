from django.urls import path,include
from .views import ChatView

urlpatterns = [
    path('chat/<int:pk>/',ChatView.as_view(),name="chating"),
    path('chat/',ChatView.as_view(),name="chating"),
]