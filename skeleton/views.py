from django.shortcuts import render, redirect
from .forms import ContactForm
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse

def base(request):
	if request.method == 'GET':
		form = ContactForm()
	else:
		form = ContactForm(request.POST)
		if form.is_valid():
			message_to_me = form.cleaned_data['message']
			message_to_sender = ('')
			html_message = '''
			<div style="height: 25vh;
            			border: 3px solid rgb(139,69,19);
                        border-bottom: 10px solid rgb(139,69,19);
			            border-radius: 7pt;
                        background: rgba(255,215,0,0.9); /* For browsers that do not support gradients */
                        background: -webkit-linear-gradient(left top, rgba(139,69,19,0.9), rgba(218,165,32,0.9), rgba(255,215,0,0.9), rgba(218,165,32,0.9), rgba(139,69,19,0.9)); /* For Safari 5.1 to 6.0 */
                        background: -o-linear-gradient(bottom right, rgba(139,69,19,0.9), rgba(218,165,32,0.9), rgba(255,215,0,0.9), rgba(218,165,32,0.9), rgba(139,69,19,0.9));  /* For Opera 11.1 to 12.0 */
                        background: -moz-linear-gradient(bottom right, rgba(139,69,19,0.9), rgba(218,165,32,0.9), rgba(255,215,0,0.9), rgba(218,165,32,0.9), rgba(139,69,19,0.9));  /* For Firefox 3.6 to 15 */
                        background: linear-gradient(to bottom right, rgba(139,69,19,0.9), rgba(218,165,32,0.9), rgba(255,215,0,0.9), rgba(218,165,32,0.9), rgba(139,69,19,0.9)); /* Standard syntax */;">
			    <p style="font-size: 25px;
                            text-align: center;
                            font-family: 'Oswald';
                            line-height: 12.5vh;
                            margin: 0;">Thank You for Your Message!<br>Bastek | web developer</p>
			</div>
			'''
			title_to_me = ('Title me')
			title_to_sender = ('Title him')
			sender_email = form.cleaned_data['from_email']
			from_email = ('Bastek')
			try:
				send_mail(title_to_sender, message_to_sender, from_email, [sender_email], html_message=html_message)
				send_mail(title_to_me, message_to_me, from_email, ['sebastiangebala@gmail.com'])
			except BadHeaderError:
				return HttpResponse('Invalid header found.')
	return render(request, 'skeleton/base.html', {"form": form})
