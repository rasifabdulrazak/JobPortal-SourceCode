# Generated by Django 4.0 on 2022-04-24 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_alter_customuser_work_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='work_status',
            field=models.CharField(max_length=100),
        ),
    ]