const apiKey = 'T9N00UFBlZskHpBzY2m9hbWF9u84sZn7'

// const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// request.then( (resp) => {
//     resp.json().then( (data) => {
//         console.log('data', data);
//     } )
// } )

// Encadenando promesas
// request
//     .then( resp => resp.json() )
//     .then( ({ data }) => {
//         const { url } = data.images.original
//         console.log('url', url);
//         const img = document.createElement('img')
//         img.src = url
//         const element = document.getElementById('root')
//         element.append(img)

//     } )
//     .catch(console.error)

// Async Await

const getGiphy = async () => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await resp.json();
    const { original } = data.images
    const { url } = original
    console.log('url', url);
    return url
}

const renderGiphy = async () => {
    const url = await getGiphy();
    console.log('url inside renderGiphy', url);
    const img = document.createElement('img')
    img.src = url
    const element = document.getElementById('root')
    element.append(img)
}

renderGiphy();