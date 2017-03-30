from django import forms
from django.forms import CharField, TextInput, extras


class ContactForm(forms.Form):
	message = forms.CharField(
	    error_messages={'required': 'Hey! You forgot the message!'},
	    widget=forms.Textarea(attrs={'placeholder': 'Your message', 'class': 'message'}))
	from_email = forms.EmailField(
		required=True,
		error_messages={'required': 'Is that valid email?'},
		widget=forms.TextInput(attrs={'placeholder': 'Your e-mail', 'class': 'email'}))
