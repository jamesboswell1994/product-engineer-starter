import json

def read_json(file_path, data_key=None):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
            if data_key:
                # Split the key on '.' and reduce the data to what we're interested in
                for key in data_key.split('.'):
                    data = data[key]
            return data
    except FileNotFoundError:
        print(f"The file {file_path} was not found.")
    except json.JSONDecodeError:
        print(f"Error decoding JSON from the file {file_path}.")
    except KeyError:
        print(f"Key {data_key} not found in the JSON data.")
    return None

def retrieve_data(file_path, data_key):
    return read_json(file_path, data_key)
