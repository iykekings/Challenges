from timeit import timeit


def compress1(string='occurences'):
    temp = {}
    result = " "
    for x in string:
        if x in temp:
            temp[x] = temp[x]+1
        else:
            temp[x] = 1
    for key, value in temp.items():
        result += str(key) + str(value)
    return result


def compress(string='occurences'):
    result = ""
    for x in string:
        if x in result:
            pass
        else:
            result += x + str(string.count(x))
    return result


print('compress1')
print(timeit(compress1, number=100000))
print('compress')
print(timeit(compress, number=100000))
