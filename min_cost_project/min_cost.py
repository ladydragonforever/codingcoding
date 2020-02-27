# three blocks and three colors; the cost of the chosen color for the block is the value of the matrix
# what's the min cost?
#    R B G
# b1 1 2 3
# b2 2 1 3
# b3 1 3 2

# iterate through one row; keep track of the column number which is the color in a set;
#  go through the other rows;
#  if it's the used color, then go next one; if not, add to the used color, and value to the total min cost 

def minCost(arr, used_color = set()):
    row = len(arr)
    col = len(arr[0])
    minRes = float('inf')

    for i in range(row):
        for j in range(col):
            cost = arr[i][j]
            if j in used_color: continue
            used_color.add(j)
            total_cost = minCost(arr[1:], used_color) + cost
            used_color.pop()

    return min(minRes, total_cost)

    
            




            

    