from django.db import models


class Material(models.Model):
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    material_id = models.CharField(max_length=255, unique=True)
    link = models.CharField(max_length=255)
    major = models.CharField(max_length=255)
    subject = models.ForeignKey(
        'Subject', related_name='materials', on_delete=models.CASCADE)


class MaterialService:

    @staticmethod
    def create_material(name, type, material_id, link, major):
        material = Material(name=name, type=type,
                            material_id=material_id, link=link, major=major)
        material.save()
        return material

    @staticmethod
    def get_material_by_id(material_id):
        try:
            return Material.objects.get(material_id=material_id)
        except Material.DoesNotExist:
            return None

    @staticmethod
    def update_material(material_id, name=None, type=None, link=None, major=None):
        material = MaterialService.get_material_by_id(material_id)
        if material is not None:
            if name is not None:
                material.name = name
            if type is not None:
                material.type = type
            if link is not None:
                material.link = link
            if major is not None:
                material.major = major
            material.save()
        return material

    @staticmethod
    def delete_material(material_id):
        material = MaterialService.get_material_by_id(material_id)
        if material is not None:
            material.delete()
        return material
