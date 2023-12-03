import csv
import random
from db_setup import db
from tables import Workout

def generate_routine(filepath, level, body_part, time, user_email):
    # Read the CSV file into a list of dictionaries
    workouts = read_csv(filepath)

    # Filter workouts based on user preferences
    filtered_workouts = filter_workouts(workouts, level, body_part)

    # Generate routine by selecting workouts within the total time available
    selected_workouts = select_workouts(filtered_workouts, time, body_part)

    # Save selected workouts to the database or perform other actions as needed
    save_workouts(selected_workouts, user_email)

    return selected_workouts

def read_csv(filepath):
    # Read the CSV file into a list of dictionaries
    workouts = []
    with open(filepath, 'r') as csv_file:
        reader = csv.DictReader(csv_file)
        for row in reader:
            workouts.append(row)
    return workouts

def filter_workouts(workouts, level, body_part):
    if body_part.title() == 'full_body':
        # If body_part is 'full_body', include all workouts regardless of the body part
        filtered_workouts = [
            workout for workout in workouts if workout['Level'] == level
        ]
    else:
        # Filter workouts based on user preferences (level and specific body part)
        filtered_workouts = [
            workout for workout in workouts
            if workout['Level'] == level and workout['BodyPart'] == body_part
        ]

    return filtered_workouts

def select_workouts(filtered_workouts, total_time_available, body_part):
    selected_workouts = []
    total_time_spent = 0

    workouts_by_body_part = {}
    for workout in filtered_workouts:
        workout_body_part = workout['BodyPart']
        if workout_body_part not in workouts_by_body_part:
            workouts_by_body_part[workout_body_part] = []
        workouts_by_body_part[workout_body_part].append(workout)

    if body_part.title() == 'full_body':
        for _, available_workouts in workouts_by_body_part.items():
            if not available_workouts:
                continue

            selected_workout = random.choice(available_workouts)
            workout_time = int(selected_workout['Time']) * int(selected_workout['Sets']) * int(selected_workout[selected_workout['Level'] + '_Reps'])

            if total_time_spent + workout_time <= total_time_available:
                selected_workouts.append({
                    'title': selected_workout['Title'],
                    'sets': int(selected_workout['Sets']),
                    'reps': int(selected_workout[selected_workout['Level'] + '_Reps'])
                })

                total_time_spent += workout_time

    else:
        available_workouts = workouts_by_body_part.get(body_part, [])

        for workout in available_workouts:
            workout_time = int(workout['Time']) * int(workout['Sets']) * int(workout[workout['Level'] + '_Reps'])

            if total_time_spent + workout_time <= total_time_available:
                selected_workouts.append({
                    'title': workout['Title'],
                    'sets': int(workout['Sets']),
                    'reps': int(workout[workout['Level'] + '_Reps'])
                })

                total_time_spent += workout_time

    return selected_workouts


def save_workouts(selected_workouts, user_email):
    # user_email is used to associate the workout with a specific user
    for workout_data in selected_workouts:
        workout = Workout(
            title=workout_data['title'],
            sets=workout_data['sets'],
            reps=workout_data['reps'],
            user_email=user_email
        )
        db.session.add(workout)

    db.session.commit()



# Example usage:
level = 'beginner'
body_part = 'full_body'
time = 60
filepath = 'path/dataset.csv'
generated_routine = generate_routine(filepath, level, body_part, time, user_email)
print(generated_routine)
