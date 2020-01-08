// 컬러 변경
// ––––––––––––––––––––––––––––––––––––––––––––––––––
function colorChange(){
  var img = document.getElementById('mainImage');
  img.setAttribute('crossOrigin', 'anonymous');
  var vibrant = new window.Vibrant(img);
  var swatches = vibrant.swatches();
  var arrCircle = ['circleTextY', 'circleTextS', 'circleTextL'];
  arrCircle.forEach(item => {
    var item = document.getElementById(item);
    item.style.borderColor = swatches.Vibrant.getHex();
    item.style.color = swatches.Vibrant.getHex();
  });
};

// 페이지 로드
// ––––––––––––––––––––––––––––––––––––––––––––––––––
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
  }

  // 가공형태 갯수에 따라서 없앰
  if (inputProductPackage2.value == "") {
    delPackage(2)
    delPackage(3)
  }
  else if (inputProductPackage3.value == "") {
    delPackage(3)
  }

  // 연중생산, 시즈널, 한정판 체크
  if (document.getElementsByName('production_cycle_type')[0].value == 'year_round') {
    changeCircle(circleTextY)
  }
  else if(document.getElementsByName('production_cycle_type')[0].value == 'seasonal') {
    changeCircle(circleTextS)
  }
  else {
    changeCircle(circleTextL)
  }
  formSubmit()
}

// 데이터 입력
// ––––––––––––––––––––––––––––––––––––––––––––––––––
function formSubmit(){
  // 템플릿 1
  // 메인 이미지 URL을 받아서 삽입
  var mainImage = document.getElementById('mainImage');
  var inputMainImageUrl = document.getElementById('inputMainImageUrl').value;
  mainImage.src = inputMainImageUrl;
  // 와인 설명
  var inputDescription = document.getElementById('inputDescription').value;
  inputDescription = inputDescription.replace(/\n\n/g, '<hr><hr>').replace(/\n/g, '<br>');
  document.getElementById('description').innerHTML = inputDescription;

  var arrTem1 = ['inputEnglishName', 'inputProducerEnglishName', 'inputOrigin', 'inputOriginDetail', 'inputBase', 'inputSubtype', 'inputAbv', 'inputProductPackage1', 'inputProductVolume1', 'inputProductPackage2', 'inputProductVolume2', 'inputProductPackage3', 'inputProductVolume3'];
  arrTem1.forEach(item => {
    var itemValue = document.getElementById(item).value;
    var subStringItem = item.substring(5);
    subStringItem = subStringItem.charAt(0).toLowerCase() + subStringItem.substring(1);
    document.getElementById(subStringItem).innerHTML = itemValue;
  });
  
  // 오픈그래프
  // 메인 이미지 URL을 받아서 삽입
  var mainImageOG = document.getElementById('mainImageOG');
  mainImageOG.src = inputMainImageUrl;

  var arrOG = ['inputName', 'inputProducerName', 'inputOrigin', 'inputOriginDetail', 'inputSubtype', 'inputAbv'];
  arrOG.forEach(item => {
    var itemValue = document.getElementById(item).value;
    var subStringItem = item.substring(5);
    // 오픈그래프는 뒤에 OG가 붙음 
    subStringItem = subStringItem.charAt(0).toLowerCase() + subStringItem.substring(1) + "OG";
    document.getElementById(subStringItem).innerHTML = itemValue;
  });

  // 상세 지역 명이 너무 길 때, 사용하려고 만든 거
  document.getElementById('origin2OG').innerHTML = document.getElementById('inputOrigin').value;
  document.getElementById('originDetail2OG').innerHTML = document.getElementById('inputOriginDetail').value;

  // 블로그용 썸네일
  var mainImageBlogThumb = document.getElementById('mainImageBlogThumb');
  mainImageBlogThumb.src = inputMainImageUrl;
};


