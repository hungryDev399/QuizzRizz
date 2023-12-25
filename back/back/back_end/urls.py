from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import YourModelViewSet
from .views.user_view import registration_student_view, registration_instructor_view
from .views.user_login import student_login, instructor_login
from .views.subject_view import get_all_subjects, get_slides_by_course_code, get_all_recorded_videos
router = DefaultRouter()
router.register(r'yourmodels', YourModelViewSet, basename='yourmodel')

urlpatterns = [
    path('', include(router.urls)),
    path('register/student', registration_student_view, name="register"),
    path('register/instructor', registration_instructor_view,
         name="register-instructor"),
    path('login/student', student_login, name="student-login"),
    path('login/instructor', instructor_login, name="instructot-login"),
    path('subjects', get_all_subjects, name="subjects"),
    path('subjects/<str:course_code>/slides/',
         get_slides_by_course_code, name='get_slides_by_course_code'),
    path('subjects/<str:course_code>/recorded_videos/',
         get_all_recorded_videos, name='get_all_recorded_videos'),



]
