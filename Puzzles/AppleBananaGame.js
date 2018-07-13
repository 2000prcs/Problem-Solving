// Alice and Bob are playing a game with some apples and bananas. The rules are as follows.

// The game starts with Alice and Bob piling up a stack of fruits consisting of apples and bananas. 
// Alice and Bob take turns removing apples and/or bananas from the pile, starting with Alice. 
// Each turn, Alice or Bob may remove a) one apple, b) one banana, c) three apples and one banana, or 
// d) one apple and three bananas. Fruits may only be removed in exact numbers; 
// it is illegal to remove one apple and two bananas in a turn. 
// The person to remove the last fruit from the pile wins the game. 
//If there are no fruits to begin with, Bob immediately wins the game.

// Assuming Alice and Bob both play optimally, determine if Alice or Bob wins the game with the given number of apples and bananas.

// input - The numbers of apples (a) and bananas (b), separated with a space. (0 ≤ a, b ≤ 1,000)
// output - The name of the person who wins the game with the given number of apples and bananas.

// 1 0 ==> Alice
// 2 2 ==> Bob
// 3 4 ==> Bob