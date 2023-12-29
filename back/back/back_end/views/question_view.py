from rest_framework.response import Response
from rest_framework.decorators import api_view
from ..serializers import QuestionSerializer
from ..models import QuestionService
from rest_framework.exceptions import ValidationError

import ast


class QuestionView:
    @api_view(['Post'])
    def update_question(request):
        required_fields = ['question_id']
        for field in required_fields:
            if field not in request.data:
                return Response({'error': 'This field is required.'}, status=400)

        question_id = request.data.get('question_id')
        question_text = request.data.get('question_text', None)
        question_type = request.data.get('question_type', None)
        correct_answer = request.data.get('correct_answer', None)
        choices = request.data.get('choices', None)

        question = QuestionService.update_question(
            question_id, question_text, question_type, correct_answer, choices)
        if question is not None:
            serializer = QuestionSerializer(question)
            return Response({'success': 'Question updated successfully', 'question': serializer.data}, status=200)
        return Response({'error': 'Question does not exist'}, status=400)
