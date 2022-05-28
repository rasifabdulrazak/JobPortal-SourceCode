from django.urls import path,include
from .views import *
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

urlpatterns = [
    path('jobslist/',JobListingView.as_view(),name='job_listing'),
    path('jobslist/<int:pk>/',JobListingView.as_view(),name='job_listing'),
    path('hr_register/',HrRegistrationView.as_view(),name='hr_register'),
    path('hr_register/<int:pk>/',HrRegistrationView.as_view(),name='hr_register'),
    path('saved_jobs/<int:pk>/',SaveJobs.as_view(),name='saved_jobs'),
    path('hr/',views.hr,name='hr'),
    path('saving_job/',views.savingJobs,name='saving_job'),
]+router.urls