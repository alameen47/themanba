# almanba_backend/almanba/__init__.py

# almanba_backend/almanba/asgi.py
import os
from django.core.asgi import get_asgi_application
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'almanba.settings')
application = get_asgi_application()
