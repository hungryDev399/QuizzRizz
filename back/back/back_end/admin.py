from django.contrib import admin

# Register your models here.
import back_end.models  # replace 'YourModel' with the name of your model

admin.site.register(back_end.models.YourModel)
admin.site.register(back_end.models.Instructor)
admin.site.register(back_end.models.Student)
admin.site.register(back_end.models.Material)
admin.site.register(back_end.models.Subject)
admin.site.register(back_end.models.Question)
admin.site.register(back_end.models.Quiz)
admin.site.register(back_end.models.Grade)
