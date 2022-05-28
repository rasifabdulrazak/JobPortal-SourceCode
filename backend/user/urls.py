from django.urls import path,include
from .views import *
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('users/',UserRegistration.as_view(),name='registration'),
    path('users/<int:pk>/',UserRegistration.as_view(),name='registration'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('logout/', views.LogoutView.as_view(), name='token_refresh'),
    path('users/user_profile/',UserProfileDetailsView.as_view(),name = 'user_profile'),
     path('users/user_profile/<int:pk>/',UserProfileDetailsView.as_view(),name = 'user_profile'),
    path('users/user_personal/',UserPersonalDetailsView.as_view(),name = 'user_personal'),
    path('users/user_personal/<int:pk>/',UserPersonalDetailsView.as_view(),name = 'user_personal'),
    path('users/user_skills/',UserSkillsView.as_view(),name = 'user_skills'),
    path('users/user_skills/<int:pk>/',UserSkillsView.as_view(),name = 'user_skills'),
    path('users/user_employment/',UserEmploymentView.as_view(),name = 'user_employment'),
    path('users/user_employment/<int:pk>/',UserEmploymentView.as_view(),name = 'user_employment'),
    path('users/user_education/',UserEducationView.as_view(),name = 'user_education'),
    path('users/user_education/<int:pk>/',UserEducationView.as_view(),name = 'user_education'),
    path('users/user_projects/',UserProjectView.as_view(),name = 'user_projects'),
    path('users/user_projects/<int:pk>/',UserProjectView.as_view(),name = 'user_projects'),
]
