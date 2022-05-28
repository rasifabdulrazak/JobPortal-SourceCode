from hr_module.views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('jobsrender',JobRenderingView,basename='jobs')
router.register('premium_plans',PremiumPlanView,basename='plans')
router.register('saved_jobs',SavedJobsView,basename='saved_jobs')