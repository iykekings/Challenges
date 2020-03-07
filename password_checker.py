import re
import unittest
from typing import List, Tuple

# Set up Test
input_data = []
test_cases: List[Tuple[str, str]] = []
test_ans: List[str] = []

with open('password_cracker_test_in.txt') as f:
    input_data = f.readlines()

with open('password_cracker_out.txt') as f:
    test_ans = f.readlines()

test_ans = [ans.strip() for ans in test_ans]

i = 0
while(i <= len(input_data) // 2):
    test_cases.append((input_data[i].strip(), input_data[i+1].strip()))
    i += 2
# Code Below


def passwordCracker(passwords: List[str], loginAttempt: str):
    empty = loginAttempt
    done = []
    passwords.sort(key=len, reverse=True)
    for word in passwords:
        done.append(word)
        empty = empty.replace(word, '', -1)
        if (True in [word in n for n in done]):
            loginAttempt = loginAttempt.replace(
                f"{word}{word[0]}", f"{word} {word[0]}", -1)
            # loginAttempt = loginAttempt.replace(word, f"{word} ", -1)
            loginAttempt = re.sub(re.compile(
                f"\\s*{word}\\s*"), f" {word} ", loginAttempt)
        else:
            # loginAttempt = loginAttempt.replace(word, f"{word} ", -1)
            loginAttempt = re.sub(re.compile(
                f"\\s*{word}\\s*"), f" {word} ", loginAttempt)
    return loginAttempt.strip() if len(empty) < 1 else "WRONG PASSWORD"


class TestSum(unittest.TestCase):

    def test_works(self):
        self.assertEqual(
            passwordCracker(
                ['ozkxyhkcst', 'xvglh', 'hpdnb', 'zfzahm'], 'zfzahm'),
            'zfzahm'
        )

    def test_works1(self):
        self.assertEqual(
            passwordCracker(
                ['gurwgrb', 'maqz', 'holpkhqx', 'aowypvopu'], 'gurwgrb'),
            'gurwgrb'
        )

        self.assertEqual(
            passwordCracker(
                [
                    'a',
                    'aa',
                    'aaa',
                    'aaaa',
                    'aaaaa',
                    'aaaaaa',
                    'aaaaaaa',
                    'aaaaaaaa',
                    'aaaaaaaaa',
                    'aaaaaaaaaa'
                ],
                'aaaaaaaaaab'
            ),
            'WRONG PASSWORD'
        )
        self.assertEqual(
            passwordCracker(
                ['because', 'can', 'do', 'must', 'we', 'what'],
                'wedowhatwemustbecausewecan'
            ),
            'we do what we must because we can'
        )
        self.assertEqual(passwordCracker(
            ['hello', 'planet'], 'helloworld'), 'WRONG PASSWORD')
        self.assertEqual(passwordCracker(
            ['ab', 'abcd', 'cd'], 'abcd'), 'ab cd')

    def test_large(self):
        for i in range(len(test_cases)):
            self.assertEqual(passwordCracker(
                test_cases[i][0].split(" "), test_cases[i][1]), test_ans[i])


if __name__ == '__main__':
    unittest.main()
