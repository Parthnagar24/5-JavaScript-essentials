/*
==========================================
👉 Operators & Precedence in JavaScript
==========================================

🔹 Operators: Special symbols that perform operations on operands (values/variables).
They can be categorized as:

1. Arithmetic Operators: +, -, *, /, %, **  
2. Assignment Operators: =, +=, -=, *=, /=, %=  
3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=  
4. Logical Operators: &&, ||, !  
5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>  
6. Unary Operators: ++, --, typeof, delete, void  
7. Ternary Operator: condition ? expr1 : expr2  
8. Spread/Rest Operator: ...  
9. Optional Chaining: ?.  
10. Comma Operator: ,  

------------------------------------------
👉 Operator Precedence:
------------------------------------------
It defines the **priority** in which operators are executed 
when an expression has multiple operators.

✅ Higher precedence operators are executed first.  
✅ Associativity decides evaluation order if operators have the same precedence.  

For example:
- Multiplication (*) has higher precedence than addition (+).  
- So `2 + 3 * 4` → multiplication first → `2 + 12 = 14`.  
- Assignment (=) has one of the lowest precedence, evaluated last.

------------------------------------------
👉 Precedence (High → Low, Common Ones):
------------------------------------------
1. Grouping: ( )  
2. Member Access / Function Call: ., (), []  
3. New (with arguments)  
4. Postfix Increment/Decrement: x++, x--  
5. Unary: ++x, --x, typeof, !, delete  
6. Exponentiation: **  
7. Multiplicative: *, /, %  
8. Additive: +, -  
9. Shift: <<, >>, >>>  
10. Relational: <, <=, >, >=, in, instanceof  
11. Equality: ==, !=, ===, !==  
12. Bitwise AND: &  
13. Bitwise XOR: ^  
14. Bitwise OR: |  
15. Logical AND: &&  
16. Logical OR: ||  
17. Nullish Coalescing: ??  
18. Conditional (ternary): ?:  
19. Assignment: =, +=, -=, *=, /=, %=  
20. Comma: ,

------------------------------------------
👉 Let's Demonstrate with Examples
------------------------------------------
*/

console.log("---- Operator Precedence Examples ----");

// Example 1: Arithmetic Precedence
let result1 = 2 + 3 * 4; // Multiplication (*) happens before addition (+)
console.log("2 + 3 * 4 =", result1); // Output: 14

// Example 2: Grouping with ()
let result2 = (2 + 3) * 4; // Parentheses () have the highest precedence
console.log("(2 + 3) * 4 =", result2); // Output: 20

// Example 3: Unary vs Binary
let a = 5;
let result3 = -a + 10; // Unary minus is applied first, then addition
console.log("-a + 10 =", result3); // Output: 5

// Example 4: Comparison and Logical
let result4 = 5 > 3 && 10 > 20; 
// > has higher precedence than &&
// (5 > 3) → true
// (10 > 20) → false
// true && false → false
console.log("5 > 3 && 10 > 20 =", result4); // Output: false

// Example 5: Assignment Lowest Precedence
let x = 10, y = 5;
let result5 = (x + y * 2) = 20; 
// ❌ Invalid: because assignment (=) cannot appear in middle
// Instead let's check this:
let result6 = x + (y = 2 * 5); 
// First (y = 10), then x + 10 → 20
console.log("x + (y = 2 * 5) =", result6); // Output: 20

// Example 6: Ternary and Logical
let result7 = (10 > 5) ? "Yes" : "No"; // Ternary checks condition
console.log("10 > 5 ? 'Yes' : 'No' =", result7); // Output: Yes

// Example 7: Exponentiation vs Unary
let result8 = 2 ** 3 ** 2; 
// Right-to-left associativity → 2 ** (3 ** 2) → 2 ** 9 → 512
console.log("2 ** 3 ** 2 =", result8); // Output: 512

/*
==========================================
👉 Recap (Quick Memory Points)
==========================================
1. Parentheses () have the highest precedence.
2. Unary comes before binary operators.
3. Exponentiation (**) is right-to-left associative.
4. *, /, % > +, -
5. Comparison > Equality > Logical AND (&&) > Logical OR (||).
6. Assignment (=) has the lowest precedence.
==========================================
*/
