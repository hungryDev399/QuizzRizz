from rest_framework import serializers
from ..models import Question


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'question_text', 'question_type',
                  'correct_answer', 'choices']
