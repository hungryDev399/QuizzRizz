from rest_framework import serializers
from ..models import Quiz, Grade


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = '__all__'


class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = '__all__'


class GradeSerializerByStudent(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = ['quiz', 'grade']


class GradeSerializerByQuiz(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = ['student', 'grade']
