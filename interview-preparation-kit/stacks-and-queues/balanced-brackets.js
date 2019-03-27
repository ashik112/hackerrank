// Complete the isBalanced function below.
function isBalanced(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '[': stack.push(']'); break;
            case '{': stack.push('}'); break;
            case '(': stack.push(')'); break;
            case ')':
                if (stack.pop() !== ')') return 'NO';
                break;
            case '}': 
                if (stack.pop() !== '}') return 'NO';
                break;
            case ']': 
                if (stack.pop() !== ']') return 'NO';
                break;
            default: break;
        }
    }
    if(stack.length===0) return 'YES'; else return "NO";
}

console.log(isBalanced("[{")); // No
console.log(isBalanced("{[(])}")); // No
console.log(isBalanced("{{[[()[]]]}}")); // YES