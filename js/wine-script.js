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
    return document.getElementById(subStringItem).innerHTML = itemValue;
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
    return document.getElementById(subStringItem).innerHTML = itemValue;
  });

  // 블로그용 썸네일
  var mainImageBlogThumb = document.getElementById('mainImageBlogThumb');
  mainImageBlogThumb.src = inputMainImageUrl;
};


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