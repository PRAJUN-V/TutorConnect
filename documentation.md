TutorConnect : E-Learning Platform Complete Documentation of the project

Frontend : React
Backend  : Django, DjangoRestFramework

Set up Git and GitHub for this project.
    - Initial commit at this stage.
        git commit -m "initial commit"
git commit -m "initial set up of project named server in backend completed"
git commit -m "added tailwind css in frontend"
git commit -m "User model is changed to use email instead of username"
removed pycache folder from git tracking: git rm --cached -r __pycache__
__pycache__/ : added in .gitignore file


___________________________________________________________________________________________________
    

Backend

- Created virtual environment named venv

- pip install django djangorestframework django-cors-headers
        Installed these packages

- python.exe -m pip install --upgrade pip
        To upgrade the pip packager

- Added venv in .gitignore file

- django-admin startproject server .
        Created a project named server

- Added cors-header and djangorestframework in installed app of settings
        'rest_framework',
        'corsheaders',

- Added cors-header middleware
        'corsheaders.middleware.CorsMiddleware'

- Specify your CORS settings in settings.py 
        CORS_ALLOW_ALL_ORIGINS = True

- You can add global settings for Django REST framework in settings.py, May change it later according to my need.
        REST_FRAMEWORK = {
            'DEFAULT_AUTHENTICATION_CLASSES': [
            'rest_framework.authentication.BasicAuthentication',
            'rest_framework.authentication.SessionAuthentication',
        ],
            'DEFAULT_PERMISSION_CLASSES': [
            'rest_framework.permissions.IsAuthenticated',
            ],
        }

- python manage.py migrate

- Added db.sqlite3 in .gitignore

- Using Email instead of username in User model
        Tutorial followed : https://www.youtube.com/watch?v=Um-rWZKhL3E
        First delete current  db.sqlite database
        pip install django-use-email-as-username
        python manage.py create_custom_user_app
        python manage.py createsuperuser
                - email: admin@gmail.com
                - password : Admin@123
        How to use the custom User model?
                from django.contrib.auth import get_user_model
                User = get_user_model()
        

- By watching this tutorial you will get a clear idea about how authentication using jwt token works but I am not using this in my project
        https://youtu.be/llrIu4Qsl7c?si=PMNOOa1RQnZAZxvF
        https://youtu.be/llrIu4Qsl7c?t=804 : How to use REST Client to check restapi directly from vscode.

- Created a folder named API Documentation using REST Client save all the api endpoints for testing.

- Creating a app named accounts from authentication purpose like registration, login ...etc.

- Created a file named accounts.rest in API Documentation for testing api's related to authentication.

- Created serializer in accounts app for custom User.
        Created UserSerializer

- Created a generic view for creating user.

- Created url patterns for authentication in accounts.urls

- pip install djangorestframework-simplejwt
        - 'rest_framework_simplejwt', : include this in installed app
        REST_FRAMEWORK = {
                'DEFAULT_AUTHENTICATION_CLASSES': (
                'rest_framework_simplejwt.authentication.JWTAuthentication',
                ),
        }

- If you need to customize JWT settings, you can do so in your settings.py:
        from datetime import timedelta

        SIMPLE_JWT = {
        'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
        'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
        'ROTATE_REFRESH_TOKENS': True,
        'BLACKLIST_AFTER_ROTATION': True,
        'ALGORITHM': 'HS256',
        'SIGNING_KEY': SECRET_KEY,
        'VERIFYING_KEY': None,
        'AUTH_HEADER_TYPES': ('Bearer',),
        'USER_ID_FIELD': 'id',
        'USER_ID_CLAIM': 'user_id',
        'AUTH_TOKEN_CLASSES': ('access',),
        'AUTH_HEADER_TYPES': ('Bearer',),
        }

- registration api is tested and it is working properly.

- api for getting token using credential is tested and working properly.

- api for getting new access token and refresh token by inputing refresh token.
        I tested it but it is giving both refresh and access token rather than only access token.
        I have sorted the issue:
                'ROTATE_REFRESH_TOKENS': True , simple jwt setting in setting.py caused this issue when I changed it to false it worked. I commanded that settings for now.

- registration, get_token, refresh token is working properly in backend.



___________________________________________________________________________________________________

Frontend

- Created folders backend and frontent. 

- npm create vite@latest
        Created React project

- Connected tailwind CSS with frontend
        Documentation: https://tailwindcss.com/docs/guides/vite

