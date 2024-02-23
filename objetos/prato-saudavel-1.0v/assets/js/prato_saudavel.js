$('.tela-3').hide()
$('.tela-4').hide()
$('.tela-5').hide()
$('.modal_ingredientes').hide()
$('.modal_resultado').hide()

$('.start_btn').click(function () {
    $('.tela-1').fadeOut();
    setTimeout(() => {
        $('.tela-2').fadeIn()
    }, 500)
})
const audio = new Audio();
// Lógica do Objeto:
let corretosTotal = 0;
$('.option-e').click(function () {
    audio.setAttribute('src', 'assets/audio/erro.mp3');
    audio.load();
    audio.play();
    telaAtual = $(this).parents('.tela');
    proxTela = $(this).parents('.tela').next();
    telaAtual.fadeOut();
    proxTela.fadeIn();
    if (telaAtual.hasClass('tela-4')) {
        // resultado => (selecionados/corretos)*100
        $('.pontuacao span').text(corretosTotal)
    }
})
$('.option-c').click(function () {
    audio.setAttribute('src', 'assets/audio/acerto.mp3');
    audio.load();
    audio.play();
    corretosTotal++;
    telaAtual = $(this).parents('.tela');
    proxTela = $(this).parents('.tela').next();
    telaAtual.fadeOut();
    proxTela.fadeIn();
    if (telaAtual.hasClass('tela-4')) {
        // resultado => (selecionados/corretos)*100
        $('.pontuacao span').text(corretosTotal)
    }
})
$('.tente_nv').click(function () {
    corretosTotal = 0;
    $('.tela').fadeOut();
    $('.modal_ingredientes').hide();
    $('.modal_resultado').hide();
    setTimeout(() => {
        $('.tela-2').fadeIn();
        $('.tela-1').fadeIn();
    }, 500)
})
$('.ingredientes_btn').click(function () {
    $(this).parents('.tela').children('.modal_ingredientes').fadeIn();
})
$('.modal_cls_btn').click(function () {
    $(this).parents('.modal_ingredientes').fadeOut();
})