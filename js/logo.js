window.onload = function(){
  function backPlate(color){
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(190, 0);
    ctx.lineTo(175, 195);
    ctx.lineTo(95, 215);
    ctx.lineTo(16, 195);
    ctx.fillStyle = color;
    ctx.fill();
  }
  function innerPlate(color){
    ctx.beginPath();
    ctx.moveTo(95,15);
    ctx.lineTo(173,15);
    ctx.lineTo(160,182);
    ctx.lineTo(95,199);
    ctx.fillStyle = color;
    ctx.fill();
  }
  var css3 = document.getElementById('css3');
  //check it canvas is avail & the get context method is avail.
  if(css3 && css3.getContext){
    var ctx = css3.getContext("2d");
    if(ctx){
      //backplate
      backPlate('#2260b3');
      //Inner Plate
      innerPlate("#349cd6");
      //3
      ctx.beginPath();
      ctx.moveTo(36,39);
      ctx.lineTo(155,39);
      ctx.lineTo(154,62);
      ctx.lineTo(96,87);
      ctx.lineTo(151,87);
      ctx.lineTo(146,160);
      ctx.lineTo(95,175);
      ctx.lineTo(46,160);
      ctx.lineTo(43,124);
      ctx.lineTo(68,124);
      ctx.lineTo(69,141);
      ctx.lineTo(95,150);
      ctx.lineTo(123,141);
      ctx.lineTo(124,110);
      ctx.lineTo(42,110);
      ctx.lineTo(40,87);
      ctx.lineTo(95,63);
      ctx.lineTo(38,63);
      ctx.fillStyle = "white";
      ctx.fill();

    }
  }
  var html5 = document.getElementById('html5');
  //check it canvas is avail & the get context method is avail.
  if(html5 && html5.getContext){
    var ctx = html5.getContext("2d");
    if(ctx){
      //backplate
      backPlate('#e74c17');
      //Inner Plate
      innerPlate("#f36516");
      //3
      ctx.beginPath();
      ctx.moveTo(36,39);
      ctx.lineTo(155,39);
      ctx.lineTo(154,62);
      ctx.lineTo(63,62);
      ctx.lineTo(65,88);
      ctx.lineTo(151,87);
      ctx.lineTo(146,160);
      ctx.lineTo(95,175);
      ctx.lineTo(46,160);
      ctx.lineTo(43,124);
      ctx.lineTo(68,124);
      ctx.lineTo(69,141);
      ctx.lineTo(95,150);
      ctx.lineTo(123,141);
      ctx.lineTo(124,110);
      ctx.lineTo(42,110);
      ctx.lineTo(40,87);
      ctx.lineTo(38,63);
      ctx.fillStyle = "white";
      ctx.fill();
    }
  }

  var js = document.getElementById('js');
  //check it canvas is avail & the get context method is avail.
  if(js && js.getContext){
    var ctx = js.getContext("2d");
    if(ctx){
      //backplate
      backPlate('#e7a40a');
      //Inner Plate
      innerPlate("#f2c000");
      //3
      ctx.beginPath();
      ctx.moveTo(36,51);
      ctx.lineTo(95,31);
      ctx.lineTo(155,51);
      ctx.lineTo(152,84);
      ctx.lineTo(126,84);
      ctx.lineTo(127,71);
      ctx.lineTo(95,60);
      ctx.lineTo(64,71);
      ctx.lineTo(66,100);
      ctx.lineTo(151,100);
      ctx.lineTo(146,165);
      ctx.lineTo(95,181);
      ctx.lineTo(46,165);
      ctx.lineTo(44,137);
      ctx.lineTo(68,137);
      ctx.lineTo(69,146);
      ctx.lineTo(95,155);
      ctx.lineTo(123,146);
      ctx.lineTo(124,123);
      ctx.lineTo(43,123);
      ctx.fillStyle = "white";
      ctx.fill();
    }
  }
}
