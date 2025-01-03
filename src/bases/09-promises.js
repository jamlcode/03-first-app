import { getHeroById } from "./08-imp-exp";

export const getHeroAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            if ( typeof hero === 'undefined' ) {
                reject(`Hero whit id: ${id} not found`)
            } else {
                resolve(hero)
            }
        }, 1000);
      })
}