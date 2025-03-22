def square (x):
    return x*x

a = int(input("Enter a number: "))

print(f"the square of {a} is {square(a)}")

print("-----------------")

def cube (x):
    return x*x*x

def quadruple (x):
    return x*x*x*x

def fivetimes(x):
    return x*x*x*x*x

print(f"The cube is {cube(a)}")
print(f"The quadruple is {quadruple(a)}")

print(f"The number five times is {fivetimes(a)}")