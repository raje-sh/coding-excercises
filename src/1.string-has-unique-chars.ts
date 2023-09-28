import now from 'performance-now';
// Implement an algorithm to determine if a string has all unique characters 
// What if you can not use additional data structures?

/* 
Uses Set Data-Structure
*/
const hasUniqueChars1 = (input: string): boolean => {
    return new Set(input).size === input.length;
}

/* 
Returns result at the first occurence of duplicate character
uses key-value (Object) data-structure
*/
const hasUniqueChars2 = (input: string): boolean => {
    const resultKeys: Record<string, string> = {};
    for (let c of input) {
        if (resultKeys[c]) {
            return false;
        }
        resultKeys[c] = c;
    }
    return true;
}

/* 
in-place check without any store
*/
const hasUniqueChars3 = (input: string): boolean => {
    const sChars = input.split('').sort();
    for (let i = 0; i + 1 < sChars.length; i++) {
        if (sChars[i] === sChars[i + 1]) {
            return false;
        }
    }
    return true;
}


export enum HasUniqueCharImplType {
    SET = "SET",
    HASH1 = "HASH1",
    NOSTORE = "NOSTORE",
}
export const hasUniqueChars = (type: HasUniqueCharImplType) => {
    return (input: string) => {
        let result: boolean;
        const start = now();
        switch (type) {
            case HasUniqueCharImplType.SET:
                result = hasUniqueChars1(input);
                break;
            case HasUniqueCharImplType.HASH1:
                result = hasUniqueChars2(input);
                break;
            case HasUniqueCharImplType.NOSTORE:
                result = hasUniqueChars3(input);
                break;
        }
        const end = now();
        console.log('time-taken', type, input, (end - start).toFixed(3))
        return result;
    }
}