# Use an official Python runtime as a parent image
FROM python:3.8

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the requirements file into the container at /usr/src/app
COPY requirements.txt ./

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV NAME World

# Run app.py when the container launches
# CMD ["python", "back/manage.py", "migrate;", "python", "back/manage.py", "runserver", "0.0.0.0:8000"]
CMD ["sh", "-c", "python back/manage.py makemigrations && python back/manage.py migrate && python back/manage.py runserver 0.0.0.0:8000"]