#  Rozne typy  tahania dat s  API


1. basic fetch with then()
2. asynch await aproach + modules
3. axios aproach



Hint
***
 Using parameter destructuring is a clean and elegant solution. It allows you to directly extract the parsedData property from the incoming object right in the function signature.

Here's what's happening:

The fetchData() function returns an object with a parsedData property

Instead of accepting the entire object as a parameter and then extracting the 
property inside the function, we're using destructuring { parsedData } 
in the function parameter itself
This automatically extracts the parsedData property from the object and 
makes it available as a variable inside the function
***