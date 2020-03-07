from typing import List
# merge sort


def split(list: List):
    if(len(list) <= 1):
        return list
    mid = len(list)//2
    return list[:mid], list[mid:]


# test = [[1, 2], [3, 4, 5, 6, 7], [], [1]]
# result = map(lambda x: split(x), test)
# print(list(result))

def merge_sorted_lists(left, right):
    # special case: one is empty
    if len(left) == 0:
        return right
    if len(right) == 0:
        return left

    rIndex = lIndex = 0
    result = []
    totalLen = len(left) + len(right)

    while len(result) < totalLen:
        if(left[lIndex] <= right[rIndex]):
            result.append(left[lIndex])
            lIndex += 1
        else:
            result.append(right[rIndex])
            rIndex += 1

        # if one is exhausted
        if rIndex == len(right):
            result += left[lIndex:]
            break
        if lIndex == len(left):
            result += right[rIndex:]
            break

    return result


# test = [[[1, 2], [3, 5]], [[3, 4, 5], [6, 7]], [[], []], [[1, 2, 3], []]]
# result = map(lambda x: merge_sorted_lists(x[0], x[1]), test)
# print(list(result))

def merge_sort(list: List):
    if len(list) <= 1:
        return list
    else:
        left, right = split(list)
        return merge_sorted_lists(merge_sort(left), merge_sort(right))


test = [[9, 1, 10, 2], [5, 1, 1], [1], [], [2, 1], [1, 2]]
result = map(lambda x: merge_sort(x), test)
print(list(result))
