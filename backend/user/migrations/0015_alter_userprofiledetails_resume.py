# Generated by Django 4.0.4 on 2022-04-28 06:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0014_alter_userprofiledetails_resume'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofiledetails',
            name='resume',
            field=models.FileField(null=True, upload_to='user_resume/'),
        ),
    ]
