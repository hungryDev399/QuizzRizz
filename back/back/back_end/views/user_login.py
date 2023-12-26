from ..models import Student, Instructor
from rest_framework.decorators import api_view
from rest_framework.status import HTTP_404_NOT_FOUND
from django.core.exceptions import ObjectDoesNotExist
from ..serializers import StudentSerializer, InstructorSerializer
from rest_framework.response import Response


@api_view(['POST',])
def student_login(request):
    if request.method == 'POST':
        # check if a student with this id exists or not
        try:
            student = Student.objects.get(
                student_id=request.data['student_id'])
            if student.password == request.data['password']:
                return Response({'success': 'Login Successful.'})
            else:
                return Response({'error': 'Icnorrect password'}, status=HTTP_404_NOT_FOUND)

        except ObjectDoesNotExist:
            return Response({'error': 'student with this id does not exist.'}, status=HTTP_404_NOT_FOUND)


@api_view(['POST',])
def instructor_login(request):
    if request.method == 'POST':
        # check if a student with this id exists or not
        try:
            instructor = Instructor.objects.get(
                instructor_id=request.data['instructor_id'])
            if instructor.password == request.data['password']:
                return Response({'success': 'instructor with this id exists.'})
            else:
                return Response({'error': 'Icnorrect password'}, status=HTTP_404_NOT_FOUND)
        except ObjectDoesNotExist:
            return Response({'error': 'instructor with this id does not exist.'}, status=HTTP_404_NOT_FOUND)
