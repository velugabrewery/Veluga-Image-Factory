(function() {
    var img = document.getElementById('BeerImg');
    img.setAttribute('crossOrigin', 'anonymous');
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches();
    for (var swatch in swatches) {
        if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
            console.log(swatch, swatches[swatch].getHex());
        };
    };

    var circleA = document.querySelector('#circleText::after');
    var circleB = document.querySelector('#circleText::before');
    circleA.style.borderColor = swatches.Vibrant.getHex();
    circleB.style.borderColor = swatches.Vibrant.getHex();
})()