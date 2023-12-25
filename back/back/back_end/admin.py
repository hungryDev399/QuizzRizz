from django.contrib import admin

# Register your models here.
import back_end.models # replace 'YourModel' with the name of your model

admin.site.register(back_end.models.YourModel)
admin.site.register(back_end.models.User)