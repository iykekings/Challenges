arr = [1, 2, 3, 4, 5]
d = 19
l = len(arr)
d = d % l

print(arr[d:l]+arr[0:d])
