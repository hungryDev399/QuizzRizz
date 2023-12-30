from rest_framework import serializers
from ..models import Question
import ast


class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = ['id', 'question_text', 'question_type',
                  'correct_answer', 'choices']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if representation['choices']:
            # Convert the list to a string and replace double quotes with single quotes
            representation['choices'] = str(ast.literal_eval(
                representation['choices'])).replace('"', "'")
        return representation
