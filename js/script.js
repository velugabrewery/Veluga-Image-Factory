function beerSubmit(){
    // 템플릿 1
    var img = document.getElementById('drinkImg');
    var drinkImgUrlInput = document.getElementById('drinkImgUrlInput').value;
    img.src = drinkImgUrlInput;
    var drinkNameInput = document.getElementById('drinkNameInput').value;
    document.getElementById('drinkName').innerHTML = drinkNameInput;
    var producerNameInput = document.getElementById('producerNameInput').value;
    document.getElementById('producerName').innerHTML = producerNameInput;
    var drinkDescriptionInput = document.getElementById('drinkDescriptionInput').value;
    document.getElementById('drinkDescription').innerHTML = drinkDescriptionInput;
    var originInput = document.getElementById('originInput').value;
    document.getElementById('origin').innerHTML = originInput;
    var drinkStyleInput = document.getElementById('drinkStyleInput').value;
    document.getElementById('drinkStyle').innerHTML = drinkStyleInput;
    var drinkAbvInput = document.getElementById('drinkAbvInput').value;
    document.getElementById('drinkAbv').innerHTML = drinkAbvInput;
    var packageUnitMainInput = document.getElementById('packageUnitMainInput').value;
    document.getElementById('packageUnitMain').innerHTML = packageUnitMainInput;
    var packageQuantityMainInput = document.getElementById('packageQuantityMainInput').value;
    document.getElementById('packageQuantityMain').innerHTML = packageQuantityMainInput;
    var packageUnitSubInput = document.getElementById('packageUnitSubInput').value;
    document.getElementById('packageUnitSub').innerHTML = packageUnitSubInput;
    var packageQuantitySubInput = document.getElementById('packageQuantitySubInput').value;
    document.getElementById('packageQuantitySub').innerHTML = packageQuantitySubInput;

    // 템플릿 2
    var drinkImgT2 = document.getElementById('drinkImgT2');
    drinkImgT2.src = drinkImgUrlInput;
    document.getElementById('drinkNameT2').innerHTML = drinkNameInput;
    document.getElementById('producerNameT2').innerHTML = producerNameInput;
    document.getElementById('drinkDescriptionT2').innerHTML = drinkDescriptionInput;
    document.getElementById('originT2').innerHTML = originInput;
    document.getElementById('drinkStyleT2').innerHTML = drinkStyleInput;
    document.getElementById('drinkAbvT2').innerHTML = drinkAbvInput;
    document.getElementById('packageUnitMainT2').innerHTML = packageUnitMainInput;
    document.getElementById('packageQuantityMainT2').innerHTML = packageQuantityMainInput;
    document.getElementById('packageUnitSubT2').innerHTML = packageUnitSubInput;
    document.getElementById('packageQuantitySubT2').innerHTML = packageQuantitySubInput;

    // 오픈그래프
    var drinkImgOG = document.getElementById('drinkImgOG');
    drinkImgOG.src = drinkImgUrlInput;
    var drinkNameInputKO = document.getElementById('drinkNameInputKO').value;
    document.getElementById('drinkNameOG').innerHTML = drinkNameInputKO;
    var producerNameInputKO = document.getElementById('producerNameInputKO').value;
    document.getElementById('producerNameOG').innerHTML = producerNameInputKO;
    document.getElementById('originOG').innerHTML = originInput;
    var drinkStyleInputKO = document.getElementById('drinkStyleInputKO').value;
    document.getElementById('drinkStyleOG').innerHTML = drinkStyleInputKO;
    document.getElementById('drinkAbvOG').innerHTML = drinkAbvInput;


};

function colorChange(){
    var img = document.getElementById('drinkImg');
    img.setAttribute('crossOrigin', 'anonymous');
    var vibrant = new window.Vibrant(img);
    var swatches = vibrant.swatches();
    var circleText1 = document.getElementById('circleText1');
    var circleText2 = document.getElementById('circleText2');
    circleText1.style.borderColor = swatches.Vibrant.getHex();
    circleText1.style.color = swatches.Vibrant.getHex();
    circleText2.style.borderColor = swatches.Vibrant.getHex();
    circleText2.style.color = swatches.Vibrant.getHex();
    var headerT2 = document.getElementById('headerT2');
    if (swatches.LightMuted == true) {
        headerT2.style.backgroundColor = swatches.LightMuted.getHex();
    }
    else {
        headerT2.style.backgroundColor = swatches.Muted.getHex();
    }
};

function changeSeasonal(){
    // 템플릿 1
    var circleText1 = document.getElementById('circleText1');
    var circleText2 = document.getElementById('circleText2');
    circleText1.style.display = 'none';
    circleText2.style.display = 'block';
    
    // 템플릿 2
    var cycleT2 = document.getElementById('cycleT2');
    cycleT2.innerHTML = '시즈널';
};

function delPackageSub(){
    // 템플릿 1
    var packageSub = document.getElementById('packageSub');
    packageSub.remove();
    
    // 템플릿 2
    var packageSubT2 = document.getElementById('packageSubT2');
    packageSubT2.remove();
};

window.onload = function() {
    colorChange();
}