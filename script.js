var defaultImageSrc = "./img/2aa722cd-f0e7-4eb9-b157-fd9c800f5c26.JPG";
var onImageSrc = "./img/d9780637-5f86-4acf-bf88-b76a3b55995e.JPG";

function toggleImage() {
    var imgElement = document.getElementById("image");
    var checkbox = document.getElementById("button");

    if (checkbox.checked) {
        imgElement.src = onImageSrc;
    } else {
        imgElement.src = defaultImageSrc;
    }
}