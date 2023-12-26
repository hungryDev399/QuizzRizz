
from django.core.exceptions import ObjectDoesNotExist

from rest_framework.response import Response
from rest_framework.decorators import api_view
from ..serializers import SubjectSerializer, MaterialSerializer

from ..models import Subject, Material
from ..models import SubjectService, MaterialService


# get all subjects
@api_view(['GET'])
def get_all_subjects(request):
    subjects = Subject.objects.all()
    serializer = SubjectSerializer(subjects, many=True)
    return Response(serializer.data)

# get material by course code


@api_view(['GET'])
def get_slides_by_course_code(request, course_code):
    materials = SubjectService.get_all_slides(course_code)
    if materials is not None and materials != []:
        serializer = MaterialSerializer(materials, many=True)
        return Response(serializer.data)
    return Response(
        {'message': 'Subject not found or there were no materials of this type assocaited with it'},
        status=404)


@api_view(['GET'])
def get_all_recorded_videos(request, course_code):
    materials = SubjectService.get_all_recorded_videos(course_code)
    if materials is not None and materials != []:
        serializer = MaterialSerializer(materials, many=True)
        return Response(serializer.data)
    return Response(
        {'message': 'Subject not found or there were no materials of this type assocaited with it'},
        status=404)


@api_view(['GET'])
def get_all_past_exams(request, course_code):
    materials = SubjectService.get_all_past_exams(course_code)
    if materials is not None and materials != []:
        serializer = MaterialSerializer(materials, many=True)
        return Response(serializer.data)
    return Response(
        {'message': 'Subject not found or there were no materials of this type assocaited with it'},
        status=404)


@api_view(['GET'])
def get_subject_by_id(request, subject_id):
    subject = SubjectService.get_subject_by_id(subject_id)
    if subject is None:
        return Response({'error': 'Subject does not exist'})
    serializer = SubjectSerializer(subject)
    return Response(serializer.data)
