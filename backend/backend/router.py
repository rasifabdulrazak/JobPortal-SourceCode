from hr_module.views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('jobsrender',JobRenderingView,basename='jobs')