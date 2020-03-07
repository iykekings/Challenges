from random import randint
import json
from functools import reduce
import operator


def GenerateMaze(rows=10, cols=10):
    maze = [[{"pk": 0, "model": "adventure.room", "fields": {"description": "Description", "title": "Title",
                                                             "w_to": 0, "e_to": 0, "n_to": 0, "e_to": 0}} for _ in range(cols)] for _x in range(rows)]
    titles = ["Prehistoric Cave", "Medieval Wizards Tower", "Abandoned Cottage", "Alchemists Laboratory", "Viking Barracks",
                    "Roman Colosseum", "London Shop", "Futuristic Lab", "Barbaric Outpost", "Western Town", "Colonial Puritan Church",
                    "Nazi Meeting Hall", "Chinese Pagoda", "Cold War Nuclear Site", "Beached Pirate Ship"]

    descrs = ["This seems to be one of the first shelters ever to be used by mankind. A special sort of novelty. Also, it seems pretty empty...", "A magical place! This is the type of place you hear about in a story book! I never knew that they were real, once upon a time....", "This cottage seems to have been left long ago. The place is a bit worse for ware. I wonder who used to live here?",
              "Ah, this is a place dedicated to one thing, THE SEARCH FOR GOLD! But not in the conventional way. It doesn't seem like they ever had much luck.",
              "A rough and run down place. You see weapons of all sorts lying around, and what appears to be a half eaten turkey leg...",
              "The birthplace of entertainment! People are all around, and you can faintly hear the roar of the lion in its cage.",
              "A daily visit for most in this cobblestone village. Goods from all around, and some say this is the best place for gossip.",
              "Everything around you is either chrome or the brightest white you've ever seen. This is the epitome of a sterile environment.", "The people around here look like they're in a \"Homeless Cave Man\" costume contest. They smell like it too...",
              "Ah, the Wild West! Just how the movies always depicted it. A real life western saloon complete with a spitoon on the deck!",
              "The people around here look nice enough, but you'd best stand up straight and remember your please and thank you's",
              "You never thought you'd be anywhere on this side of the war. This place looks fine enough, it's more the people you are worried about.",
              "This place is the epitome of the far east. From the finial at the top, to the feng-shui garden on the ground below.",
              "This place is oozing with secrecy. You can feel the tension in the air. No one seems to be very friendly of outsiders here...",
              "ARGH ME MATEY! A real life pirate ship! I wonder if there is any \"booty\" on board?"]

    for r, row in enumerate(maze):
        for c, col in enumerate(row):
            index = c + r * cols
            rand = randint(0, len(titles) -1 )
            col["pk"] = index
            col["fields"]["description"] = f"{descrs[rand]}"
            col["fields"]["title"] = f"{titles[rand]} {index}"
            if(c != 0):
                col["fields"]["w_to"] = index - 1
            if(c != cols - 1):
                col["fields"]["e_to"] = index + 1
            if(r != 0):
                col["fields"]["n_to"] = index - cols
            if(r != rows - 1):
                col["fields"]["s_to"] = index + cols

    return maze


ans1 = GenerateMaze(10, 10)
res = reduce(operator.concat, ans1)
ans = json.dumps(res)
f = open('seed.json', 'w')
f.write(ans)
f.close()

# The depth-first search algorithm of maze generation is frequently implemented using backtracking:

# Make the initial cell the current cell and mark it as visited
# While there are unvisited cells
  # If the current cell has any neighbours which have not been visited
    # Choose randomly one of the unvisited neighbours
    # Push the current cell to the stack if it has more than one unvisited neighbor
    # Remove the wall between the current cell and the chosen cell
    # Make the chosen cell the current cell and mark it as visited
  # Else if stack is not empty
    # Pop a cell from the stack while the stack is not empty and the popped cell has no unvisited neighbors
    # Make it the current cell