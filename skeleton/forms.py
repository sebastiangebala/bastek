from django import forms
from django.forms import CharField, TextInput, extras


class ContactForm(forms.Form):
	message = forms.CharField(
		widget=forms.Textarea(
			attrs={'placeholder': 'Your message', 
			'class': 'message'
			}))
	from_email = forms.EmailField(
		required=True, 
		widget=forms.TextInput(
			attrs={
			'placeholder': 'Your e-mail', 
			'class': 'email'
			}))
