def solution(N):
    if type(N) == int:
        if N in (0, 1):
            return 0
        if N > 0:
            base10 = N - 1
        else:
            base10 = -N
        return len(bin(base10)[2:])
    else:
        return -1


print(solution(-11))
