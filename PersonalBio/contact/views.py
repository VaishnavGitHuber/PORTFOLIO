from django.shortcuts import render
from .models import ContactInfo
from django.utils import timezone

# Create your views here.
def contact_me(request):
    if request.POST:
        contact_info = ContactInfo.objects.create(
            name=request.POST.get('name'),
            email=request.POST.get('email'),
            message=request.POST.get('message'),
            created_at=timezone.now()
        )
    return render(request, 'contact.html')