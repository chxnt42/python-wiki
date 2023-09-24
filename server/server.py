from flask import Flask,request
from flask_cors import CORS
import sys
import json

class Logger():
    stdout = sys.stdout
    messages = []

    def start(self): 
        sys.stdout = self
        self.messages.clear()

    def stop(self): 
        sys.stdout = self.stdout
        

    def write(self, text): 
        self.messages.append(text)

log = Logger()

app = Flask(__name__)
CORS(app)

@app.route("/test",methods=['GET', 'POST'])
def test():
    data = request.data
    code = json.loads(data)["code"]
    log.start()
    exec(code)
    log.stop()
    return {"res":log.messages}


app.run(debug=True)