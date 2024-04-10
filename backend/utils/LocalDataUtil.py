
# this util is built to access the local JSON object per the instruction recommendation
import json

def read_json(file_path):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
            return data
    except FileNotFoundError:
        print(f"The file {file_path} was not found.")
    except json.JSONDecodeError:
        print(f"Error decoding JSON from the file {file_path}.")
    return None

def retrieve_summary():
    response = read_json('../assets/response-2.json')
    return response['summary']
    

def retrieve_steps():
    response = read_json('../assets/response-3.json')
    return response['steps']
