from rest_framework import serializers
from .models import JobPosition, Candidate, OnBoarding

class JobPositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPosition
        fields = '__all__'

class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = '__all__'

class OnBoardingSerializer(serializers.ModelSerializer):
    class Meta:
        model = OnBoarding
        fields = '__all__'

        