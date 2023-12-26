from rest_framework import serializers
from ..models import Material


class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = ['name', 'type', 'material_id', 'link', 'major', 'subject']
