from flask import (Flask, render_template)
from flask import render_template, request, redirect, flash, url_for, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
import os
import urllib3
import requests

# tmdb.API_KEY = '57a856481fc55fc8549e5927b0aaa154'

app = Flask(__name__)

if not os.getenv("DATABASE_URL"):
    raise RuntimeError("DATABASE_URL is not set")

# Set up database
engine = create_engine(os.getenv("DATABASE_URL"))
db = scoped_session(sessionmaker(bind=engine))


@app.route("/", methods = ['POST','GET'])
def index():
    #get now playing movies#
    config = requests.get("https://api.themoviedb.org/3/configuration?api_key=57a856481fc55fc8549e5927b0aaa154")
    
    url = requests.get("https://api.themoviedb.org/3/movie/now_playing?api_key=57a856481fc55fc8549e5927b0aaa154&language=en-US&page=1")

    image= config.json()
    data= url.json()
    return render_template("index.html", data=data, image=image)

@app.route('/home', methods = ['POST' , 'GET'])
def home():
    #get all movies#
    return render_template('index.html')

@app.route('/movies', methods = ['POST' , 'GET'])
def movies():
    #get movie categories#
    return render_template('index.html')

@app.route('/movies/popular')
def popular_movies():
    #get all popular movies#
    return render_template('index.html')

@app.route('/movies/trending')
def trending_movies():
    #get trending movies#
    return render_template('index.html')

@app.route('/movies/top_rated')
def top_rated_movies():
    #get top rated movies#
    return render_template('index.html')

@app.route('/movies/upcoming')
def upcoming_movies():
    #get upcoming movies#
    return render_template('index.html')

@app.route('/tv')
def tv_shows():
    #get tv categories#
    return render_template('index.html')

@app.route('/tv/top_rated')
def top_rated_tv_shows():
    #get top rated tv#
    return render_template('index.html')

@app.route('/tv/popular')
def popular_tv_shows():
    #get popular tv#
    return render_template('index.html')

@app.route('/tv/trending')
def trending_tv_shows():
    #get trending tv categories#
    return render_template('index.html')

@app.route('/search')
def search_results():
    #get get search results#
    return render_template('index.html')





if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)



