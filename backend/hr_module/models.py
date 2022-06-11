from django.db import models
from user.models import CustomUser
# Create your models here.


# TABLE STORING HR DETAILS

class HrProfile(models.Model):
    hr_recruiter = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name="hr_profile"
    )
    profile_photo = models.ImageField(upload_to='hr_profilepics/', null=True)
    location = models.CharField(max_length=200, null=True)
    age = models.CharField(max_length=20)
    profile_summary = models.TextField()
    year_of_experience = models.PositiveIntegerField()
    company = models.CharField(max_length=300)


class PostJob(models.Model):
    hr_recruiter = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name="job_posting"
    )
    posting_date = models.DateField(auto_now_add=True, null=True)
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    about_company = models.TextField()
    location = models.CharField(max_length=300)
    experience_required = models.CharField(max_length=500)
    job_description = models.TextField()
    job_highlights = models.CharField(max_length=500)
    educational_requirments = models.CharField(max_length=500)
    salary_from = models.IntegerField()
    salary_to = models.IntegerField()
    requirements = models.TextField()
    skills_required = models.CharField(max_length=100, null=True)


class PremiumPlans(models.Model):
    added_date = models.DateField(auto_now_add=True, null=True)
    plan_name = models.CharField(max_length=200, unique=True)
    duration = models.CharField(max_length=200,unique=True)
    plan_rate = models.CharField(max_length=100,unique=True)
    plan_description = models.TextField()


class AppliedUsers(models.Model):
    applied_date = models.DateField(auto_now_add=True, null=True)
    applied_user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name="applied_user"
    )
    applied_job  = models.ForeignKey(
        PostJob, on_delete=models.CASCADE, related_name="applied_jobs"
    )

class SavedJobs(models.Model):
    saved_date = models.DateField(auto_now_add=True, null=True)
    saved_user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name="saved_user"
    )
    saved_job = models.ForeignKey(
        PostJob, on_delete=models.CASCADE, related_name="saved_jobs"
    )


class PremiumCustomers(models.Model):
    user =  models.ForeignKey(CustomUser,on_delete=models.CASCADE,related_name= 'premium_customer') 
    plan = models.ForeignKey(PremiumPlans,on_delete=models.CASCADE,related_name= 'plan_used') 
    date_of_begin = models.DateField(auto_now_add=True,null=True)
