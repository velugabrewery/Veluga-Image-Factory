function colorChange(){
    var img = document.getElementById('drinkImgT2');
    img.setAttribute('crossOrigin', 'anonymous');
    var vibrant = new window.Vibrant(img);
    var swatches = vibrant.swatches();
};

window.onload = function() {
    let params = window.location.search.substr(1).split('&');
    for(let i in params) {
        let keyValue = params[i].split('=')
        let key = keyValue[0]
        let val = keyValue[1]
        console.log(key)
        console.log(val)
        console.log(decodeURIComponent(val))
        var text = decodeURIComponent(val)
        var getml = text.substring(text.length-2, text.length)
        console.log(getml)
        if (getml == "mL") {
            document.getElementsByName(key)[0].value = text.toLowerCase()
        }
        else {
            document.getElementsByName(key)[0].value = text
        }
    }

    // 가공형태 갯수에 따라서 없앰
    if (packageQuantitySubInput.value == "") {
        delPackageSub()
        delPackageThird()
    }
    else if (packageQuantityThirdInput.value == "") {
        delPackageThird()
    }

    // 연중생산, 시즈널, 한정판 체크
    if (document.getElementsByName('production_cycle_type')[0].value == 'year_round') {
        changeYearRound()
    }
    else if(document.getElementsByName('production_cycle_type')[0].value == 'seasonal') {
        changeSeasonal()
    }
    else {
        changeLimited()
    }
    beerSubmit()
}

function beerSubmit(){
    // 템플릿 1
    // var img = document.getElementById('drinkImg');
    // var drinkImgUrlInput = document.getElementById('drinkImgUrlInput').value;
    // img.src = drinkImgUrlInput;
    // drinkNameInput = document.getElementById('drinkNameInput').value;
    // document.getElementById('drinkName').innerHTML = drinkNameInput;
    // producerNameInput = document.getElementById('producerNameInput').value;
    // document.getElementById('producerName').innerHTML = producerNameInput;
    // var drinkDescriptionInput = document.getElementById('drinkDescriptionInput').value;
    // drinkDescriptionInput = drinkDescriptionInput.replace(/\n\n/g, '<hr><hr>').replace(/\n/g, '<br>');
    // document.getElementById('drinkDescription').innerHTML = drinkDescriptionInput;
    // var originInput = document.getElementById('originInput').value;
    // document.getElementById('origin').innerHTML = originInput;
    // var drinkStyleInput = document.getElementById('drinkStyleInput').value;
    // document.getElementById('drinkStyle').innerHTML = drinkStyleInput;
    // var drinkAbvInput = document.getElementById('drinkAbvInput').value;
    // document.getElementById('drinkAbv').innerHTML = drinkAbvInput;
    // var packageUnitMainInput = document.getElementById('packageUnitMainInput').value;
    // document.getElementById('packageUnitMain').innerHTML = packageUnitMainInput;
    // var packageQuantityMainInput = document.getElementById('packageQuantityMainInput').value;
    // document.getElementById('packageQuantityMain').innerHTML = packageQuantityMainInput;
    // var packageUnitSubInput = document.getElementById('packageUnitSubInput').value;
    // document.getElementById('packageUnitSub').innerHTML = packageUnitSubInput;
    // var packageQuantitySubInput = document.getElementById('packageQuantitySubInput').value;
    // document.getElementById('packageQuantitySub').innerHTML = packageQuantitySubInput;
    // var packageUnitThirdInput = document.getElementById('packageUnitThirdInput').value;
    // document.getElementById('packageUnitThird').innerHTML = packageUnitThirdInput;
    // var packageQuantityThirdInput = document.getElementById('packageQuantityThirdInput').value;
    // document.getElementById('packageQuantityThird').innerHTML = packageQuantityThirdInput;

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
    document.getElementById('packageUnitThirdT2').innerHTML = packageUnitThirdInput;
    document.getElementById('packageQuantityThirdT2').innerHTML = packageQuantityThirdInput;

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

    // 블로그용 썸네일
    var drinkImgBlogThumb = document.getElementById('drinkImgBlogThumb');
    drinkImgBlogThumb.src = drinkImgUrlInput;

    // resetT1FontSize();
    // resetT2FontSize();
    resetT2MarginTop();
    resetOGFontSize();
    changeDefaultFontT1();
    changeDefaultFontT2();
    colorChange();
};

