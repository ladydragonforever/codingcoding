// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function (amount, coins, maxCoin = Infinity, memo={}) {
    if (amount === 0) return 1;
    if([amount, maxCoin] in memo) return memo[[amount, maxCoin]];
    let count = 0;


    for (let coin of coins) {
        if (coin <= amount && coin <= maxCoin) {
            let curAmount = amount - coin;
            count += change(curAmount, coins, coin, memo);
            
        }

    }

    memo[[amount, maxCoin]] = count;
    return count;
};
console.log(change(5, [1,2,5]))