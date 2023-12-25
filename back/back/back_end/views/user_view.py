from django.core.exceptions import ObjectDoesNotExist

from rest_framework.response import Response
from rest_framework.decorators import api_view
from ..serializers import StudentSerializer, InstructorSerializer


@api_view(['POST',])
def registration_student_view(request):
    if request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data['response'] = 'successfully registered a new user.'
            data['email'] = user.email
            data['name'] = user.name
            data['phone_number'] = user.phone_number
            data['national_id'] = user.national_id
            data['school'] = user.school
            data['major'] = user.major
            data['concentration'] = user.concentration
            data['student_id'] = user.student_id
        else:
            data = serializer.errors
        return Response(data)


@api_view(['POST',])
def registration_instructor_view(request):
    if request.method == 'POST':
        serializer = InstructorSerializer(data=request.data)
        print(request.data)
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data['response'] = 'successfully registered a new user.'
            data['email'] = user.email
            data['name'] = user.name
            data['phone_number'] = user.phone_number
            data['national_id'] = user.national_id
            data['school'] = user.school
            data['instructor_id'] = user.instructor_id
        else:
            data = serializer.errors
        return Response(data)