// 이미지 생성
// ––––––––––––––––––––––––––––––––––––––––––––––––––
function makeTem1(){
  domtoimage.toJpeg(document.getElementById('wineTemplate1'), { width: 1000 })
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'Tem1 ' + inputProducerEnglishName + ' ' + inputEnglishName + '.jpeg';
      link.href = dataUrl;
      link.click();
    });
} 
function makeOG(){
  domtoimage.toJpeg(document.getElementById('opengraph'))
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'OG ' + inputProducerEnglishName + ' ' + inputEnglishName + '.jpeg';
      link.href = dataUrl;
      link.click();
    });
}
function makeImage(){
  makeTem1();
  makeOG();
}

function makeBlogThumb(){
  domtoimage.toJpeg(document.getElementById('blogThumbnail'))
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'Thumbnail ' + inputProducerEnglishName + ' ' + inputEnglishName + '.jpeg';
      link.href = dataUrl;
      link.click();
    });
}
function makeBlogImage(){
  makeBlogThumb();
}

// 리모컨
// ––––––––––––––––––––––––––––––––––––––––––––––––––
function changeCircle(circleName){
  var arrCircle = ['circleTextY', 'circleTextS', 'circleTextL'];
  arrCircle.forEach(item => {
    var upperCaseItem = item;
    var item = document.getElementById(item);
    item.style.display = 'none';

    upperCaseItem = 'btn' + upperCaseItem.charAt(0).toUpperCase() + upperCaseItem.substring(1);

    var upperCaseItem = document.getElementById(upperCaseItem);
    upperCaseItem.classList.remove('on');
  });
  btnCircle = 'btn' + circleName.id.charAt(0).toUpperCase() + circleName.id.substring(1);  
  circleName.style.display = 'block';

  document.getElementById(btnCircle).classList.add('on');
};


function addPackage(num){
  // 템플릿 1
  var p = document.getElementById('package' + num);
  p.classList.add('d-flex');
  p.classList.remove('d-none');

  // 버튼 클래스 추가 및 제거
  var btnAddPackage = document.getElementById('btnAddPackage' + num);
  var btnDelPackage = document.getElementById('btnDelPackage' + num);
  btnAddPackage.classList.add('on');
  btnDelPackage.classList.remove('on');
}
function delPackage(num){
  // 템플릿 1
  var p = document.getElementById('package' + num);
  p.classList.add('d-none');
  p.classList.remove('d-flex');

  // 버튼 클래스 추가 및 제거
  var btnAddPackage = document.getElementById('btnAddPackage' + num);
  var btnDelPackage = document.getElementById('btnDelPackage' + num);
  btnDelPackage.classList.add('on');
  btnAddPackage.classList.remove('on');
}

// 폰트 사이즈 
// ––––––––––––––––––––––––––––––––––––––––––––––––––
function resetFontSize(name, fontSize){
  name.style.fontSize = fontSize + 'px';
}

function fontSize(name, num){
  var fontSize = name.style.fontSize;
  fontSizeSubstring = fontSize.slice(0,2);
  fontSizeSubstring = fontSizeSubstring * 1 + num;
  name.style.fontSize = fontSizeSubstring + 'px';
}

// 스탬프 이동
// ––––––––––––––––––––––––––––––––––––––––––––––––––
var stampTop = -95;
var stampRight = 40;

function moveStamp(direction, num){
  var direction = direction;
  var arr = document.getElementsByClassName('circle-text');
  var arrLength = arr.length;
  var resultArr = new Array();
  for(var i=0; i<arrLength; i++){
    resultArr[i] = arr[i];
  }

  var rArrLength = resultArr.length;
  for(var i=0; i<rArrLength; i++){
    if(direction == 'top') {
      stampTop += num;
      resultArr[i].style.top = stampTop + 'px';
    }
    else if(direction == 'right') {
      stampRight += num;
      resultArr[i].style.right = stampRight + 'px';
    }
  }
}

// 오픈 그래프에 들어가는 지역명이 너무 길어요
// ––––––––––––––––––––––––––––––––––––––––––––––––––
function toLongOrigin(){
  document.getElementById('originOG1').classList.remove('d-flex');
  document.getElementById('originOG2').classList.remove('d-none');
}