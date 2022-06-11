from django.db import models
from django.contrib.auth.models import User, AbstractUser

from cloudinary.models import CloudinaryField
# Create your models here.



# BASE TABLE FOR STORING USER AND HR DETAILS
class CustomUser(AbstractUser):
    phonenumber = models.CharField(max_length=10, unique=True)
    work_status = models.CharField(max_length=100,null=True)


# TABLE FOR STORING USER PROFILE DETAILS 
class UserProfileDetails(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE, related_name= 'user_profile_detail')
    added_date = models.DateTimeField(auto_now_add=True,null=True)
    location = models.CharField(max_length=200,null=True)
    profile_photo = models.ImageField(upload_to='user_profilepics/',null=True)
    profile_summary=models.TextField()

class UserResume(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE, related_name= 'user_resume')
    resume = models.FileField(upload_to ='user_resume/',null=True)
    resume_headline = models.CharField(max_length=300,null=True)



# TABLE FOR STORING USER PERSONAL DETAILS
class UserPersonalDetails(models.Model):
    user =  models.ForeignKey(CustomUser,on_delete=models.CASCADE,related_name= 'user_personal_detail')
    added_date = models.DateTimeField(auto_now_add=True,null=True)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=20)
    adress = models.CharField(max_length=100)
    marital_status = models.CharField(max_length=100,default=None)
    hometown=models.CharField(max_length=100)
    pincode = models.CharField(max_length=100)


# TABLE FOR STORING USER SKILLS IN THE FIELD 
class UserSkills(models.Model):
    user =  models.ForeignKey(CustomUser,on_delete=models.CASCADE,related_name= 'user_skill') 
    added_date = models.DateTimeField(auto_now_add=True,null=True)
    skills = models.CharField(max_length=200,null=True,unique=True)


# TABLE FOR STORING USER EMPLOYMENT DETAILS IF ANY  
class UserEmploymentDetails(models.Model):
    user =  models.ForeignKey(CustomUser,on_delete=models.CASCADE,related_name= 'user_employement_detail') 
    added_date = models.DateTimeField(auto_now_add=True,null=True)
    company_name = models.CharField(max_length=200,null=True)
    expereince = models.IntegerField(null=True)
    started_date = models.DateField()
    ending_date = models.DateField()
    salary = models.IntegerField()
    position = models.CharField(max_length = 200)
    job_description = models.TextField()

    def __str__(self):
        return self.company_name

    # def __iter__(self):
    #     return [field.value_to_string(self) for field in UserEmploymentDetails._meta.fields]


# TABLE FOR STORING USER EDUCATIONAL DETAILS IF ANY
class UserEducationDetails(models.Model):
    user =  models.ForeignKey(CustomUser,on_delete=models.CASCADE,related_name= 'user_education_detail') 
    added_date = models.DateTimeField(auto_now_add=True,null=True)
    course = models.CharField(max_length=300)
    branch = models.CharField(max_length=300)
    university = models.CharField(max_length=400)
    passout_year = models.DateField()
    grade = models.IntegerField()


# TABLE FOR STORING USER PROJECT DETAILS IF ANY
class UserProjectDetails(models.Model):
    user =  models.ForeignKey(CustomUser,on_delete=models.CASCADE,related_name= 'user_project_detail') 
    added_date = models.DateTimeField(auto_now_add=True,null=True)
    title = models.CharField(max_length = 300)
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length = 300)
    details = models.TextField()

# TABLE FOR STORING SAVED JOBS
# class SavedJobs(models.Model):
#     user =  models.ForeignKey(CustomUser,on_delete=models.CASCADE,related_name= 'saved_jobs')
#     added_date = models.DateTimeField(auto_now_add=True,null=True)
#     job = models.ManyToManyField(to='hr_module.Postjob')



