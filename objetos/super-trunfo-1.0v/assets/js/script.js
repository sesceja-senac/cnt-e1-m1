$('.iniciar').click(function(){
    $('.tela-inicial').fadeOut()
})
$("#modalCorreto1").on("hidden.bs.modal", function () {
    $('.tela-1').fadeOut()
    window.setTimeout(function(){
        $('.tela-2').fadeIn()
    }, 1000)
});
$("#modalCorreto2").on("hidden.bs.modal", function () {
    $('.tela-2').fadeOut()
    window.setTimeout(function(){
        $('.tela-3').fadeIn()
    }, 1000)
});
$("#modalCorreto3").on("hidden.bs.modal", function () {
    $('.tela-3').fadeOut()
    window.setTimeout(function(){
        $('.tela-4').fadeIn()
    }, 1000)
});
$("#modalCorreto4").on("hidden.bs.modal", function () {
    $('.tela-4').fadeOut()
    window.setTimeout(function(){
        $('.tela-5').fadeIn()
    }, 1000)
});
$("#modalCorreto5").on("hidden.bs.modal", function () {
    $('.tela-5').fadeOut()
    window.setTimeout(function(){
        $('.tela-6').fadeIn()
    }, 1000)
});
$("#modalCorreto6").on("hidden.bs.modal", function () {
    $('.tela-6').fadeOut()
    window.setTimeout(function(){
        $('.tela-7').fadeIn()
    }, 1000)
});
$("#modalCorreto7").on("hidden.bs.modal", function () {
    $('.tela-7').fadeOut()
    window.setTimeout(function(){
        $('.tela-8').fadeIn()
        $('.btn-info').fadeOut()
    }, 1000)
});

$('.restart').click(function(){
    $('.tela-8').fadeOut()
    window.setTimeout(function(){
        $('.tela-inicial').fadeIn()
        $('.tela-1').fadeIn()
        $('.btn-info').fadeIn()
    }, 1000)
})

$('.btn-info').click(function(){
    if($('.opcao').hasClass('flip')){
        $('.opcao').removeClass('flip')
    }else{
        $('.opcao').addClass('flip')
    }
})