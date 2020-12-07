from config import app
from flask import render_template,url_for,flash,redirect,request,abort,render_template_string

@app.route('/')
def main():
    """
    This function redirects the root page to the home route.
    :return: redirect to home
    """
    return redirect(url_for("home"))

@app.route('/home')
def home():
    """
    This function redirects the root page to the home route.
    :return: redirect to home
    """

    return render_template("home.html")

@app.route('/test_get',methods=['GET'])
def test_get():
    if request.method == 'GET':
        return {'response':'got a get request'}