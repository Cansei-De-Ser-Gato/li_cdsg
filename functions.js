const CDN_PATH = "https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/";



let theme = [];

theme.init = function(){
    theme.isMobile = window.innerWidth < 990;
    theme.isLogged = window.IS_STORE_ASYNC ? ($.cookie('LI-isUserLogged') == "false" ? false : true) : ($('.bem-vindo > span').text() != "identifique-se" ? true : false);
    theme.logo = $('<div></div>').append($('#cabecalho .logo').clone()).html();
    theme.storePhone = $('.barra-inicial .canais-contato .icon-phone').parent().text().replace('Telefone: ','').trim();
    theme.storeSkype = $('.barra-inicial .canais-contato .fa-skype').parent().text().replace('Skype: ','').trim();
    theme.storeWhatsapp = $('.barra-inicial .canais-contato .fa-whatsapp').parent().text().replace('Whatsapp: ','').trim();
    theme.storeMail = "";
    theme.currentPage = $('body').attr('class').split(' ')[0].trim();
    theme.searchForm = $('<div></div>').append($('#cabecalho .busca #form-buscar').clone()).html();
    theme.socialIcons = $('<div></div>').append($('.barra-inicial .lista-redes a').clone()).html();
    theme.footerSeals = $('<div></div>').append($('#rodape .selos').clone()).html();
    theme.footerPayments = $('<div></div>').append($('#rodape .bandeiras-pagamento').clone()).html();
    theme.footerGateways = $('<div></div>').append($('#rodape .gateways-rodape').clone()).html();
    theme.headerMenu = $('<div></div>').append($('.menu.superior').clone()).html();
    theme.footerCategories = $('<div></div>').append($('.links-rodape-categorias > ul').clone()).html();
    theme.footerPages = $('<div></div>').append($('.links-rodape-paginas > ul').clone()).html();
    theme.headerCart = $('<div></div>').append($('#cabecalho .carrinho').clone()).html();

    theme.icon = {};
    theme.icon.sideCartClose = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></g></g></svg>';
    theme.icon.cart = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10H21M3 10L5 20H19L21 10M3 10L9 4M21 10L15 4" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    theme.icon.wishlist = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    theme.icon.search = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25V18.75C15.0563 18.75 18.75 15.0563 18.75 10.5H17.25ZM10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5H2.25C2.25 15.0563 5.94365 18.75 10.5 18.75V17.25ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75V2.25C5.94365 2.25 2.25 5.94365 2.25 10.5H3.75ZM10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5H18.75C18.75 5.94365 15.0563 2.25 10.5 2.25V3.75ZM20.5303 19.4697L16.3428 15.2821L15.2821 16.3428L19.4697 20.5303L20.5303 19.4697Z" fill="black"/></svg>';
    theme.icon.account = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    theme.icon.newsletter = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="email"><rect width="24" height="24" opacity="0"/><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"/></g></g></svg>';
    theme.icon.filter = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="funnel"><rect width="24" height="24" opacity="0"/><path d="M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49 1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9 1 1 0 0 1-.41.1zm-3-4.54l2 1.53v-4.55A1 1 0 0 1 13 14l4.3-8H6.64l4.13 8a1 1 0 0 1 .11.46z"/></g></g></svg>';
    theme.icon.seeMore = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="eye"><rect width="24" height="24" opacity="0"/><path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z"/><path d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></g></g></svg>';
    theme.icon.close = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>';
}


theme.generateContent = [];

theme.generateContent.menu = function(){
    return theme.headerMenu;
};

theme.generateContent.logo = function(prop){
    let el = $(theme.logo);

    if(prop == 'fixed'){
        el.find('img').attr('src',CDN_PATH + 'logo_fixo.svg');
    }else{
        el.find('img').attr('src',CDN_PATH + 'logo_full.svg');    
    }

    return el;
};

