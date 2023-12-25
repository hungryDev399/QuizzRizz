from django.db import models
from abc import ABC, abstractmethod


class QuestionInterface(ABC):
    @abstractmethod
    def check_answer(self, answer):
        pass


class MCQ(QuestionInterface):
    def __init__(self, choices, correct_answer):
        self.choices = choices
        self.correct_answer = correct_answer

    def check_answer(self, answer_index):
        return self.choices[answer_index] == self.correct_answer


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


class QuestionService:
    @staticmethod
    def check_answer(question, answer):
        if question.question_type == 'MCQ':
            checker = MCQ(question.correct_answer)
        else:
            checker = Essay(question.correct_answer)
        return checker.check_answer(answer)

    @staticmethod
    def create_question(question_text, question_type, correct_answer):
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
    def update_question(question_id, question_text=None, question_type=None, correct_answer=None):
        question = QuestionService.get_question_by_id(question_id)
        if question is not None:
            if question_text is not None:
                question.question_text = question_text
            if question_type is not None:
                question.question_type = question_type
            if correct_answer is not None:
                question.correct_answer = correct_answer
            question.save()
        return question

    @staticmethod
    def delete_question(question_id):
        question = QuestionService.get_question_by_id(question_id)
        if question is not None:
            question.delete()
        return question
