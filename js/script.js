(function() {
    var img = document.getElementById('BeerImg');
    img.setAttribute('crossOrigin', 'anonymous');
    var vibrant = new window.Vibrant(img);
    var swatches = vibrant.swatches();
    for (var swatch in swatches) {
        if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
            console.log(swatch, swatches[swatch].getHex());
        };
    };

    var circle = document.getElementById('CircleText');
    circle.style.borderColor = swatches.Vibrant.getHex();
    circle.style.color = swatches.Vibrant.getHex();
})()