from django.db import models
# ENUMS


class Major(models.TextChoices):
    CSAI = 'CSAI'
    Business = 'Business'
    Science = 'Science'
    Engineering = 'Engineering'


class Concentration(models.TextChoices):
    SWD = 'SWD'
    DSAI = 'DSAI'
    IT = 'IT'
    Business = 'Business'
    BMS = 'BMS'
    Physics = 'Physics'
    Nanotechnology = 'Nanotechnology'
    NanoScience = 'NanoScience'
    Envirmontal = 'Envirmontal'
    Renewable = 'Renewable'
    CIE = 'CIE'
    Aerospace = 'Aerospace'


class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=2550)
    national_id = models.CharField(max_length=255, unique=True)
    phone_number = models.CharField(max_length=255, unique=True)
    school = models.CharField(max_length=255)

    class Meta:
        abstract = True


class Student(User):
    student_id = models.CharField(max_length=255, unique=True)
    major = models.CharField(max_length=255, choices=Major.choices)
    concentration = models.CharField(
        max_length=255, choices=Concentration.choices)
    # Add the quiz grades later


class Instructor(User):
    instructor_id = models.CharField(max_length=255, unique=True)
    # Add the quizzes
