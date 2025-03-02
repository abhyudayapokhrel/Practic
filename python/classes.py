class Person:
    def __init__(self, input1, input2):
        self.name = input1
        self.age = input2

    def myFunction(self):
        print(f"Hello!! {self.name}")

p1  = Person("Abhyduaya", 18)

print(p1.name)
print(p1.age)

p1.myFunction()