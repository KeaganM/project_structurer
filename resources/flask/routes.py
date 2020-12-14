from backend.config import app
from flask import render_template, url_for, flash, redirect, request, abort, render_template_string, jsonify
from backend.models import Test
import json


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


@app.route('/test_get', methods=['GET'])
def test_get():
    if request.method == 'GET':
        data = {arg: request.args.get(arg) for arg in request.args}
        print(data['name'])
        response = jsonify({'response': str(Test.query.filter_by(name=data['name']).all())})
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "*")
        response.headers.add('Access-Control-Allow-Methods', "*")
        print(response.headers)

        return response
