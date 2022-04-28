from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render

def index(request):
    return render(request, 'fdk_site/index.html')

def pageNotFound(request,exception):
    return HttpResponseNotFound(render(request,'fdk_site/404.html'))