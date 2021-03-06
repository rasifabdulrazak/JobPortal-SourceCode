# Generated by Django 4.0.4 on 2022-05-13 09:46

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('hr_module', '0006_alter_postjob_hr_recruiter_delete_hrrecruiter'),
    ]

    operations = [
        migrations.CreateModel(
            name='HrProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profile_photo', models.ImageField(null=True, upload_to='hr_profilepics/')),
                ('location', models.CharField(max_length=200, null=True)),
                ('age', models.CharField(max_length=20)),
                ('profile_summary', models.TextField()),
                ('year_of_experience', models.PositiveIntegerField()),
                ('company', models.CharField(max_length=300)),
                ('hr_recruiter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hr_profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
