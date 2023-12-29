from django.core.exceptions import ObjectDoesNotExist

from rest_framework.response import Response
from rest_framework.decorators import api_view

from ..serializers import GradeSerializer, QuizSerializer, QuestionSerializer, GradeSerializerByStudent, GradeSerializerByQuiz
from ..models import Quiz, Question, Grade
from ..models import QuizService, QuestionService
from ..models import SubjectService
from ..models import Student


@api_view(['GET'])
def get_all_quizzes(request):
    quizzes = QuizService.get_all_quizzes()
    serializer = QuizSerializer(quizzes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_quiz_questions_by_id(request, quiz_id):
    quiz = QuizService.get_quiz_by_id(quiz_id)
    if quiz is None:
        return Response({'error': 'Quiz does not exist'})
    questions = quiz.questions.all()
    serializer = QuestionSerializer(questions, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_quiz_answers_by_id(request, quiz_id):
    quiz = QuizService.get_quiz_by_id(quiz_id)
    if quiz is None:
        return Response({'error': 'Quiz does not exist'})
    questions = quiz.questions.all()
    answers = {}
    for question in questions:
        answers[question.id] = question.correct_answer
    return Response({'answers': answers})


@api_view(['POST'])
def grade_quiz(request, quiz_id, student_id):
    answers = request.data.get('answers', {})
    grade = QuizService.grade_quiz(quiz_id, student_id, answers)
    if grade is not None:
        return Response({'grade': grade.grade})
    else:
        return Response({'error': 'Invalid quiz or student id'}, status=400)


@api_view(['GET'])
def get_grades_by_student_id(request, student_id):
    grades = Grade.objects.filter(student__student_id=student_id)
    if not grades.exists():
        return Response({'error': 'Student does not exist'}, status=400)
    serializer = GradeSerializerByStudent(grades, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_grades_by_quiz_id(request, quiz_id):
    grades = Grade.objects.filter(quiz__id=quiz_id)
    if not grades.exists():
        return Response({'error': 'Quiz does not exist'}, status=400)
    serializer = GradeSerializerByQuiz(grades, many=True)
    return Response(serializer.data)
