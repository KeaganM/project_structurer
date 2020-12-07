from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from wtforms import StringField, PasswordField, SubmitField, BooleanField, TextAreaField, IntegerField, \
    MultipleFileField, FloatField,HiddenField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError, Optional

class ExampleForm(FlaskForm):

    name = StringField("Name",validators=[DataRequired()])
    email = StringField("Email", validators=[DataRequired(), Email()])
    subject = StringField("Subject",validators=[DataRequired()])
    message = TextAreaField("Message",validators=[DataRequired()])
    submit_email = SubmitField("Send")