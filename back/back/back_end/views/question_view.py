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

    @api_view(['Post'])
    def create_question(request):
        required_fields = ['question_text', 'question_type', 'correct_answer']
        for field in required_fields:
            if field not in request.data:
                field_without_underscore = field.replace('_', ' ')
                return Response({'error': field_without_underscore + ' This field is required.'}, status=400)

        question_text = request.data.get('question_text')
        question_type = request.data.get('question_type')
        correct_answer = request.data.get('correct_answer')

        choices = request.data.get('choices', None)
        if question_type == 'MCQ' and choices is None:
            return Response({'error': 'Choices are required for MCQ questions'}, status=400)
        if question_type == 'Essay' and choices is not None:
            return Response({'error': 'Choices are not required for Essay questions'}, status=400)
        question = QuestionService.create_question(
            question_text, question_type, correct_answer, choices)
        if question is not None:
            serializer = QuestionSerializer(question)
            return Response({'success': 'Question created successfully', 'question': serializer.data}, status=200)
        return Response({'error': 'Question does not exist'}, status=400)

    @api_view(['DELETE'])
    def delete_question(request, question_id):
        question = QuestionService.delete_question(question_id)
        if question is not None:
            return Response({'success': 'Question deleted successfully'}, status=200)
        return Response({'error': 'Question does not exist'}, status=400)
