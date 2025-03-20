people = [
    {"name": "Harry", "house": "Gryffindor"},
    {"name": "Ron", "house": "Gryffindor"},
    {"name": "Draco", "house": "Slytherin"},
]

def compare (people):
    return people["name"]

people.sort(key=compare)
print(people)

#or better way would be

people.sort(key = lambda people: people["name"])
people.sort(key = lambda people: people["name"])
print(people)