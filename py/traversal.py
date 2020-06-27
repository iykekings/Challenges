## Helper Function to return opposite directions
        
def getOpposite(direction):
    if direction == 'n':
        return 's'
    elif direction == 's':
        return 'n'
    elif direction == 'e':
        return 'w'
    elif direction == 'w':
        return 'e'        

## Graph to hold our traversed maze
graph = {}

## Breadth First Search to be used for finding the closest room with unexplored exits
def bfs(graph, starting_room):

    # Create an empty queue to hold rooms
    q = Queue()

    # Create an empty visited set to store visited rooms
    visited_set = set()

    # Enqueue a path to the starting_room
    q.enqueue([starting_room])

    # While the queue is not empty...
    while q.size() > 0:
        # Dequeue the first path from the front of the array
        path = q.dequeue()

        # Grab the last room in the path
        room_to_check = path[-1]

        # If room_to_check is not in visited_set:
        if room_to_check not in visited_set:

            # Add the room to visited
            visited_set.add(room_to_check)

            # Check if room_to_check has any unexplored exits
            for room in graph[room_to_check]:
                # If the exit is unexplored
                if graph[room_to_check][room] == '?':
                    # Return the path it took to get here
                    return path

            # Append paths
            for each_exit in graph[room_to_check]:
                # Set the exit we want to keep track of to a variable
                neighboring_room = graph[room_to_check][each_exit]

                # Make a copy of the path
                path_copy = list(path)
                # Add the neighboring room to the copied path
                path_copy.append(neighboring_room)
                # Add the path we took to the back of the queue
                q.enqueue(path_copy)
    
    # Don't need to return anything because I am setting the results of this to a variable
    return None

    # TRICKY PARTS
        # 2. When you get a path, it gives you a list of the rooms (102, 107, 105) - that is not what you need to traverse. that is the order of rooms. but we need code to change the list of rooms to a list of directions. return path of rooms (list of numbers). then write another code, that looks at room graph and converts room numbers into directions. almost always easier to break up into parts instead of mixing. walk along list of directions and append to original path.
        # 3. Loops - when you get into a loop, you might run into some bugs. Test it on the second to last sample graph, it has a loop in it.
        # if direction == n, return s
        # left is a key, north is a value
    
# While graph is smaller than 500
while len(graph) < len(roomGraph):
    # Save the current room ID into a variable
    currentRoomID = player.currentRoom.id

    # if the currentRoomID is not in our graph yet...
    if currentRoomID not in graph:

        # Put the room into our graph with no exits yet
        graph[currentRoomID] = {}

        # For each exit the room has available
        for exit in player.currentRoom.getExits():
            # Set all exit values to '?' the first time visiting the room
            graph[currentRoomID][exit] = "?"

    # if the currentRoomID IS in our graph, or was just added...
    # For each exit in the room's available exits
    for direction in graph[currentRoomID]:
    #for exit in player.currentRoom.getExits():

        if direction not in graph[currentRoomID]:
            break

        if graph[currentRoomID][direction] == '?':

            # Set the room's exit to the direction we are currently examining
            roomExit = direction

            # If there is an exit in the dictionary
            if roomExit is not None: # because there might not be 's' or 'e' or something

                # Append our travel direction to traversalPath
                traversalPath.append(roomExit)
                # Move in that direction
                player.travel(roomExit)
                # Set our new room id to the room we just moved to
                newRoomID = player.currentRoom.id

                # If the newRoomId is not in our graph yet...
                if newRoomID not in graph:

                    # Put the room into our graph
                    graph[newRoomID] = {}

                    # For each exit in the room's available exits
                    for exit in player.currentRoom.getExits():
                        # Set all exit values to '?' the first time visiting the room
                        graph[newRoomID][exit] = '?'

            # Update previous room's direction/exit
            graph[currentRoomID][roomExit] = newRoomID
            # update current room's direction/exit to be opposite
            graph[newRoomID][getOpposite(roomExit)] = currentRoomID
            # Set the currentRoomID to now be the newRoomID
            currentRoomID = newRoomID

    # If I've reached this point, I should have no more rooms with unexplored exits
    # Run a BFS, passing in my graph and the room I am currently in
    pathOfRooms = bfs(graph, player.currentRoom.id)
    print(pathOfRooms)

    # Convert rooms to directions by traversing all rooms in the pathOfRooms and recording which direction was traveled

    if pathOfRooms is not None:
        # For each room in the pathOfRooms
        for room in pathOfRooms:
            # For each {n, s, e, w} of each room in pathOfRooms
            for exit in graph[currentRoomID]:
                print(f"{graph[currentRoomID]}")
                # If the exit's value is the room in pathOfRooms
                if graph[currentRoomID][exit] == room:
                    # Add this exit to our traversal
                    traversalPath.append(exit)
                    # Move in that direction
                    player.travel(exit)

    # Reset the currentRoomID to be the room we just traveled to
    currentRoomID = player.currentRoom.id