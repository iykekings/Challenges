import sys

collector = []


def pick_input():
    while(True):
        inp = input()
        if (inp == "exit"):
            break
        collector.append(inp)
    print(collector)


pick_input()

inpput = collector
# solves sum of give list of numbers


def sum():
    total = 0
    for i in range(int(inpput[0])):
        total += int(inpput[i + 1])
    print("Total", total)


sum()


# n -> collect n amount of integers

# example
def example():
    length = int(input())
    for i in range(length):
        print(input())


# 4
5
4
3
2
