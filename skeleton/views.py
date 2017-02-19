from django.shortcuts import render

def base(request):
    return render(request, 'skeleton/base.html', {})
