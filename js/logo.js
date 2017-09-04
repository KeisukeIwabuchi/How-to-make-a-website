window.onload = function(){
  function backPlate(color, mult){
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(190*mult, 0*mult);
    ctx.lineTo(175*mult, 195*mult);
    ctx.lineTo(95*mult, 215*mult);
    ctx.lineTo(16*mult, 195*mult);
    ctx.fillStyle = color;
    ctx.fill();
  }

  function innerPlate(color, mult){
    ctx.beginPath();
    ctx.moveTo(95*mult,15*mult);
    ctx.lineTo(173*mult,15*mult);
    ctx.lineTo(160*mult,182*mult);
    ctx.lineTo(95*mult,199*mult);
    ctx.fillStyle = color;
    ctx.fill();
  }

  function makeHTL5(mult) { //default 190px x 220px
    backPlate('#e74c17', mult);
    innerPlate('#f36516', mult);

    ctx.beginPath();
    ctx.moveTo(36 * mult, 39 * mult);
    ctx.lineTo(155 * mult, 39 * mult);
    ctx.lineTo(154 * mult, 62 * mult);
    ctx.lineTo(63 * mult, 62 * mult);
    ctx.lineTo(65 * mult, 88 * mult);
    ctx.lineTo(151 * mult, 87 * mult);
    ctx.lineTo(146 * mult, 160 * mult);
    ctx.lineTo(95 * mult, 175 * mult);
    ctx.lineTo(46 * mult, 160 * mult);
    ctx.lineTo(43 * mult, 124 * mult);
    ctx.lineTo(68 * mult, 124 * mult);
    ctx.lineTo(69 * mult, 141 * mult);
    ctx.lineTo(95 * mult, 150 * mult);
    ctx.lineTo(123 * mult, 141 * mult);
    ctx.lineTo(124 * mult, 110 * mult);
    ctx.lineTo(42 * mult, 110 * mult);
    ctx.lineTo(40 * mult, 87 * mult);
    ctx.lineTo(38 * mult, 63 * mult);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  function makeCSS3(mult) { //default 190px x 220px
    backPlate('#2260b3', mult);
    innerPlate('#349cd6', mult);

    ctx.beginPath();
    ctx.moveTo(36 * mult, 39 * mult);
    ctx.lineTo(155 * mult, 39 * mult);
    ctx.lineTo(154 * mult, 62 * mult);
    ctx.lineTo(96 * mult, 87 * mult);
    ctx.lineTo(151 * mult, 87 * mult);
    ctx.lineTo(146 * mult, 160 * mult);
    ctx.lineTo(95 * mult, 175 * mult);
    ctx.lineTo(46 * mult, 160 * mult);
    ctx.lineTo(43 * mult, 124 * mult);
    ctx.lineTo(68 * mult, 124 * mult);
    ctx.lineTo(69 * mult, 141 * mult);
    ctx.lineTo(95 * mult, 150 * mult);
    ctx.lineTo(123 * mult, 141 * mult);
    ctx.lineTo(124 * mult, 110 * mult);
    ctx.lineTo(42 * mult, 110 * mult);
    ctx.lineTo(40 * mult, 87 * mult);
    ctx.lineTo(95 * mult, 63 * mult);
    ctx.lineTo(38 * mult, 63 * mult);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  function makeJS(mult) { //default 190px x 220px
    backPlate('#e7a40a', mult);
    innerPlate('#f2c000', mult);

    ctx.beginPath();
    ctx.moveTo(36 * mult, 51 * mult);
    ctx.lineTo(95 * mult, 31 * mult);
    ctx.lineTo(155 * mult, 51 * mult);
    ctx.lineTo(152 * mult, 84 * mult);
    ctx.lineTo(126 * mult, 84 * mult);
    ctx.lineTo(127 * mult, 71 * mult);
    ctx.lineTo(95 * mult, 60 * mult);
    ctx.lineTo(64 * mult, 71 * mult);
    ctx.lineTo(66 * mult, 100 * mult);
    ctx.lineTo(151 * mult, 100 * mult);
    ctx.lineTo(146 * mult, 165 * mult);
    ctx.lineTo(95 * mult, 181 * mult);
    ctx.lineTo(46 * mult, 165 * mult);
    ctx.lineTo(44 * mult, 137 * mult);
    ctx.lineTo(68 * mult, 137 * mult);
    ctx.lineTo(69 * mult, 146 * mult);
    ctx.lineTo(95 * mult, 155 * mult);
    ctx.lineTo(123 * mult, 146 * mult);
    ctx.lineTo(124 * mult, 123 * mult);
    ctx.lineTo(43 * mult, 123 * mult);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  var html5 = document.getElementById('html5');
  if(html5 && html5.getContext){
    var ctx = html5.getContext('2d');
    if(ctx) makeHTL5(0.3);
  }

  var css3 = document.getElementById('css3');
  if(css3 && css3.getContext){
    var ctx = css3.getContext('2d');
    if(ctx) makeCSS3(0.3);
  }

  var js = document.getElementById('js');
  if(js && js.getContext){
    var ctx = js.getContext('2d');
    if(ctx) makeJS(0.3);
  }
}