function changeYearRound(){
    // 템플릿 1
    // var circleText1 = document.getElementById('circleText1');
    // var circleText2 = document.getElementById('circleText2');
    // var circleText3 = document.getElementById('circleText3');
    // circleText1.style.display = 'block';
    // circleText2.style.display = 'none';
    // circleText3.style.display = 'none';
    
    // 템플릿 2
    var cycleT2 = document.getElementById('cycleT2');
    cycleT2.innerHTML = '연중 생산';

    // 버튼 클래스 추가 및 제거
    var btnYearRound = document.getElementById('btnYearRound');
    var btnSeasonal = document.getElementById('btnSeasonal');
    var btnLimited = document.getElementById('btnLimited');
    btnYearRound.classList.add('btn--selected');
    btnSeasonal.classList.remove('btn--selected');
    btnLimited.classList.remove('btn--selected');
};

function changeSeasonal(){
    // 템플릿 1
    // var circleText1 = document.getElementById('circleText1');
    // var circleText2 = document.getElementById('circleText2');
    // var circleText3 = document.getElementById('circleText3');
    // circleText1.style.display = 'none';
    // circleText2.style.display = 'block';
    // circleText3.style.display = 'none';
    
    // 템플릿 2
    var cycleT2 = document.getElementById('cycleT2');
    cycleT2.innerHTML = '시즈널';

    // 버튼 클래스 추가 및 제거
    var btnYearRound = document.getElementById('btnYearRound');
    var btnSeasonal = document.getElementById('btnSeasonal');
    var btnLimited = document.getElementById('btnLimited');
    btnYearRound.classList.remove('btn--selected');
    btnSeasonal.classList.add('btn--selected');
    btnLimited.classList.remove('btn--selected');
};

function changeLimited(){
    // 템플릿 1
    // var circleText1 = document.getElementById('circleText1');
    // var circleText2 = document.getElementById('circleText2');
    // var circleText3 = document.getElementById('circleText3');
    // circleText1.style.display = 'none';
    // circleText2.style.display = 'none';
    // circleText3.style.display = 'block';
    
    // 템플릿 2
    var cycleT2 = document.getElementById('cycleT2');
    cycleT2.innerHTML = '한정판';

    // 버튼 클래스 추가 및 제거
    var btnYearRound = document.getElementById('btnYearRound');
    var btnSeasonal = document.getElementById('btnSeasonal');
    var btnLimited = document.getElementById('btnLimited');
    btnYearRound.classList.remove('btn--selected');
    btnSeasonal.classList.remove('btn--selected');
    btnLimited.classList.add('btn--selected');
};

function addPackageSub(){
    // 템플릿 1
    // var packageSub = document.getElementById('packageSub');
    // packageSub.style.display = 'table-cell';
    
    // 템플릿 2
    var packageSubT2 = document.getElementById('packageSubT2');
    packageSubT2.style.display = 'list-item';

    // 버튼 클래스 추가 및 제거
    var btnAddPackageSub = document.getElementById('btnAddPackageSub');
    var btnDelPackageSub = document.getElementById('btnDelPackageSub');
    btnAddPackageSub.classList.add('btn--selected');
    btnDelPackageSub.classList.remove('btn--selected');
}

function delPackageSub(){
    // 템플릿 1
    // var packageSub = document.getElementById('packageSub');
    // packageSub.style.display = 'none';
    
    // 템플릿 2
    var packageSubT2 = document.getElementById('packageSubT2');
    packageSubT2.style.display = 'none';

    // 버튼 클래스 추가 및 제거
    var btnAddPackageSub = document.getElementById('btnAddPackageSub');
    var btnDelPackageSub = document.getElementById('btnDelPackageSub');
    btnAddPackageSub.classList.remove('btn--selected');
    btnDelPackageSub.classList.add('btn--selected');
};

