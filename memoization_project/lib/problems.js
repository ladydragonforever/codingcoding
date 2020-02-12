// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578
function lucasNumberMemo(n, memo = {}) {
    if (memo[n]) return memo[n];
    if (n === 0) return 2;
    if (n === 1) return 1;

    memo[n] = lucasNumberMemo(n-1, memo) + lucasNumberMemo(n-2, memo)
    return memo[n];
}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code 
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//  
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
// minChange([2, 47], 48)
// minChange([2, 5, 10], 17)
// minChange([2, 5, 99], 101)
// minChange([99], 101)
function minChange(coins, amount, memo = {}) {
 
    // debugger;
  
    if(amount === 0) return 0;
    if(amount in memo) return memo[amount];


    let min = undefined
    for (let coin of coins) {
        if (coin <= amount) {
            let curAmount = amount - coin;
            let curMin = minChange(coins, curAmount, memo)
            if(curMin !== undefined){
                // debugger
                if(min === undefined){
                    min = curMin+1;
                }
                min = Math.min(min, curMin+1);
            }
        }
    }

    memo[amount] = min;
    return min

    // let numberCoins = [];
    // for (let coin of coins) {
    //     if (coin <= amount) {
    //         let curAmount = amount - coin;
    //         let count = minChange(coins, curAmount, memo)+1;
    //         numberCoins.push(count);
    //     }
    // }
    // min = Math.min(...numberCoins);
    // memo[amount] = min;
    // return min;
}


  // if (amount === 0) return 0;
    // sortedArr = coins.slice(0);
    // let i = sortedArr.length - 1
    // while (i > 0) {

    //     if (sortedArr[i] < amount) {
    //         let remaining = amount % sortedArr[i];
    //         let count = Math.floor(amount/sortedArr[i]) 
    //         if ( coins.includes(remaining)) {
    //             return count+1;
    //         } else if (remaining === 0) {
    //             return count;
    //         } else {
    //             return minChange(coins, remaining) + count
    //         }
    //     }

    //     i --;
    // }

    // for (let coin of coins) {
    //     if (coin < amount) {
    //         let remaining = amount % coin
    //         if (remaining === 0) {
    //             count = amount / coin + minChange(coins, remaining)
    //         }
    //         if (count < minCount) minCount === count
    //     }
    // }
    // return minCount;
// console.log(minChange([1,2,5], 11))
// console.log(minChange([1, 4, 5], 8))
// console.log(minChange([1, 5, 10, 25], 15))
// console.log(minChange([1, 5, 10, 25], 100)) 
console.log(minChange([83, 186, 408, 419], 6249))
module.exports = {
    lucasNumberMemo,
    minChange
};