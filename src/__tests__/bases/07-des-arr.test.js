import { it } from "vitest";
import { describe } from "vitest";
import { returnArray, value, useuser } from "../../bases/07-des-arr";
import { expect } from "vitest";

describe('Tests in 07-des-arr', () => {
    it('returnArray should return a string and a number', () => {
        const [string, number] = returnArray()
        // expect([string, number]).toEqual(['ABC', 123])
        expect(string).toBeTypeOf('string')
        expect(number).toBeTypeOf('number')
    })
    it(`useuser should return ${value} and a function`, () => {
        const [_value, fn] = useuser(value)
        expect(_value).toBeTypeOf('string')
        expect(fn).toBeTypeOf('function')
    })
})