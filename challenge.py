
# Return the "centered" average of a list of ints,
# which we'll say is the mean average of the values,
# except ignoring the largest and smallest values in the array.

# centered_average([1, 2, 3, 4, 100]) → 3
# centered_average([1, 1, 5, 5, 10, 8, 7]) → 5
# centered_average([-10, -4, -2, -4, -2, 0]) → -3


def centered_average_with_sorting(arr):
    return int(sum(sorted(arr)[1:-1])/(len(arr) - 2))


def centered_average(arr):
    return int(sum(arr[1:-1])/(len(arr) - 2))


print(centered_average([1, 2, 3, 4, 100]))
print(centered_average([1, 1, 5, 5, 10, 8, 7]))
print(centered_average([-10, -4, -2, -4, -2, 0]))
