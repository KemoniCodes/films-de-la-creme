from flask import (Flask, render_template)
from flask import render_template, request, redirect, flash, url_for, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from flask_sqlalchemy import SQLAlchemy
import psycopg2
import os
import urllib3
import requests


app = Flask(__name__)

if not os.getenv("DATABASE_URL"):
    raise RuntimeError("DATABASE_URL is not set")

# Set up database
engine = create_engine(os.getenv("DATABASE_URL"))
db = engine


@app.route("/", methods = ['POST','GET'])
def index():
    #homepage#
    return render_template("index.html")

@app.route('/home', methods = ['POST' , 'GET'])
def home():
    #homepage#
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
    #get all trending movies#
    return render_template('index.html')

@app.route('/movies/top_rated')
def top_rated_movies():
    #get all top rated movies#
    return render_template('index.html')

@app.route('/movies/upcoming')
def upcoming_movies():
    #get all upcoming movies#
    return render_template('index.html')

@app.route('/tv')
def tv_shows():
    #get tv categories#
    return render_template('index.html')

@app.route('/tv/top_rated')
def top_rated_tv_shows():
    #get all top rated tv#
    return render_template('index.html')

@app.route('/tv/popular')
def popular_tv_shows():
    #get all popular tv#
    return render_template('index.html')

@app.route('/tv/trending')
def trending_tv_shows():
    #get all trending tv #
    return render_template('index.html')

@app.route('/search')
def search_results():
    #get search results#
    return render_template('index.html')

@app.route('/SignIn')
def sign_in():
    #sign in#
    return render_template('index.html')

@app.route('/Register')
def register():
    #register#
    return render_template('index.html')

@app.route('/movie/<id>')
def movie(id):
    #get movie by id#
    return render_template('index.html')

@app.route('/tv/<show_id>')
def tv(show_id):
    #get tv by id#
    return render_template('index.html')

@app.route('/person/<id>')
def person(id):
    #get person by id#
    return render_template('index.html')


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)