function addPackageThird(){
    // 템플릿 1
    // var packageThird = document.getElementById('packageThird');
    // packageThird.style.display = 'table-cell';
    
    // 템플릿 2
    var packageThirdT2 = document.getElementById('packageThirdT2');
    packageThirdT2.style.display = 'list-item';

    // 버튼 클래스 추가 및 제거
    var btnAddPackageThird = document.getElementById('btnAddPackageThird');
    var btnDelPackageThird = document.getElementById('btnDelPackageThird');
    btnAddPackageThird.classList.add('btn--selected');
    btnDelPackageThird.classList.remove('btn--selected');
}

function delPackageThird(){
    // 템플릿 1
    // var packageThird = document.getElementById('packageThird');
    // packageThird.style.display = 'none';
    
    // 템플릿 2
    var packageThirdT2 = document.getElementById('packageThirdT2');
    packageThirdT2.style.display = 'none';

    // 버튼 클래스 추가 및 제거
    var btnAddPackageThird = document.getElementById('btnAddPackageThird');
    var btnDelPackageThird = document.getElementById('btnDelPackageThird');
    btnAddPackageThird.classList.remove('btn--selected');
    btnDelPackageThird.classList.add('btn--selected');
};


// function changeCondensedT1(){
//     var drinkName = document.getElementById('drinkName');

//     drinkName.classList.add('condensed');

//     // 버튼 클래스 추가 및 제거
//     var btnDefaultFontT1 = document.getElementById('btnDefaultFontT1');
//     var btnCondensedT1 = document.getElementById('btnCondensedT1');
//     btnDefaultFontT1.classList.remove('btn--selected');
//     btnCondensedT1.classList.add('btn--selected');
// }

// function changeDefaultFontT1(){
//     var drinkName = document.getElementById('drinkName');

//     drinkName.classList.remove('condensed');

//     // 버튼 클래스 추가 및 제거
//     var btnDefaultFontT1 = document.getElementById('btnDefaultFontT1');
//     var btnCondensedT1 = document.getElementById('btnCondensedT1');
//     btnDefaultFontT1.classList.add('btn--selected');
//     btnCondensedT1.classList.remove('btn--selected');
// }

function changeCondensedT2(){
    var drinkNameT2 = document.getElementById('drinkNameT2');

    drinkNameT2.classList.add('condensed');

    // 버튼 클래스 추가 및 제거
    var btnDefaultFontT2 = document.getElementById('btnDefaultFontT2');
    var btnCondensedT2 = document.getElementById('btnCondensedT2');
    btnDefaultFontT2.classList.remove('btn--selected');
    btnCondensedT2.classList.add('btn--selected');
}

function changeDefaultFontT2(){
    var drinkNameT2 = document.getElementById('drinkNameT2');

    drinkNameT2.classList.remove('condensed');

    // 버튼 클래스 추가 및 제거
    var btnDefaultFontT2 = document.getElementById('btnDefaultFontT2');
    var btnCondensedT2 = document.getElementById('btnCondensedT2');
    btnDefaultFontT2.classList.add('btn--selected');
    btnCondensedT2.classList.remove('btn--selected');
}

// var drinkNameFontSize = 90;
var drinkNameT2FontSize = 90;
var drinkNameT2MarginTop = 0;
var drinkNameOGFontSize = 60;
var beerDataT2MarginTop = 38;

// function addT1FontSize(){
//     var drinkName = document.getElementById('drinkName');
//     drinkNameFontSize = drinkNameFontSize + 2;
//     drinkName.style.fontSize = drinkNameFontSize + 'px';
// }

// function subT1FontSize(){
//     var drinkName = document.getElementById('drinkName');
//     drinkNameFontSize = drinkNameFontSize - 2;
//     drinkName.style.fontSize = drinkNameFontSize + 'px';
// }

