from django.db import models
from .question import Question, QuestionService
from .subject import Subject
from .user import Instructor, Student
from django.core.validators import MaxValueValidator, MinValueValidator


class Quiz(models.Model):
    Quiz_LEVELS = (
        ("Easy", "Easy"),
        ("Medium", "Medium"),
        ("Hard", "Hard"),
        ("Very Hard", "Very Hard"),
        ("Unbelievably Hard", "Unbelievably Hard"),
        ("Eb2a 2abelny lw 7aleto", "Eb2a 2abelny lw 7aleto"),
        ("Unknown", "Unknown"),
    )
    questions = models.ManyToManyField(Question)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE)
    grades = models.ManyToManyField(Student, through='Grade')
    level_of_difficulty = models.CharField(
        max_length=50, choices=Quiz_LEVELS, default="Unknown")


class Grade(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    grade = models.IntegerField()


class QuizService:
    @staticmethod
    def create_quiz(subject, instructor, questions, level_of_difficulty="Unknown"):
        quiz = Quiz(subject=subject, instructor=instructor,
                    level_of_difficulty=level_of_difficulty)
        quiz.save()
        quiz.questions.set(questions)
        return quiz

    @staticmethod
    def get_quiz_by_id(quiz_id):
        try:
            return Quiz.objects.get(id=quiz_id)
        except Quiz.DoesNotExist:
            return None

    @staticmethod
    def get_all_quizzes():
        return Quiz.objects.all()

    @staticmethod
    def add_question(quiz_id, question_id):
        quiz = QuizService.get_quiz_by_id(quiz_id)
        question = QuestionService.get_question_by_id(question_id)
        if quiz is not None and question is not None:
            quiz.questions.add(question)
            quiz.save()
        return quiz

    @staticmethod
    def update_quiz(quiz_id, subject=None, instructor=None, questions=None):
        quiz = QuizService.get_quiz_by_id(quiz_id)
        if quiz is not None:
            if subject is not None:
                quiz.subject = subject
            if instructor is not None:
                quiz.instructor = instructor
            if questions is not None:
                quiz.questions.set(questions)
            quiz.save()
        return quiz

    @staticmethod
    def delete_quiz(quiz_id):
        quiz = QuizService.get_quiz_by_id(quiz_id)
        if quiz is not None:
            quiz.delete()
        return quiz

    @staticmethod
    def grade_quiz(quiz_id, student_id, answers):
        quiz = QuizService.get_quiz_by_id(quiz_id)
        student = Student.objects.get(student_id=student_id)
        if quiz is not None and student is not None:
            correct_answers = 0
            for question in quiz.questions.all():
                answer = answers.get(str(question.id))
                if QuestionService.check_answer(question, answer):
                    correct_answers += 1
            grade, created = Grade.objects.get_or_create(
                student=student, quiz=quiz, defaults={'grade': correct_answers})
            if not created and correct_answers > grade.grade:
                grade.grade = correct_answers
                grade.save()
            return grade
        return None

    @staticmethod
    def get_quiz_grades(quiz_id):
        quiz = QuizService.get_quiz_by_id(quiz_id)
        if quiz is not None:
            return quiz.grades.all()
        return None

    @staticmethod
    def get_student_grade(quiz_id, student_id):
        quiz = QuizService.get_quiz_by_id(quiz_id)
        if quiz is not None:
            try:
                return quiz.grades.get(student_id=student_id)
            except Grade.DoesNotExist:
                return None
        return None

    @staticmethod
    def change_difficulty(quiz_id, difficulty):
        quiz = QuizService.get_quiz_by_id(quiz_id)
        if quiz is not None:
            quiz.level_of_difficulty = difficulty
            quiz.save()
        return quiz
