from django.core.exceptions import ObjectDoesNotExist
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ..services.message_service import MessageService


class MessageView(APIView):
    @api_view(['GET'])
    def get_a_motivational_message(request):
        message = MessageService.get_a_motivational_message()
        return Response({'message': message})

    @api_view(['GET'])
    def get_rizz_message(request):
        message = MessageService.get_rizz_message()
        return Response({'message': message})
