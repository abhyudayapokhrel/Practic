def percentage(marks):
    total_marks = 50
    return (marks/total_marks)*100

class Person:
    def __init__(self, input1, input2, input3):
        self.name = input1
        self.age = input2
        self.percentage = percentage(input3)

    def myFunction(self):
        print(f"Hello!! {self.name}. You got {self.percentage}% in the exam")

p1  = Person("Abhyduaya", 18, 22)

print(p1.name)
print(p1.age)

p1.myFunction()