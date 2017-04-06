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
			            background-image: url('https://uploads.lebonbon.fr/source/2015/01/Le-Chat-du-Rabbin-Teaser_emission_premium_fond_950x380.jpg');
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center;
                        color: white;
            			">
			    <p style="font-size: 25px;
                            text-align: center;
                            font-family: 'Oswald';
                            line-height: 12.5vh;
                            margin: 0;">Thank You for Your Message!<br>Bastek | web developer</p>
			</div>
			'''
			title_to_me = ('New message')
			title_to_sender = ('Bastek - thank you for your message!')
			sender_email = form.cleaned_data['from_email']
			from_email = ('Bastek')
			thank_you = '''
			<div style="height: 100vh;
						width: 100vw;
			            background-image: url('http://aurashouse.com/wp-content/uploads/2015/04/thank-you-different-languages2.png');
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        position: fixed;
						left: 0;
						top: 0;
            			">
            	<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
                <script src="https://use.fontawesome.com/116e10d08c.js"></script>
					<a style="color: rgb(216,19,35);
								position: absolute;
								top: 10px;
								left: 10px;" 
							href="http://amator.pythonanywhere.com/"><i style="cursor: pointer" class="fa fa-refresh fa-2x" aria-hidden="true"></i></a>
					<a style="outline:none; 
							color: rgb(216,19,35); 
							font-family: 'Oswald'; 
							text-decoration: none;
							position: absolute;
							left: 50px;
							padding-top: 0px;
							font-size: 20px;
							line-height: 20px;" href="http://amator.pythonanywhere.com/"><p style="font-family: 'Oswald';">Back to main page</p></a>
			</div>
			'''
			try:
				send_mail(title_to_sender, message_to_sender, from_email, [sender_email], html_message=html_message)
				send_mail(title_to_me, message_to_me, from_email, ['sebastiangebala@gmail.com'])
			except BadHeaderError:
				return HttpResponse('Invalid header found.')
			return HttpResponse(thank_you)
	return render(request, 'skeleton/base.html', {"form": form})


