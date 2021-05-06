function onColorRangeChange(){

  let pE = document.getElementById("pColor");
  let rE = document.getElementById("redSlider");
  let gE = document.getElementById("greenSlider");
  let bE = document.getElementById("blueSlider");

  let rgbprop = "rgb("+rE.value+", "+gE.value+", "+bE.value+")";
  console.log(rgbprop);

  var  outputR = document.querySelector('#outputR'),
       outputG = document.querySelector('#outputG'),
       outputB = document.querySelector('#outputB');

  outputR.value=rE.value;
  outputG.value=gE.value;
  outputB.value=bE.value;

  pE.innerHTML = rgbprop;
  pE.style.backgroundColor = rgbprop;
}
