# TODO:______________________________________________________importing the libraries______________________________________________________

from flask import Flask, request, redirect, url_for, render_template
import pickle 
import numpy as np
import os 
import cv2
import sklearn

# TODO:______________________________________________________creating and configuring the flask app______________________________________________________


# global variables:
UPLOAD_FOLDER = 'static/uploads/'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0 # to disable caching
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<disease>')
def disease_page(disease):
    if disease in ['alzheimer', 'brain_tumor', 'covid19', 'breast_cancer', 'diabetes', 'pneumonia']:
        return render_template(f'{disease}.html')
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)

