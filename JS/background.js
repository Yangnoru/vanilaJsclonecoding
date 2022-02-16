const images=[
    "0.jepg",
    "1.jpeg",
    "2.jpeg"
];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");

backgroundImage.src = `screenshots/${choosenImage}`;

document.body.appendChild(backgroundImage);