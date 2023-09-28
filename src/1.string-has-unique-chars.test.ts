import { expect, test } from "bun:test";
import { hasUniqueChars, HasUniqueCharImplType } from "./1.string-has-unique-chars";
import { faker } from '@faker-js/faker'

test('has unique string', () => {
    const funcs = [hasUniqueChars(HasUniqueCharImplType.SET),
    hasUniqueChars(HasUniqueCharImplType.HASH1),
    hasUniqueChars(HasUniqueCharImplType.NOSTORE),
    ];
    const dynamicString = faker.string.alphanumeric(100);
    for (let func of funcs) {
        expect(func('helo')).toBeTrue();
        expect(func('hello')).toBeFalse();
        expect(func('heLlo')).toBeTrue();
        expect(func('Pseudoantidisestablishmentarianism')).toBeFalse();
        expect(func(dynamicString)).toBeFalse();
    }
});