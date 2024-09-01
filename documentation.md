TutorConnect : E-Learning Platform Complete Documentation of the project

Frontend : React
Backend  : Django, DjangoRestFramework

Set up Git and GitHub for this project.
    - Initial commit at this stage.
        git commit -m "initial commit"
        git commit -m "initial set up of project named server in backend completed"
        git commit -m "added tailwind css in frontend"

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

___________________________________________________________________________________________________

Frontend

- Created folders backend and frontent. 

- npm create vite@latest
        Created React project

- Connected tailwind CSS with frontend
        Documentation: https://tailwindcss.com/docs/guides/vite

