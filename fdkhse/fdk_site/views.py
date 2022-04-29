from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render

def index(request):
    return render(request, 'fdk_site/index.html')

def pageNotFound(request):
    return render(request, 'fdk_site/404.html')