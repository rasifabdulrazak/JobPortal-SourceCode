# Generated by Django 4.0.4 on 2022-05-26 07:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hr_module', '0007_hrprofile'),
    ]

    operations = [
        migrations.AddField(
            model_name='postjob',
            name='skills_required',
            field=models.CharField(max_length=100, null=True),
        ),
    ]