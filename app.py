from flask import Flask,render_template,json

app = Flask(__name__)

gallery_JSON = open("./gallery_json.js").read()

@app.route('/gallery_json')
def gallery_json():
    return json.dumps(gallery_JSON)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
