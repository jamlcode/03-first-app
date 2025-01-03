const apiKey = 'T9N00UFBlZskHpBzY2m9hbWF9u84sZn7'

export const getGiphy = async () => {
  try {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await resp.json();
    const { original } = data.images
    const { url } = original
    return url  
  } catch (error) {
    console.error(error);
    return 'No se encontro la imagen'
  }
}