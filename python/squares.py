#lets try importing functions from functions.py:
#from functions import square # here functions is the name of that file from where we are importing

#OR, "import functions" can be used to import whole modules...

import functions
for i in range(10):
    print(f"the square of {i} is {functions.square(i)}")

