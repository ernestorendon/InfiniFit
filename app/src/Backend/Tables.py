from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

class Workout(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    type = db.Column(db.String(100))
    body_part = db.Column(db.String(100))
    level = db.Column(db.String(100))
    time = db.Column(db.Integer)
    sets = db.Column(db.Integer)
    b_reps = db.Column(db.Integer)
    i_reps = db.Column(db.Integer)
