from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import YourModelViewSet

router = DefaultRouter()
router.register(r'yourmodels', YourModelViewSet, basename='yourmodel')

urlpatterns = [
    path('', include(router.urls)),
]