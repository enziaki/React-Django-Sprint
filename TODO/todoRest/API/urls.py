from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('tasklist/', views.tasklist , name="tasklist"),
    path('taskdetail/<str:pk>', views.taskDetail, name="taskdetail"),
    path('taskcreate/', views.taskCreate, name="taskcreate"),
    path('taskupdate/<str:pk>', views.taskUpdate, name="taskupdate"),
    path('taskdelete/<str:pk>', views.taskDelete, name="taskdelete"),

]