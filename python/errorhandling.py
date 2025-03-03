try:
    x = int(input("Give Integer Value of X: "))
    print(f"X = {x}")
except ValueError:
    print(f"X is not a integer")


#name error

try:
    y = int(input("Give Integer Value of X: "))
except ValueError:
    print(f"Y is not a integer")
else:
    print(f"Y = {y}") #else happnes only when try is execuated and succeeded
