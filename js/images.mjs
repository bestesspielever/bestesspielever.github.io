export { loadImages };

function loadImages(imageNames) {
    let imagesPath = "./assets/images/";

    let images = {};
    for (var i = 0; i < imageNames.length; i++) {
        // name = "background.jpg" -> ["background", "jpg"] -> "background"
        let name = imageNames[i].split(".")[0];
        images[name] = new Image();
        images[name].src = imagesPath + imageNames[i];
    }
    return images;
}