# Use Python 3.13 image
FROM python:3.13-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip \
  && pip install -r requirements.txt

# Copy Django project files
COPY . .

# Expose port (default Django port)
EXPOSE 8000

# Run server
CMD ["gunicorn", "CodeBlood.wsgi:application", "--bind", "0.0.0.0:8000"]