// function resetT1FontSize(){
//     drinkNameFontSize = 90;
//     drinkName.style.fontSize = drinkNameFontSize + 'px';
// }

function addT2FontSize(){
    var drinkNameT2 = document.getElementById('drinkNameT2');
    drinkNameT2FontSize = drinkNameT2FontSize + 2;
    drinkNameT2.style.fontSize = drinkNameT2FontSize + 'px';

    var beerDataT2 = document.getElementById('beerDataT2');
    beerDataT2MarginTop = beerDataT2MarginTop + 2;
    beerDataT2.style.marginTop = beerDataT2MarginTop + 'px';
}

function subT2FontSize(){
    var drinkNameT2 = document.getElementById('drinkNameT2');
    drinkNameT2FontSize = drinkNameT2FontSize - 2;
    drinkNameT2.style.fontSize = drinkNameT2FontSize + 'px';

    var beerDataT2 = document.getElementById('beerDataT2');
    beerDataT2MarginTop = beerDataT2MarginTop - 2;
    beerDataT2.style.marginTop = beerDataT2MarginTop + 'px';
}

function resetT2FontSize(){
    drinkNameT2FontSize = 90;
    drinkNameT2.style.fontSize = drinkNameT2FontSize + 'px';

    beerDataT2MarginTop = 38;
    beerDataT2.style.marginTop = beerDataT2MarginTop + 'px';
}

function addT2MarginTop(){
    var producerNameT2 = document.getElementById('producerNameT2');
    producerNameT2MarginTop = producerNameT2MarginTop + 10;
    producerNameT2.style.marginTop = producerNameT2MarginTop + 'px';
}

function subT2MarginTop(){
    var producerNameT2 = document.getElementById('producerNameT2');
    producerNameT2MarginTop = producerNameT2MarginTop - 10;
    producerNameT2.style.marginTop = producerNameT2MarginTop + 'px';
}

function resetT2MarginTop(){
    producerNameT2MarginTop = 0;
    producerNameT2.style.marginTop = producerNameT2MarginTop + 'px';
}

function addOGFontSize(){
    var drinkNameOG = document.getElementById('drinkNameOG');
    drinkNameOGFontSize = drinkNameOGFontSize + 2;
    drinkNameOG.style.fontSize = drinkNameOGFontSize + 'px';
}

function subOGFontSize(){
    var drinkNameOG = document.getElementById('drinkNameOG');
    drinkNameOGFontSize = drinkNameOGFontSize - 2;
    drinkNameOG.style.fontSize = drinkNameOGFontSize + 'px';
}

function resetOGFontSize(){
    drinkNameOGFontSize = 60;
    drinkNameOG.style.fontSize = drinkNameOGFontSize + 'px';
}

// function makeTem1(){
//     domtoimage.toJpeg(document.getElementById('templateStyle1'), { width: 1000 })
//         .then(function (dataUrl) {
//             var link = document.createElement('a');
//             link.download = 'Tem1 ' + producerNameInput + ' ' + drinkNameInput + '.jpeg';
//             link.href = dataUrl;
//             link.click();
//         });
// } 

function makeTem2(){
    domtoimage.toJpeg(document.getElementById('templateStyle2'), { width: 1000 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'Tem2 ' + producerNameInput + ' ' + drinkNameInput + '.jpeg';
            link.href = dataUrl;
            link.click();
        });
} 

function makeOG(){
    domtoimage.toJpeg(document.getElementById('opengraph'))
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'OG ' + producerNameInput + ' ' + drinkNameInput + '.jpeg';
            link.href = dataUrl;
            link.click();
        });
}

function makeImg(){
    // makeTem1();
    makeTem2();
    makeOG();
}

function makeBlogThumb(){
    domtoimage.toJpeg(document.getElementById('blogThumbnail'))
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'Thumbnail ' + producerNameInput + ' ' + drinkNameInput + '.jpeg';
            link.href = dataUrl;
            link.click();
        });
}

function makeBlogImg(){
    makeBlogThumb();
}