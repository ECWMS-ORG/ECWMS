from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobPositionViewSet, CandidateViewSet, OnBoardingViewSet


router = DefaultRouter()
router.register('job_positions', JobPositionViewSet)
router.register('candidates', CandidateViewSet)
router.register('onboardings', OnBoardingViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
