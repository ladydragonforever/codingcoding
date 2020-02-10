# keypad : 
# 2: ABC; 3: DEF; 4:GHI; 5:JKL; 5:MNO; 7: PQRS; 8:TUV; 9:WXYZ

#Write a method that receives a string of numbers as input and returns a list of letter combinations that follows the same 
# order
# "234" : ADG; AE; AF; BE; BD; BF; CD; CE;CF

# key points: the order of the letters follows the order of number string; the length of the combinantion is the same as the number string
# game plan: 
# it's a problem of combination;
# use recursion to iterate through the first number's string list and add it to the combis constructed with the remaining number strings

def combi(str)
    keypad = {
        "2"=> "ABC",
        "3"=>"DEF",
        "4"=>"GHI",
        "5"=> "JKI",
        "6"=> "MNO",
        "7"=> "PQRS",
        "8"=> "TUV",
        "9"=> "WXYZ"
}
    return [""] if str.length == 0 
    
    res = [];

   first = keypad[str[0]];
   combi(str[1..-1]).each do |sub|
   
    first.each_char do |el|
        res << el+sub
    end
   end

   return res;
end

p combi("234")