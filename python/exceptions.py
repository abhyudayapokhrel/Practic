import sys

try:
    x = int(input("Enter a number: "))
    y = int(input("Input another number: "))
except ValueError:
    print("Error: Invalid Input")
    sys.exit(1)

try:
    result = x/y
except ZeroDivisionError:
    print("Cannot divide by Zero")
else:
    print(f"{x}/{y} = {result}")


#or
try:
    result = x/y
except ZeroDivisionError:
    print("Cannot divide by Zero")
    sys.exit(1)

print(f"{x}/{y} = {result}")
