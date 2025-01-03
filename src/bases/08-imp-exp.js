import heroes from "./../data/heroes";
 
 export const getHeroById = (id) => heroes.find((h => h.id === id))
 
 export const getHeroeByOwner = (owner) => heroes.filter(h => h.owner === owner)
 
