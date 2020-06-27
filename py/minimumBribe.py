def minimumBribes(q):

    def loop(q, possibility=0):
        isPossible = possibility
        moves = {}
        for i in range(0, len(q)):
            if (i < len(q) - 1):
                if (q[i] > q[i + 1]):
                    if (q[i] in moves):
                        moves[q[i]] += 1
                        if (moves[q[i]] > 2):
                            return 'Too chaotic'
                    else:
                        moves[q[i]] = 1

                    temp = q[i]
                    q[i] = q[i+1]
                    q[i+1] = temp
                    isPossible += 1

        if (sorted(q) == q):
            return isPossible
        else:
            return loop(q, isPossible)

    response = loop(q)
    print(response)