theme.generateContent.logo_fixed = function(){
    let el = $(theme.logo);
    el.find('img').attr('src',CDN_PATH + 'logo_fixo.svg');
    return el;
};

theme.generateContent.menu_extra = function(){
    //let el = $('<div class="row align-items-center"></div>');
    let el = $('<nav class="d-flex align-items-center row"></nav>');
    el.append('<div class="col px-md-4"><a href="#">Blog</a></div>');
    el.append('<div class="col px-md-4"><a href="#">Atendimento</a></div>');
    //el.append(nav);
    return el.prop('outerHTML');
};

theme.generateContent.functions = function(){
    let el = $('<div class="row align-items-center"></div>');
    el.append('<div class="col"><button type="button"><img src="'+ CDN_PATH + 'search.svg' +'"/></button></div>');
    el.append('<div class="col"><a href="#"><img src="'+ CDN_PATH + 'wishlist.svg' +'"/></a></div>');
    el.append('<div class="col"><a href="#"><img src="'+ CDN_PATH + 'user.svg' +'"/></a></div>');
    el.append('<div class="col">'+ theme.headerCart +'</a></div>');
    el.find('.carrinho .icon-shopping-cart').before('<img src="'+ CDN_PATH + 'cart.svg' +'"/>');
    el.find('.carrinho .icon-shopping-cart').remove();
    return el.prop('outerHTML');
};



theme.build = [];

theme.build.header = function(){
    $('#cabecalho').html(''+
    '<div id="cdsg_header">'+
        '<div id="cdsg_header_fixed">' +
            '<div class="container py-md-3">' +
                '<div class="row d-flex align-items-center">' +
                    '<div class="col-5">' +
                        '<div apx_load="menu" class="cdsg_menu invert"></div>' +
                    '</div>' +
                    '<div class="col-2 justify-content-center d-flex">' +
                        '<div apx_load="logo" apx_load_prop="fixed" class="cdsg_logo"></div>' +
                    '</div>' +
                    '<div class="col-5 justify-content-end d-flex align-items-center">' +
                        '<div apx_load="menu_extra" class="cdsg_menu invert me-md-5"></div>' +
                        '<div apx_load="functions" apx_load_prop="invert" class="cdsg_functions ' +'invert"></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +

        '<div id="cdsg_header_default">' +
            '<div class="container py-md-4">' +
                '<div class="row d-flex align-items-center">' +
                    '<div class="col-5">' +
                        '<div apx_load="menu" class="cdsg_menu"></div>' +
                    '</div>' +
                    '<div class="col-2 justify-content-center d-flex">' +
                        '<div apx_load="logo" class="cdsg_logo"></div>' +
                    '</div>' +
                    '<div class="col-5 justify-content-end d-flex align-items-center">' +
                        '<div apx_load="menu_extra" class="cdsg_menu me-md-5"></div>' +
                        '<div apx_load="functions" class="cdsg_functions"></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>'+
    '</div>');

    let header = $('#cdsg_header_default');
    let header_fixed = $('#cdsg_header_fixed');

    $(window).on('resize scroll', function() {
        if (header.isInViewport()) {
            header_fixed.removeClass('visible');
        } else {
            header_fixed.addClass('visible');
        }
    });
   
};

theme.build.footer = function(){
    $('#rodape').prepend('<div id="cdsg_footer"></div>');
    $('#cdsg_footer').load('http://127.0.0.1:5500/footer.html');
   
};

theme.functions = [];


$(document).ready(function(){
    theme.init();

    theme.build.header();
    theme.build.footer();
       
});

$(window).load(function(){
    $('[apx_load]').each(function(){
        let load = $(this).attr('apx_load');

        try{
            if(theme.generateContent[load]){
                $(this).append(theme.generateContent[load]($(this).attr('apx_load_prop') ? $(this).attr('apx_load_prop') : ''));
            }
        }catch(e){
            console.log(e);
        }        
    });
});

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};