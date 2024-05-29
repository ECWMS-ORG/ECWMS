from django.db import models

class JobPosition(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    requirements = models.TextField()
    posted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Candidate(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    resume = models.FileField(upload_to='resumes/')
    applied_position = models.ForeignKey(JobPosition, on_delete=models.CASCADE)
    applied_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=[('Applied', 'Applied'), ('Interview', 'Interview'), ('Hired', 'Hired'), ('Rejected', 'Rejected')])

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
class OnBoarding(models.Model):
    candidate = models.OneToOneField(Candidate, on_delete=models.CASCADE)
    onboarding_date = models.DateField()
    documents_submitted = models.BooleanField(default=False)
    orientation_completed = models.BooleanField(default=False)

    def __str__(self):
        return f'Onboarding for {self.candidate.first_name} {self.candidate.last_name}'
