from typing import List
from timeit import default_timer as timer


def queensAttack(n, k, r_q, c_q, obs: List[List[int]]):
    c = {(str(a) + str(b)): 1 for a, b in obs}
    return get_diagonals(n, r_q, c_q, c) + get_hor_vert(n, r_q, c_q, c)


def check_obstacle_in_path(row, col, dict):
    key = str(row) + str(col)
    return key in dict


def get_hor_vert(n, r, c, check):
    res = 0

    # HR
    i = c + 1
    while(i <= n):
        if (check_obstacle_in_path(r, i, check)):
            break
        res += 1
        i += 1

    # HL
    i = c - 1
    while(i >= 1):
        if (check_obstacle_in_path(r, i, check)):
            break
        res += 1
        i -= 1

    # VT
    i = r + 1
    while(i <= n):
        if (check_obstacle_in_path(i, c, check)):
            break
        res += 1
        i += 1

    # VT
    i = r - 1
    while(i >= 1):
        if (check_obstacle_in_path(i, c, check)):
            break
        res += 1
        i -= 1
    return res


def get_diagonals(n, r, c, check):
    res = 0

    # TR
    i, j = (r+1, c+1)
    while(i <= n and j <= n):
        if (check_obstacle_in_path(i, j, check)):
            break
        res += 1
        i += 1
        j += 1

    # TL
    i, j = (r+1, c-1)
    while(i <= n and j >= 1):
        if (check_obstacle_in_path(i, j, check)):
            break
        res += 1
        i += 1
        j -= 1

    # BR
    i, j = (r - 1, c+1)
    while(i >= 1 and j <= n):
        if (check_obstacle_in_path(i, j, check)):
            break
        res += 1
        i -= 1
        j += 1

    # BL
    i, j = (r-1, c-1)
    while(i >= 1 and j >= 1):
        if (check_obstacle_in_path(i, j, check)):
            break
        res += 1
        i -= 1
        j -= 1
    return res


inp = []
with open('queensmove.txt') as f:
    inp = [[int(a), int(b)] for a, b in [x.split(' ')
                                         for x in f.read().splitlines()]]


ans = 0
start = timer()
ans = queensAttack(inp[0][0], inp[0][1], inp[1][0], inp[1][1], inp[2:])
end = timer()

print(end - start)
print(ans)
# print(ans)


# print(timeit(time_exc, 1))
