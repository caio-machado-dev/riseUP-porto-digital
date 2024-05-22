var $btnAumentar = $("#btnAumentar");
var $btnReset = $("#btnReset");
var $btnDiminuir = $("#btnDiminuir");
var $elemento = $("body").find("*");
var fonts = [];
var reset = [];

(function obterTamanhoFonte() {
  for (var i = 0; i < $elemento.length; i++) {
    fonts.push(parseFloat($elemento.eq(i).css('font-size')));
    reset.push(parseFloat($elemento.eq(i).css('font-size')));
  }
})()

$btnAumentar.on('click', function() {
  for (var i = 0; i < $elemento.length; i++) {
    ++fonts[i];
    $elemento.eq(i).css('font-size', fonts[i]);
  }
});

$btnDiminuir.on('click', function() {
  for (var i = 0; i < $elemento.length; i++) {
    --fonts[i];
    $elemento.eq(i).css('font-size', fonts[i]);
  }
});

$btnReset.on('click', function() {
  for (var i = 0; i < $elemento.length; i++) {
    $elemento.eq(i).css('font-size', reset[i]);
    fonts[i] = reset[i];
  }
});