export const getGifs = async (category) => {
    const URI = 'https://api.giphy.com/v1/gifs/'
    const API_KEY = '4h6xSD2bAOTCgvV0VEMDK091XK6maDTw'
    const CATEGORY = encodeURI(category)
    const LIMIT = 10
    const API = `${URI}search?q=${CATEGORY}&limit=${LIMIT}&api_key=${API_KEY}`
    const resp = await fetch(API);
    const { data } = await resp.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs
}
