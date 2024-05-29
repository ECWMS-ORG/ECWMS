from django.shortcuts import render
from .models import JobPosition, Candidate, OnBoarding
from .serializers import JobPositionSerializer, CandidateSerializer, OnBoardingSerializer

class JobPositionViewSet(viewsets.ModelViewSet):
    queryset = JobPosition.objects.all()
    serializer_class = JobPositionSerializer

class CandidateViewSet(viewsets.ModelViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer

class OnBoardingViewSet(viewsets.ModelViewSet):
    queryset = OnBoarding.objects.all()
    serializer_class = OnBoardingSerializer