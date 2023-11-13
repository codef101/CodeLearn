# In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

# Example
# filter_list([1,2,'a','b']) == [1,2]
# filter_list([1,'a','b',0,15]) == [1,0,15]
# filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

# For loop
l = [1,2,'a','b']
def filter_list(l):
    filtered = []
    for a in l:
        if type(a) is int:
            filtered.append(a)
            
    return filtered

print(filter_list(l));
# List comprehension
def filter_list_by_comprehension(l):
    return [s in l if type(s) is int]

print(filter_list_by_comprehension(l))