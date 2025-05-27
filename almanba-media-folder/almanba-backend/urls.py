# almanba_backend/almanba/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),
    path('api/articles/', include('articles.urls')),
    path('api/videos/', include('videos.urls')),
    path('api/audio/', include('audio.urls')),
    path('api/events/', include('events.urls')),
    path('api/gallery/', include('gallery.urls')),
    path('api/pages/', include('pages.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
