from django.urls import path, include
from .views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('api/account/register/', CreateUserView.as_view(), name='register'),
    path('api/account/token/', TokenObtainPairView.as_view(), name="get_token"),
    path('api/account/token/refresh/', TokenRefreshView.as_view(), name="refresh"),
    path("api-auth/", include("rest_framework.urls")),
]