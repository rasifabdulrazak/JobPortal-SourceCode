# Generated by Django 4.0.4 on 2022-05-27 08:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hr_module', '0010_savedjobs'),
    ]

    operations = [
        migrations.AlterField(
            model_name='premiumplans',
            name='plan_rate',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]