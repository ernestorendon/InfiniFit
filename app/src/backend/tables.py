from app import app, db
from security import hash_password, verify_password


class UserAccount(db.Model):
    __tablename__ = 'user_account'
    email = db.Column(db.String, primary_key=True)
    hashed_password = db.Column(db.String(100), nullable=False)
    salt = db.Column(db.String(100), nullable=False)
    security_question = db.Column(db.String(100), nullable=False)
    security_answer = db.Column(db.String(100), nullable=False)


security_questions = {1: "What city were you born in?",
                      2: "What was the name of your first pet?",
                      3: "What's your mother's maiden name?",
                      4: "What high school did you attend?",
                      5: "What high school did you attend?"}


class Workout(db.Model):
    __tablename__ = 'workouts'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    type = db.Column(db.String(100))
    body_part = db.Column(db.String(100))
    level = db.Column(db.String(100))
    time = db.Column(db.Integer)
    sets = db.Column(db.Integer)
    b_reps = db.Column(db.Integer)
    i_reps = db.Column(db.Integer)
