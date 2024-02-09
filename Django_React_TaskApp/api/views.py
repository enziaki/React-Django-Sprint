from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Todo
from .serializers import TodoSerializer

# Create your views here.

# A list of paths for api endpoints
@api_view(['GET'])
def api_overview(request):
   api_urls = {
      'List' : '/todolist',
      'Detailed View' : '/tododetail/<str:pk>',
      'Create' : '/todocreate',
      'Update' : '/todoupdate/<str:pk>',
      'Delete' : '/tododelete/<str:pk>'
   }
   return Response(api_urls)

# GET request for all of the entities
@api_view(["GET"])
def todo_list(request):
    if request.method ==  "GET":
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)
    
# Creating an entity using POST
@api_view(["POST"])
def todo_create(request):
    if request.method == 'POST':
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Detailed GET request for an entity using id
@api_view(["GET"])
def todo_detail(request, pk):
    todo = get_object_or_404(Todo, id=pk)
    serializer = TodoSerializer(todo)
    return Response(serializer.data)
    

# Updating the entity using UPDATE and id
@api_view(["POST", "PUT", "PATCH"])
def todo_update(request, pk):
    todo = get_object_or_404(Todo, id=pk)
    serializer= TodoSerializer(instance=todo, data=request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)


# DELETE an entity using id
@api_view(["DELETE"])
def todo_delete(request, pk):
    todo = get_object_or_404(Todo, id=pk)
    todo.delete()
    return Response(status = status.HTTP_204_NO_CONTENT)
