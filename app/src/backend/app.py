from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Replace the following with your actual database connection info
username = 'username'
password = 'password'
host = '150.136.87.39'  # This could be 'localhost' if on the same server or an IP address if remote
port = '5432'  # Default PostgreSQL port
database_name = 'infinifitdb'

# Assuming SSL is required, you'll add SSL parameters to the connection string
app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{username}:{password}@{host}:{port}/{database_name}'

app.config['SECRET_KEY'] = 'your_secret_key'
db = SQLAlchemy(app)

if __name__ == '__main__':
    app.run(debug=True)
