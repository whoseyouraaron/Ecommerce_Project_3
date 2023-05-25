from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def signup():
    return render_template('signup.html')

@app.route('/register', methods=['POST'])
def register():
    email = request.form['email']
    password = request.form['password']
    
    print(f"Email: {email}")
    print(f"Password: {password}")
    
    return "Success!"

if __name__ == '__main__':
    app.run()
