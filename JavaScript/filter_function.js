/*
In this kata you will create a function that takes a list of non-negative integers 
and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

var input = [1, 2, "a", "b"];

function filter_list(l) {
  return l.filter((v) => typeof v == "number");
}

console.dir(filter_list(input));

/*
Notes:
The filter() method of Array instances creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test implemented by the provided function.
** Examples
*/

var products = ['mangoes', 'pineapple', 'banana', 'pear']

function filter_fruits(products){
    return products.filter(p => p.length > 5);
}

console.dir(filter_fruits(products));