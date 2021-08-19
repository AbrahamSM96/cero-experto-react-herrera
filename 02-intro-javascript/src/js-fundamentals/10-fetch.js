const APIKEY = "4h6xSD2bAOTCgvV0VEMDK091XK6maDTw";

const FETCH = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`);

FETCH.then((response) => response.json())
    .then(({ data }) => {
        const {
            images: {
                original: { url },
            },
        } = data;
        console.log(url);
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    })
    .catch((err) => console.log(err, "err"));
