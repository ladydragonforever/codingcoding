def longest_common_string(str1, str2):
    substrings = []
    max_sub = ""
    for i in range(len(str1)):
        for j in range(i, len(str1)+1):
           substrings.append(str1[i:j])

    for sub in substrings:
        
        if (sub in str2) and (len(sub) >= len(max_sub)):
            max_sub = sub
    return max_sub

print(longest_common_string("hello", "hi"))

def lcs (str1, str2):
    # use a matrix to store the string characters
    # 
m = [[None] * 10 for i in range(100)]
