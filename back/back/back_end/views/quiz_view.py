from django.core.exceptions import ObjectDoesNotExist

from rest_framework.response import Response
from rest_framework.decorators import api_view

from ..serializers import GradeSerializer, QuizSerializer, QuestionSerializer, GradeSerializerByStudent, GradeSerializerByQuiz, InstructorQuizSerializer
from ..models import Quiz, Question, Grade, Instructor
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


@api_view(['GET'])
def get_quizzes_by_instructor_id(request, instructor_id):
    quizzes = Quiz.objects.filter(instructor__instructor_id=instructor_id)
    if not quizzes.exists():
        return Response({'error': 'Quiz does not exist'}, status=400)
    serializer = InstructorQuizSerializer(quizzes, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_quiz(request):
    subject_id = request.data.get('subject_id')
    instructor_id = request.data.get('instructor_id')
    questions = request.data.get('questions', [])
    level_of_difficulty = request.data.get('level_of_difficulty', 'Unknown')
    subject = SubjectService.get_subject_by_id(subject_id)
    try:
        instructor = Instructor.objects.get(instructor_id=instructor_id)
    except ObjectDoesNotExist:
        instructor = None
    # get questions by id and make a list of object questions
    for i in range(len(questions)):
        question_id = questions[i]
        question = QuestionService.get_question_by_id(question_id)
        if question is None:
            return Response({'error': 'The question with id ' + str(question_id) + ' does not exist'}, status=400)
        questions[i] = question

    if subject is None:
        return Response({'error': 'Subject does not exist'}, status=400)
    if instructor is None:
        return Response({'error': 'Instructor does not exist'}, status=400)
    # get all possible choices for level of difficulty
    difficulty_choices = [choice[0] for choice in Quiz.Quiz_LEVELS]
    if level_of_difficulty not in difficulty_choices:
        return Response({'error': 'Invalid level of difficulty'}, status=400)
    quiz = QuizService.create_quiz(
        subject, instructor, questions, level_of_difficulty)
    serializer = QuizSerializer(quiz)
    return Response({'success': 'Quiz created successfully', 'quiz': serializer.data}, status=200)
