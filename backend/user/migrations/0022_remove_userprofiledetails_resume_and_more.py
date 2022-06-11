# Generated by Django 4.0.4 on 2022-06-09 15:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0021_delete_premiumcustomers'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofiledetails',
            name='resume',
        ),
        migrations.RemoveField(
            model_name='userprofiledetails',
            name='resume_headline',
        ),
        migrations.CreateModel(
            name='UserResume',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('resume', models.FileField(null=True, upload_to='user_resume/')),
                ('resume_headline', models.CharField(max_length=300, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_resume', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
