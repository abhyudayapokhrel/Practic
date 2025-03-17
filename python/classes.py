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

p1  = Person("Abhyduaya", 18, 41)
p2 = Person("Mahesh", 16, 40)

print(p1.name)
print(p1.age)
print(p2.name)
print(p2.age)

p1.myFunction()
p2.myFunction()