from django.shortcuts import render, redirect
from .forms import ContactForm
from django.core.mail import send_mail, BadHeaderError

def base(request):
	if request.method == 'GET':
		form = ContactForm()
	else:
		form = ContactForm(request.POST)
		if form.is_valid():
			from_email = form.cleaned_data['from_email']
			message = form.cleaned_data['message']
			recipients = form.cleaned_data['from_email']
			to_sender = ('Czesc Pozdrawiamy Ta wiadomo zostaa wygenerowana automatycznie')
			nowa = ('Masz now wiadomo')
			wiadomosc = ('Masz now wiadomo E-mail')
			try:
				send_mail('Zesp Toole dzikuje za wiadomo', 
				to_sender, 
				from_email, 
				[recipients]
				)
				send_mail(nowa, wiadomosc, from_email, ['sebastiangebala@gmail.com'])
			except BadHeaderError:
				return HttpResponse('Invalid header found.')
	return render(request, 'skeleton/base.html', {"form": form})
