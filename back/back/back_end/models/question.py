import json
from django.db import models
from abc import ABC, abstractmethod


class QuestionInterface(ABC):
    @abstractmethod
    def check_answer(self, answer):
        pass


class MCQ(QuestionInterface):
    def __init__(self, correct_answer, choices=[]):
        self.choices = choices
        self.correct_answer = correct_answer

    def check_answer(self, correct_answer):
        return self.correct_answer.lower() == correct_answer.lower()


class Essay(QuestionInterface):
    def __init__(self, correct_answer):
        self.correct_answer = correct_answer

    def check_answer(self, answer):
        return self.correct_answer.lower() == answer.lower()


class Question(models.Model):
    QUESTION_TYPES = (
        ('MCQ', 'Multiple Choice'),
        ('ESSAY', 'Essay'),
    )
    question_text = models.CharField(max_length=200)
    question_type = models.CharField(max_length=5, choices=QUESTION_TYPES)
    correct_answer = models.CharField(max_length=200)
    choices = models.TextField(blank=True, null=True)

    def set_choices(self, choices_list):
        self.choices = json.dumps(choices_list)

    def get_choices(self):
        return json.loads(self.choices)


class QuestionService:
    @staticmethod
    def check_answer(question, answer):
        if question.question_type == 'MCQ':
            checker = MCQ(question.correct_answer)
        else:
            checker = Essay(question.correct_answer)
        return checker.check_answer(answer)

    @staticmethod
    def create_question(question_text, question_type, correct_answer, choices=None):
        if choices is not None:
            choices = json.dumps(choices)
            question = Question(question_text=question_text,
                                question_type=question_type, correct_answer=correct_answer, choices=choices)
        else:
            question = Question(question_text=question_text,
                                question_type=question_type, correct_answer=correct_answer)
        question.save()
        return question

    @staticmethod
    def get_question_by_id(question_id):
        try:
            return Question.objects.get(id=question_id)
        except Question.DoesNotExist:
            return None

    @staticmethod
    def update_question(question_id, question_text=None, question_type=None, correct_answer=None, choices=None):
        question = QuestionService.get_question_by_id(question_id)
        if question is not None:
            if question_text is not None:
                question.question_text = question_text
            if question_type is not None:
                question.question_type = question_type
            if correct_answer is not None:
                question.correct_answer = correct_answer
            if choices is not None:
                question.set_choices(choices)
            question.save()
        return question

    @staticmethod
    def delete_question(question_id):
        question = QuestionService.get_question_by_id(question_id)
        if question is not None:
            question.delete()
        return question
