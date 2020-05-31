from flask import (Flask, render_template)
from flask import render_template, request, redirect, flash, url_for, jsonify
import os
import requests


app = Flask(__name__)

@app.route("/", methods = ['POST','GET'])
def my_index():
    url = requests.get("https://api.themoviedb.org/3/movie/popular?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1")
    
    config = requests.get("https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154")

    image= config.json()
    data= url.json()
    return render_template("index.html", data=data, image=image)

app.run(debug=True)

