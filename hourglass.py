from functools import reduce

arr = [[1, 1, 1, 0, 0, 0],
       [0, 1, 0, 0, 0, 0],
       [1, 1, 1, 0, 0, 0],
       [0, 0, 2, 4, 4, 0],
       [0, 0, 0, 2, 0, 0],
       [0, 0, 1, 2, 4, 0]]

result = []
for i, v in enumerate(arr):
    if(i > 3):
        break
    for j in range(4):
        arr1 = map(lambda x: x[j:j+3], arr[i:i+3])
        arr2 = list(reduce(lambda x, y: x+y, arr1))
        del(arr2[3])
        del(arr2[4])
        result.append(sum(arr2))
print(sorted(result).pop())
