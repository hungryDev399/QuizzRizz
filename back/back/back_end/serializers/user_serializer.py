from rest_framework import serializers
from ..models import Instructor, Student


class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = ['name', 'email', 'password', 'national_id',
                  'phone_number', 'school', 'instructor_id']


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['name', 'email', 'password', 'national_id',
                  'phone_number', 'school', 'student_id', 'major', 'concentration']
