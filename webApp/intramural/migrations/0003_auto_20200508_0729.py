# Generated by Django 3.0.4 on 2020-05-08 07:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('intramural', '0002_auto_20200508_0726'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='users',
            name='que1',
        ),
        migrations.RemoveField(
            model_name='users',
            name='que2',
        ),
    ]
