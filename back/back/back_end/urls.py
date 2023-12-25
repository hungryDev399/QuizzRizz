from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import YourModelViewSet
from .views.user_view import registration_student_view, registration_instructor_view
from .views.user_login import student_login, instructor_login
router = DefaultRouter()
router.register(r'yourmodels', YourModelViewSet, basename='yourmodel')

urlpatterns = [
    path('', include(router.urls)),
    path('register/student', registration_student_view, name="register"),
    path('register/instructor', registration_instructor_view,
         name="register-instructor"),

    path('student/login', student_login, name="student-login"),
    path('instructor/login', instructor_login, name="instructot-login"),

]
