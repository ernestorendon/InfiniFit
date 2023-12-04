from flask import Blueprint, jsonify, request
from tables import UserAccount
from security import hash_password, generate_salt, verify_password
from db_setup import db

# Register the blueprints
register_blueprint = Blueprint('register_blueprint', __name__)


# Define your routes here, for example:


# REGISTRATION ROUTE
@register_blueprint.route('/register', methods=['POST'])
def register():
    # Get data from request
    data = request.get_json()
    user_email = data['email']
    user_pass = data['password']
    security_question_id = int(data['securityQuestion'])  # Convert to int
    answer = data['securityAnswer']
    _fitnessLevel = data['fitnessLevel']
    _workoutDuration = data['workoutDuration']
    _focusArea = data['focusArea']

    # Here you would check if the email already exists and if not, add the user to the table
    # For example:
    user = UserAccount.query.filter_by(email=user_email).first()
    if user:
        return jsonify({'message': 'Registration Failed'}), 409
    else:
        salt = generate_salt()
        hashed_pw = hash_password(user_pass, salt)

        new_user = UserAccount(
            email=user_email,
            hashed_password=hashed_pw,
            salt=salt,
            security_question=security_question_id,
            security_answer=answer,
            fitnessLevel=_fitnessLevel,
            workoutDuration=_workoutDuration,
            focusArea=_focusArea
        )
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User registered successfully'}), 201


# LOGIN ROUTE
@register_blueprint.route('/login', methods=['POST'])
def login_screen():
    # Get data from request
    data = request.get_json()
    user_email = data['email']
    user_pass = data['password']

    # Query the database for the user
    user = UserAccount.query.filter_by(email=user_email).first()

    # If the user exists and the password is correct
    if user and verify_password(user.hashed_password, user_pass, user.salt):
        # Redirect to the /app route or return a success response
        # If you want to use a redirect:
        # return redirect(url_for('name_of_app_route'))
        # If you want to return a success response:
        return jsonify({'message': 'Login successful'}), 200
    else:
        # Return an error message
        return jsonify({'message': 'Login failed'}), 401


# BOILER PLATE ROUTINE ROUTES
@register_blueprint.route('/full_body_routine')
def full_body_routine():
    routine = [
        {"exercise": "Air Squats", "sets": 3, "reps": 20},
        {"exercise": "Pushups", "sets": 3, "reps": 10},
        {"exercise": "Situps", "sets": 3, "reps": 20},
        {"exercise": "Walking Lunges", "sets": 3, "reps": 10},
        {"exercise": "Mountain Climbers", "sets": 3, "reps": 20},
    ]
    return jsonify(routine)


@register_blueprint.route('/core_routine')
def core_routine():
    routine = [
        {"exercise": "Crunches", "sets": 3, "reps": 20},
        {"exercise": "Flutter Kicks", "sets": 3, "reps": 20},
        {"exercise": "Situps", "sets": 3, "reps": 20},
        {"exercise": "Leg Raises", "sets": 3, "reps": 20},
        {"exercise": "Plank", "sets": 3, "reps": 30},
    ]
    return jsonify(routine)

@register_blueprint.route('/upper_body_routine')
def upper_body_routine():
    routine = [
        {"exercise": "Pushups", "sets": 3, "reps": 20},
        {"exercise": "Bench Dips", "sets": 3, "reps": 20},
        {"exercise": "Pike Pushups", "sets": 3, "reps": 20},
        {"exercise": "Supermans", "sets": 3, "reps": 20},
    ]
    return jsonify(routine)


@register_blueprint.route('/lower_body_routine')
def lower_body_routine():
    routine = [
        {"exercise": "Air Squats", "sets": 3, "reps": 20},
        {"exercise": "Calf Raises", "sets": 3, "reps": 30},
        {"exercise": "Walking Lunges", "sets": 3, "reps": 20},
        {"exercise": "Lying Glute Bridges", "sets": 3, "reps": 20},
        {"exercise": "Jump Squat", "sets": 3, "reps": 20},
    ]
    return jsonify(routine)
