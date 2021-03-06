# Generated by Django 4.0.4 on 2022-06-04 08:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('hr_module', '0012_alter_premiumplans_duration'),
    ]

    operations = [
        migrations.CreateModel(
            name='PremiumCustomers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_of_begin', models.DateField(auto_now_add=True, null=True)),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='plan_used', to='hr_module.premiumplans')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='premium_customer', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
