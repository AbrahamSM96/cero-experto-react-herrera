// const getImagePromise = () =>
//     new Promise((resolve, reject) => {
//         resolve("https://lsdsd.com");
//     });
// getImagePromise().then(console.log);

export const getImage = async () => {
    try {
        const APIKEY = "4h6xSD2bAOTCgvV0VEMDK091XK6maDTw";
        const FETCH = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`);
        const {
            data: {
                images: {
                    original: { url },
                },
            },
        } = await FETCH.json();
        return url
       
    } catch (error) {
        console.log(error);
        return 'No existe'
    }
};

// getImage();

// FETCH.then((response) => response.json())
//     .then(({ data }) => {
//         const {
//             images: {
//                 original: { url },
//             },
//         } = data;
//         console.log(url);
//         const img = document.createElement("img");
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch((err) => console.log(err, "err"));
