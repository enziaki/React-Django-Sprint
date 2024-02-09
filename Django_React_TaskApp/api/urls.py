from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_overview, name="api-overview"),
    path('todo/', views.todo_list, name="todo-list"),
    path('todo/<str:pk>', views.todo_detail, name="todo-detail"),
    path('todocreate/', views.todo_create, name="todo-create"),
    path('todoupdate/<str:pk>', views.todo_update, name="todo-update"),
    path('tododelete/<str:pk>', views.todo_delete, name="todo-delete"),
]