from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import YourModelViewSet, QuestionView
from .views.user_view import registration_student_view, registration_instructor_view, get_instructor_by_id, get_email_by_instructor_id
from .views.user_login import student_login, instructor_login
from .views.subject_view import get_all_subjects, get_slides_by_course_code, get_all_recorded_videos, get_subject_by_id, get_all_past_exams
from .views.quiz_view import get_all_quizzes, get_quiz_questions_by_id, get_quiz_answers_by_id, grade_quiz, get_grades_by_student_id, get_grades_by_quiz_id, get_quizzes_by_instructor_id, create_quiz
from .views import MessageView
router = DefaultRouter()
router.register(r'yourmodels', YourModelViewSet, basename='yourmodel')

urlpatterns = [
    path('', include(router.urls)),
    path('register/student', registration_student_view, name="register"),
    path('register/instructor', registration_instructor_view,
         name="register-instructor"),
    path('login/student', student_login, name="student-login"),
    path('login/instructor', instructor_login, name="instructor_by_id"),
    path('instructors/<str:instructor_id>',
         get_instructor_by_id, name='get_instructor_by_id'),
    path('subjects', get_all_subjects, name="subjects"),
    path('subjects/<str:course_code>/slides/',
         get_slides_by_course_code, name='get_slides_by_course_code'),
    path('subjects/<str:course_code>/recorded_videos/',
         get_all_recorded_videos, name='get_all_recorded_videos'),
    path('subjects/<str:course_code>/past_exams/',
         get_all_past_exams, name='get_all_past_exams'),
    path('subjects/<int:subject_id>',
         get_subject_by_id, name='get_subject_by_id'),

    path('quizzes', get_all_quizzes, name="quizzes"),
    path('quizzes/<int:quiz_id>/questions',
         get_quiz_questions_by_id, name='get_quiz_by_id'),
    path('quizzes/<int:quiz_id>/answers',
         get_quiz_answers_by_id, name='get_quiz_by_id'),
    path('quizzes/<int:quiz_id>/<int:student_id>',
         grade_quiz, name='grade_quiz'),
    path('grades/<int:student_id>',
         get_grades_by_student_id, name='get_grades_by_student_id'),
    path('grades/quiz/<int:quiz_id>',
         get_grades_by_quiz_id, name='get_grades_by_quiz_id'),
    path('messages/motivational', MessageView.get_a_motivational_message),
    path('messages/rizz', MessageView.get_rizz_message),
    path('quizzes/instructor/<int:instructor_id>', get_quizzes_by_instructor_id),
    path('instructors/<str:instructor_id>/email', get_email_by_instructor_id),
    path('question', QuestionView.update_question),
    path('question/create', QuestionView.create_question),
    path('question/delete/<int:question_id>', QuestionView.delete_question),
    path('quizzes/create', create_quiz),
    path('quizzes/create2', create_quiz),

]
