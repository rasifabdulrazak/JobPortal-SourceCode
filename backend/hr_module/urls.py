from django.urls import path,include
from .views import *
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

urlpatterns = [
    path('jobslist/',JobListingView.as_view(),name='job_listing'),
    path('hr_register/',HrRegistrationView.as_view(),name='hr_register')
]+router.urls