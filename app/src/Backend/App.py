from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/your_db_name'
app.config['SECRET_KEY'] = 'your_secret_key'
db = SQLAlchemy(app)

if __name__ == '__main__':
    app.run(debug=True)
