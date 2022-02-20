const images=[
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.className="background"
bgImage.src = `screenshots/${choosenImage}`;

document.body.appendChild(bgImage);
