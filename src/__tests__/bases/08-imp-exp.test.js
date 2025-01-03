import { describe } from "vitest";
import { getHeroById, getHeroeByOwner } from "../../bases/08-imp-exp";
import { test } from "vitest";
import { expect } from "vitest";
describe('Test in 08-imp-exp', () => {
    test('getHeroById should return a hero by id', () => {
        const id = 2
        const hero = getHeroById(id);
        expect(hero).toBeDefined()
    })
    test('getHeroById should return undefined if the hero does not exist', () => {
        const id = 10
        const hero = getHeroById(id);
        expect(hero).toBeUndefined();
    })
    test('getHeroeByOwner should return and array with heroes by owner = DC', () => {
        const owner = 'DC'
        const heroes = getHeroeByOwner(owner);
        const { 0: batman, 1: superman, 2: flash } = heroes
        expect(heroes.length).toBe(3)
        expect(heroes).toEqual([batman, superman, flash])
    })
    test('getHeroeByOwner should return and array with heroes by owner = DC', () => {
        const owner = 'Marvel'
        const heroes = getHeroeByOwner(owner);
        const { 0: spiderman, 1: wolverine } = heroes
        expect(heroes.length).toBe(2)
        expect(heroes).toEqual([ spiderman, wolverine ])
    })
})