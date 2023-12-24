from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from ..models.your_model import YourModel
from ..serializers.your_model_serializer import YourModelSerializer

class YourModelViewSet(viewsets.ModelViewSet):
    queryset = YourModel.objects.all()
    serializer_class = YourModelSerializer
