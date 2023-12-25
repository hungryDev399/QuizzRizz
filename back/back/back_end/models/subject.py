from django.db import models


class Subject(models.Model):
    name = models.CharField(max_length=255)
    course_code = models.CharField(max_length=255, unique=True)


class SubjectService:
    @staticmethod
    def create_subject(name, course_code):
        subject = Subject(name=name, course_code=course_code)
        subject.save()
        return subject

    @staticmethod
    def get_subject_by_course_code(course_code):
        try:
            return Subject.objects.get(course_code=course_code)
        except Subject.DoesNotExist:
            return None

    @staticmethod
    def update_subject(course_code, name=None):
        subject = SubjectService.get_subject_by_course_code(course_code)
        if subject is not None:
            if name is not None:
                subject.name = name
            subject.save()
        return subject

    @staticmethod
    def delete_subject(course_code):
        subject = SubjectService.get_subject_by_course_code(course_code)
        if subject is not None:
            subject.delete()
        return subject

    @staticmethod
    def get_all_materials(course_code):
        subject = SubjectService.get_subject_by_course_code(course_code)
        if subject is not None:
            return subject.materials.all()
        return None

    @staticmethod
    def get_all_slides(course_code):
        subject = SubjectService.get_subject_by_course_code(course_code)
        materials = subject.materials.all()
        slides = []
        for material in materials:
            if material.type == 'slide':
                slides.append(material)
        if len(slides) == 0:
            return None
        return slides

    @staticmethod
    def get_all_recorded_videos(course_code):
        subject = SubjectService.get_subject_by_course_code(course_code)
        materials = subject.materials.all()
        recorded_videos = []
        for material in materials:
            if material.type == 'recorded_video':
                recorded_videos.append(material)
        if len(recorded_videos) == 0:
            return None
        return recorded_videos

    @staticmethod
    def get_all_past_exams(course_code):
        subject = SubjectService.get_subject_by_course_code(course_code)
        materials = subject.materials.all()
        past_exams = []
        for material in materials:
            if material.type == 'past_exam':
                past_exams.append(material)
        if len(past_exams) == 0:
            return None
        return past_exams
