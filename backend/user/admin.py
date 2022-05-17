from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(CustomUser)
admin.site.register(UserProfileDetails)
admin.site.register(UserPersonalDetails)
admin.site.register(UserSkills)
admin.site.register(UserEmploymentDetails)
admin.site.register(UserEducationDetails)
admin.site.register(UserProjectDetails)
# admin.site.register(SavedJobs)