import { it } from "vitest";
import { describe } from "vitest";
import { getHeroAsync } from "../../bases/09-promises";
import { expect } from "vitest";

describe(' Tests in 09-promises', () => {
    it('getHeroAsync should return a hero by id', async () => {
        const id = 2
        const hero = await getHeroAsync(id)
        expect( hero ).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' })
    })
    it('getHeroAsync should return an error if the hero does not exist', async () => {
        const id = 100
        try {
            const hero = await getHeroAsync(id)
            console.log('hero', hero);
        } catch (error) {
            expect(error).toBe(`Hero with id: ${id} not found`)
        }
        
    })
})