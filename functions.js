//EQUAL HEIGHTS
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);

const CDN_PATH = "https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/";
const CMS_PATH = "https://cms-cdsg.up.railway.app/api";

var map;
let theme = [];

theme.settings = [];
theme.functions = [];
theme.pages = [];
theme.resources = [];

theme.lang = [];
theme.lang.products = [];

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
    theme.footerSeals = $('<div></div>').append($('#rodape .selos ul').clone()).html();
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

    theme.resources.json = {};
    theme.resources.json.social = $('.barra-inicial .lista-redes a').map(function(i){
        return {
            name : $(this).find('i').attr('class').replace('icon-','').trim(),
            url : $(this).attr('href')        
        };
    }).get();

    theme.resources.json.categories = $('.menu.superior [class^="categoria-id-"] a').map(function(i){
        return {
            id : $(this).closest('li').attr('class').replace('com-filho','').replace('borda-principal','').trim(),
            vitrine: $(this).closest('li').attr('class').replace('com-filho','').replace('borda-principal','').replace('categoria-id','vitrine').trim(),
            name : $(this).text().trim(),
            url : $(this).attr('href'),
            level : $(this).closest('ul').attr('class').replace('borda-alpha','').trim(),
            parent : !$(this).closest('ul').attr('class').includes('nivel-um') ? $(this).closest('ul').closest('li').attr('class').replace('borda-principal','').replace('com-filho','').trim() : null
        };
    }).get();

    theme.resources.json.pages = $('.links-rodape-paginas a').map(function(i){
        return {
            name : $(this).text().trim(),
            url : $(this).attr('href')        
        };
    }).get();


    $('.banner img').each(function(){
        let trigger = $(this).attr('alt');           
        
        //trigger ICONS
        if(trigger.includes('[vitrine:')){
            let regVitrine = /\[vitrine:(.*?)\]/;
            let regBotao = /\[botao:(.*?)\]/;
            let regOrdem = /\[ordem:(.*?)\]/;
            let regPagina = /\[pagina:(.*?)\]/;
            
            let vitrine = regVitrine.exec(trigger);
            let botao = regBotao.exec(trigger);
            let ordem = regOrdem.exec(trigger);
            let pagina = regPagina.exec(trigger);

            let removeAfter = $(this).closest('li');            
            if(!ordem && !pagina && vitrine && botao && theme.currentPage == "pagina-inicial"){
                let target = theme.resources.json.categories.find(el => el.name == vitrine[1]);
                if(target){
                    target = target.vitrine;
                    console.log(target);
                    $('.' + target).next('[data-produtos-linha]').wrap('<div class="col-12 col-md-6 px-0"></div>')
                    $('.' + target).next('.col-md-6').wrap('<div class="banner_'+ target + ' banner_vitrine_home row align-items-center"></div>');
                    $('.banner_' + target).prepend('<div class="col-12 col-md-6 cdsg_list_side_banner justify-content-center"></div>');
                    $(this).closest('a').append('<button type="button">'+ botao[1] +'</button>');
                    $(this).closest('a').appendTo('.banner_' + target + ' .cdsg_list_side_banner');
                    $('.banner_' + target + ' .cdsg_list_side_banner').append('');
                    $('.' + target).remove();
                    removeAfter.remove();   
                }

            }           
        }

        //REDUCE IMAGES WHEN HAS A MOBILE VIEW
        if(!trigger.includes('[mobile]') && theme.isMobile){
            $(this).closest('li').remove();                        
        }
        if(trigger.includes('[mobile]') && !theme.isMobile){
            $(this).closest('li').remove();                        
        }
    });

    if($('.banner.cheio img').length  == 0){
        $('.banner.cheio').remove()
    }
    if($('.secao-banners img').length  == 0){
        $('.secao-banners').remove()
    }
}


theme.generateContent = [];

theme.generateContent.side_options = function(prop,oObj){
    let el = $(`<div class="d-flex flex-wrap"> <div class="col-4 px-1"> <a href="/conta/pedidos/listar"> <div class="image"> <img src="${CDN_PATH + 'ajuda_pedidos.svg'}"/> </div><b>Meus pedidos</b> </a> </div><div class="col-4 px-1"> <a href="/pagina/encontre-uma-loja.html"> <div class="image"> <img src="${CDN_PATH + 'ajuda_loja.svg'}"/> </div><b>Encontrar loja</b> </a> </div><div class="col-4 px-1"> <a href="https://wa.me/5511916588376" target="_blank"> <div class="image"> <img src="${CDN_PATH + 'ajuda_whats.svg'}"/> </div><b>Whats Chico</b> </a> </div><div class="col-4 px-1"> <a href="/pagina/envio-entregas-e-frete.html"> <div class="image"> <img src="${CDN_PATH + 'ajuda_entrega.svg'}"/> </div><b>Entrega e frete</b> </a> </div><div class="col-4 px-1"> <a href="/pagina/trocas-e-devolucoes.html"> <div class="image"> <img src="${CDN_PATH + 'ajuda_troca.svg'}"/> </div><b>Trocas e devoluções</b> </a> </div><div class="col-4 px-1"> <a href="/pagina/contato.html"> <div class="image"> <img src="${CDN_PATH + 'ajuda_email.svg'}"/> </div><b>Mande um oi</b> </a> </div><div class="col-4 px-1"> <a href="/pagina/pagamento.html"> <div class="image"> <img src="${CDN_PATH + 'ajuda_pagamento.svg'}"/> </div><b>Pagamento</b> </a> </div></div>`);
    return el.prop('outerHTML');
}

theme.generateContent.form_rastreio = function(prop,oObj){
    let el = $(`<form action="" class="cdsg_form_rastreio"><input type="text" placeholder="Digite o código de rastreio..."><button type="submit">Buscar</button></form>`);
    return el.prop('outerHTML');
}

theme.generateContent.categoryIconList = function(prop, oObj){
    let cms_categories = sessionStorage.getItem('cms_categories');
    
    if(cms_categories){   
        cms_categories = JSON.parse(cms_categories);        
        let el = $('<div class="items"></div>');
        let category_main = theme.resources.json.categories.find(el => el.name == prop);
        let category_id = category_main && category_main.id ? category_main.id : false;
        let categories = false;
        
        if(category_id){
            categories = theme.resources.json.categories.filter(el => el.parent == category_id);
            if(categories){
                $.each(categories, function(k_, i_){
                    console.log(i_.name.toLowerCase().trim());
                    let q = cms_categories.find(el => el.attributes.title.toLowerCase().trim() == i_.name.toLowerCase().trim());
                    console.log('ixiii',q);
                    let icon = q && q.attributes && q.attributes.icon && q.attributes.icon.data && q.attributes.icon.data[0] && q.attributes.icon.data[0].attributes.url || 'https://via.placeholder.com/111x111'; 
                    let item = $('<a href="'+ i_.url+'">'+ i_.name +'</a>');
                    
                    item.prepend('<div class="image"><img src="'+ icon +'"/></div>');
                    el.append(item);
                });
            }
        }

        return el.prop('outerHTML');
    }else{
        $.ajax({
            url: CMS_PATH + "/categories?populate=deep",   
            method: 'GET'         
        }).done(function(response){
            if(response.data){
                cms_categories = response.data;
                sessionStorage.setItem('cms_categories',JSON.stringify(cms_categories));
                theme.generateContent.categoryIconList(prop,oObj);
            }
        });
    }
    
};

theme.generateContent.menu = function(prop, oObj){
    let menu = $(theme.headerMenu);
    menu.find('.com-filho').append('<i></i>');
    return menu.prop('outerHTML');
};

theme.generateContent.logo = function(prop, oObj){
    let el = $(theme.logo);

    if(prop == 'fixed'){
        el.find('img').attr('src',CDN_PATH + 'logo_fixo.svg');
    }else{
        el.find('img').attr('src',CDN_PATH + 'logo_full.svg');    
    }

    return el;
};

theme.generateContent.checkout_steps = function(prop, oObj){
    el = $('<div class="d-flex align-items-center"></div>')
    el.append('<div class="item '+ ($('.pagina-carrinho:not(.carrinho-checkout)').length > 0 ? 'active' : 'past') +'"><span><i></i></span><strong>Carrinho</strong></div>');
    el.append('<div class="item '+ ($('.pagina-carrinho.carrinho-checkout').length > 0 ? 'active' : '') +'"><span><i></i></span><strong>Identificação</strong></div>');
    el.append('<div class="item "><span><i></i></span><strong>Entrega</strong></div>');
    el.append('<div class="item "><span><i></i></span><strong>Pagamento</strong></div>');
    
    return el;
};

theme.generateContent.load_img = function(prop, oObj){
    let el = $('<img src="'+ CDN_PATH + prop +'"/>');

    return el;
};

theme.generateContent.social = function(prop, oObj){
    let el = $('<div>'+ (prop == "mobile" ? '' : 'Nos acompanhe ')+'<div>'+ theme.socialIcons +'</div></div>');
    return el;
};


theme.generateContent.logo_fixed = function(prop, oObj){
    let el = $(theme.logo);
    el.find('img').attr('src',CDN_PATH + 'logo_fixo.svg');
    return el;
};

theme.generateContent.menu_extra = function(prop, oObj){
    let el;
    if(prop == 'mobile'){
        el = $('<nav class="d-flex flex-column"></nav>');
        el.append('<div class="col"><a href="/pagina/dmf.html" target=_blank>Dúvidas?</a></div>');
        el.append('<div class="col"><a href="/pagina/quem-somos.html" target=_blank>Quem Somos</a></div>');
        el.append('<div class="col"><a href="/pagina/contato.html">Atendimento</a></div>');
        el.append('<div class="col"><a href="https://blog.canseidesergato.com/" target=_blank>Blog</a></div>');        
    }else{
        el = $('<nav class="d-flex align-items-center row"></nav>');
        el.append('<div class="col px-md-4"><a href="https://blog.canseidesergato.com/" target=_blank>Blog</a></div>');
        el.append('<div class="col px-md-4"><a href="/pagina/contato.html">Atendimento</a></div>');
    }
    return el.prop('outerHTML');
};


theme.generateContent.footer_payments = function(prop, oObj){
    return theme.footerPayments;
};
theme.generateContent.footer_secure = function(prop, oObj){
    return theme.footerSeals;
};
theme.generateContent.contact_phone = function(prop, oObj){
    return 'Telefone: <b>' + theme.storePhone + '</b>';
};
theme.generateContent.contact_hour = function(prop, oObj){
    return 'Seg a Sex - 9h às 18h.';
};
theme.generateContent.contact_mail = function(prop, oObj){
    return '<a href="">Mande um oi aqui</a>';
};

theme.generateContent.contact_form = function(prop,oObj){
    return '<form id="apx_contact_form" action="/contato/popup/" method="post" class="form-horizontal">' +
    '<div class="row">' +
        '<div class="col-12">' +
          '<div class="control-group">' +
            '<label class="control-label">Nome</label>' +
            '<div class="controls">' +
              '<input id="id_nome" maxlength="100" name="nome" type="text">' +
            '</div>' +
          '</div>' +
          '<div class="control-group">' +
            '<label class="control-label">E-mail</label>' +
            '<div class="controls">' +
              '<input id="id_email" maxlength="128" name="email" type="text">' +
            '</div>' +
          '</div>' +
          '<div class="control-group">' +
            '<label class="control-label">Telefone</label>' +
            '<div class="controls">' +
              '<input class="input-telefone" id="id_telefone" name="telefone" type="text" maxlength="15">' +
            '</div>' +
          '</div>' +
          '<div class="control-group">' +
            '<label class="control-label">Nº do pedido</label>' +
            '<div class="controls">' +
              '<input id="id_numero_pedido" name="numero_pedido" type="text">' +
            '</div>' +
          '</div>' +
          '<div class="control-group">' +
            '<label class="control-label">Mensagem</label>' +
            '<div class="controls">' +
              '<textarea cols="40" id="id_mensagem" name="mensagem" rows="6"></textarea>' +
            '</div>' +
          '</div>' +
          '<div class="control-group ">' +
            '<script src="https://www.google.com/recaptcha/api.js?hl=pt"></script>' +
              '<div class="g-recaptcha" data-sitekey="6LeKDhIUAAAAAA1o_Di799ubZ8yvZY-gmg7fsJRr" data-lang="pt" data-theme="light">' +
              '</div>' +
            '<noscript>' +
              '<div style="width: 302px; height: 352px;">' +
                '<div style="width: 302px; height: 352px; position: relative;">' +
                  '<div style="width: 302px; height: 352px; position: absolute;">' +
                    '<iframe src="https://www.google.com/recaptcha/api/fallback?k=6LeKDhIUAAAAAA1o_Di799ubZ8yvZY-gmg7fsJRr" frameborder="0" scrolling="no" style="width: 302px; height:352px; border-style: none;"></iframe>' +
                  '</div>' +
                  '<div style="width: 250px; height: 80px; position: absolute; border-style:none;bottom: 21px; left: 25px; margin: 0px; padding: 0px; right: 25px;">'+
                    '<textarea id="g-recaptcha-response" name="g-recaptcha-response" class="recaptcha_challenge_field" style="width: 250px; height: 80px; border: 1px solid #c1c1c1;margin: 0px; padding: 0px; resize: none;" value=""></textarea>' +
                    '<input type=hidden name="recaptcha_response_field" value="manual_challenge" />' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</noscript>' +
          '</div>' +
          '<div class="control-group">' +
            '<input id="id_hostname" name="hostname" type="hidden">' +
            '<div class="controls">' +
              '<button type="submit" class="botao principal pull-right">Enviar</button>' +
              '<a class="botao pull-right" data-dismiss="modal" aria-hidden="true">Fechar</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</form>' 
};

theme.generateContent.find_where_form = function(prop, oObj){
    let el = $('<form action=""><div class="d-flex w-100"><input type="text" placeholder="Informe seu CEP ou Cidade" required minlength="5" maxlength="20"><button type="submit">Buscar</button></div></form>');
    return el;
};

theme.generateContent.menu_footer = function(prop, oObj){
    let el = $('<ul></ul>');
    if(prop == "DÚVIDAS?"){
        for(let i = 1; i <= theme.resources.json.pages.length; i++){
            if(theme.resources.json.pages[i].name.includes('O CANSEI DE SER GATO')){
                i = theme.resources.json.pages.length
            }else{
                el.append('<li><a href="'+ theme.resources.json.pages[i].url +'">'+ theme.resources.json.pages[i].name +'</a></li>')
            }
        }
    }
    if(prop == "O CANSEI DE SER GATO"){
        let i = theme.resources.json.pages.findIndex(el => el.name == '[O CANSEI DE SER GATO]');
        if(i !== -1){
            let pages = theme.resources.json.pages.slice(i + 1, theme.resources.json.pages.length);
            console.log(pages)
            for(let i = 0; i <= pages.length; i++){
                if(pages[i]){
                    el.append('<li><a href="'+ pages[i].url +'">'+ pages[i].name +'</a></li>');
                }
            }
        }
        
    }
    return el.prop('outerHTML');
};

theme.generateContent.functions = function(prop, oObj){
    let el = $('<div class="row align-items-center"></div>');

    if(prop == "mobile"){
        el.append('<div class="col-auto"><button class="cdsg_menu_trigger" type="button"><img src="'+ CDN_PATH + 'hamburg.svg' +'"/></button></div>');
        el.append('<div class="col-auto"><button class="cdsg_search_trigger" type="button"><img src="'+ CDN_PATH + 'search.svg' +'"/></button><div apx_load="search"></div></div>');
    }else{
        el.append('<div class="col d-none d-md-block"><button class="cdsg_search_trigger" type="button"><img src="'+ CDN_PATH + 'search.svg' +'"/></button><div apx_load="search"></div></div>');
        el.append('<div class="col d-none d-md-block"><a href="/conta/favorito/listar"><img src="'+ CDN_PATH + 'wishlist.svg' +'"/></a></div>');
        el.append('<div class="col"><a href="/conta/index"><img src="'+ CDN_PATH + 'user.svg' +'"/></a></div>');
        el.append('<div class="col">'+ theme.headerCart +'</a></div>');
        el.find('.carrinho .icon-shopping-cart').before('<img src="'+ CDN_PATH + 'cart.svg' +'"/>');
        el.find('.carrinho .icon-shopping-cart').remove();
    }
    return el.prop('outerHTML');
};

theme.generateContent.search = function(prop, oObj){
    let el = $('<div class="container"><button class="cdsg_search_trigger" type="button"></div>');
    el.append('<div class="cdsg_search_form"><form id="form-buscar" action="/buscar" method="get"><button class="botao botao-busca" aria-label="Buscar"><img src="'+ CDN_PATH + 'search_green.svg' +'"/></button><input id="auto-complete" type="text" name="q" placeholder="O que procuras, humano?" value="" autocomplete="off" maxlength="255" class="ui-autocomplete-input"><button type="button" class="clear_list"></button></form></div>');
    el.append('<div class="cdsg_results"> <div class="row"> <div class="col-12 results-products"> <div class="row justify-content-between align-items-center count"></div><div class="row list"></div></div><div class="d-none col-12 results-blog-posts"> <div class="row count"></div><div class="row list"></div></div></div></div>');
    el.append('<div class="cdsg_suggestion"></div>');
    
    return el.prop('outerHTML');
};

theme.settings.instagramToken = "IGQVJYZAVZAvaU85MjM0ZAFZA5aFR6YTVVckRzUnVjX1dHN3dzSm1ncjVrbjB0ZA0ZAsMm5zcnpGTG96eTBVM2p2cm1OZAk94b2JrVk1VdDU5czhCM0kydHJGcFpaSTM1N0FucDZAvRWpCcHhYeHB6Rk1BTlE2YgZDZD";
theme.generateContent.instafeed = function(prop, oObj){
    let el = $('<div class=""></div>');
    let instafeed = sessionStorage.getItem('instafeed');
    if(instafeed){    
        instafeed = JSON.parse(instafeed);        
        el.append(theme.functions.instafeed(instafeed));
        oObj.html(el.prop('outerHTML'));
    }else{
        
        $.ajax({
            //url: 'https://graph.instagram.com/me/media?access_token='+ theme.settings.instagramToken +'&fields=media_url,media_type,caption,permalink',   
            url: CMS_PATH + "/testimonials",   
            method: 'GET'         
        }).done(function(response){
            if(response.data){
                instafeed = response.data;
                sessionStorage.setItem('instafeed',JSON.stringify(instafeed));
                theme.generateContent.instafeed(prop,oObj);
            }
        });
    } 
}

theme.functions.accountWishlist = function(){
    let sessionAccount = sessionStorage.getItem('account') && JSON.parse(sessionStorage.getItem('account'));
    console.log(sessionAccount);
}
theme.account;
theme.functions.sessionData = function(){
    let account = {};

    let sessionAccount = sessionStorage.getItem('account') && JSON.parse(sessionStorage.getItem('account'));

    account.isLogged = $.cookie('LI-isUserLogged') === "false" ? false : true;
    account.userName = $.cookie('LI-UserLoggedName') ? $.cookie('LI-UserLoggedName').split(' ')[0] : 'Visitante';
    
    
    if(account.isLogged){
        //if(!sessionAccount.gender){
            $.ajax({
                url: "/conta/editar",   
                method: 'GET'         
            }).done(function(response){
                let body = $(response);
                try{
                    account.gender = body.find('#id_sexo').val().trim();
                    sessionStorage.setItem('account',JSON.stringify(account))
                }catch(e){
                    console.log(e)
                }
            });
        //}

        //if(sessionAccount && !sessionAccount.lastOrder){
            $.ajax({
                url: "/conta/pedido/listar",   
                method: 'GET'         
            }).done(function(response){
                let body = $(response);
                account.lastOrder = body.find('.tabela-pedidos tbody tr:first-child').map(function(i){
                    return {
                        numero : $(this).find('td:nth-child(1)').text().trim(),
                        data : $(this).find('td:nth-child(2)').text().trim(),
                        situacao : $(this).find('td:nth-child(3)').text().trim(),
                        valor : $(this).find('td:nth-child(4)').text().trim(),
                    };
                }).get();
                sessionStorage.setItem('account',JSON.stringify(account))
            });
        //}

        //if(sessionAccount && !sessionAccount.wishlist){
            $.ajax({
                url: "/conta/favorito/listar",   
                method: 'GET'         
            }).done(function(response){
                let body = $(response);
                account.wishlist = body.find('table.table tbody tr').map(function(i){
                    return {
                        nome : $(this).find('td:nth-child(1) img').attr('src').trim(),
                        imagem : $(this).find('td:nth-child(2) a').text().trim(),
                        id_produto : $(this).find('td:nth-child(4) a').attr('href').split('/')[5].trim()
                    };
                }).get();            
                sessionStorage.setItem('account',JSON.stringify(account))
            });
        //}else{
            theme.functions.accountWishlist()
        //}
    }else{
        sessionStorage.setItem('account',JSON.stringify(account))
    }    
     
    theme.account = account;
    
    
}


theme.functions.instafeed = function(instafeed){
    //let items = instafeed;
    let items = [
        {
            img: 'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
            url: '#',
            caption: 'Um gatíneo 1'
        },
        {
            img: 'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
            url: '#',
            caption: 'Um gatíneo 2'
        },
        {
            img: 'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
            url: '#',
            caption: 'Um gatíneo 3'
        },
        {
            img: 'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
            url: '#',
            caption: 'Um gatíneo 4'
        },
        {
            img: 'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
            url: '#',
            caption: 'Um gatíneo 5'
        },
        {
            img: 'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
            url: '#',
            caption: 'Um gatíneo 6'
        }
    ]
    let list = $('<div class="cdsg_instafeed row"></div>');
    $.each(items.slice(0,5), function(k_, i_){
        let item = $('<div class="col"></div>');
        if(i_.img){
            let gallery = $('<div class="gallery"></div>');
            
            item.append('<div class="image"><a href="'+ i_.url +'"><img src="'+ i_.img +'"/><span>'+ i_.caption +'</span></a></div>');
        }
        list.append(item);      
    });
    return list;
}


theme.generateContent.testimonials = function(prop, oObj){
    let el = $('<div class="container"></div>');
    let cms_testimonials = prop == "store" ? sessionStorage.getItem('cms_testimonials_store') : sessionStorage.getItem('cms_testimonials_' + prop);
    if(cms_testimonials){    
        cms_testimonials = JSON.parse(cms_testimonials);        
        el.append(theme.functions.testimonials(cms_testimonials));
        oObj.html(el.prop('outerHTML'));
    }else{
        console.log(prop);
        $.ajax({
            url: CMS_PATH + "/testimonials?populate[order][fields]=client_name&filters[type][$eq]=" +  (prop == "store" ? 'store' : 'product&populate=gallery&[filters][product_sku][$eq]=' + prop) + "&sort[0]=publishedAt%3Adesc&sort[1]=rating",   
            method: 'GET'         
        }).done(function(response){
            if(response.data){
                cms_testimonials = response.data;
                sessionStorage.setItem('cms_testimonials_' + (prop == "store" ? "store" : prop),JSON.stringify(cms_testimonials));
                theme.generateContent.testimonials(prop,oObj);
            }
        });
    }
}
theme.functions.testimonials = function(cms_testimonials){
    let items = cms_testimonials;
    let list = $('<div class="slick-me cdsg_testimonials" data-md-cols="1" data-md-infinite="true" data-md-delay="3000" data-md-arrows="true" data-md-dots="true" data-sm-cols="1" data-sm-arrows="true" data-sm-dots="true" data-sm-delay="3000" data-sm-infinite="true" data-sm-slidesToScroll="1" data-md-slidesToScroll="1" data-sm-slidesToShow="1" data-md-slidesToShow="1" data-arrow-image="'+ CDN_PATH + 'arrow_slider_black_l.svg' + '"></div>');
    $.each(items, function(k_, i_){
        let item = $('<div class="item"></div>');
        if(i_.gallery && i_.gallery.data.length > 0){
            let gallery = $('<div class="gallery"></div>');
            $.each(i_.gallery.data, function(k__,i__){
                gallery.append('<a href="'+ i__.attributes.url +'"><img src="'+ i__.attributes.formats.thumbnail.url +'"/></a>')
            });
            item.append(gallery);
        }
        i_.attributes.content != null ? item.append('<p>'+ i_.attributes.content +'</p>') : false;
        i_.attributes.order.data.attributes.client_name != null ? item.append('<strong>'+ i_.attributes.order.data.attributes.client_name +'</strong>') : false;

        list.append(item);      
    });
    return list;
}

theme.generateContent.benefits = function(prop, oObj){
    let el = $('<div class="container"></div>');
    if(prop == "dmf"){
        let dmf = {attributes: {
            background_color: "#1E1E1E",
            text_color: "#FFFFFF",
            createdAt: "2023-06-24T01:23:39.978Z",
            updatedAt: "2023-06-28T21:54:17.927Z",
            publishedAt: "2023-06-24T01:23:47.056Z",
            benefits: [
                {
                    id: 2,
                    text: "Acesso a informações secretas da DMF",
                    image: {
                        data: {
                            id: 6,
                            attributes: {
                                name: "stripe_2.png",
                                alternativeText: null,
                                caption: null,
                                width: 53,
                                height: 53,
                                formats: null,
                                hash: "stripe_2_cd90cf106a",
                                ext: ".png",
                                mime: "image/png",
                                size: 0.71,
                                url: CDN_PATH + "dmf_1.svg",
                                previewUrl: null,
                                provider: "cloudinary",
                                provider_metadata: {
                                    public_id: "stripe_2_cd90cf106a",
                                    resource_type: "image"
                                },
                                createdAt: "2023-06-23T22:05:35.897Z",
                                updatedAt: "2023-06-23T22:05:35.897Z"
                            }
                        }
                    }
                },
                {
                    id: 3,
                    text: "Presentes especiais do Cansei de ser gato",
                    image: {
                        data: {
                            id: 9,
                            attributes: {
                                name: "stripe_3.png",
                                alternativeText: null,
                                caption: null,
                                width: 61,
                                height: 38,
                                formats: null,
                                hash: "stripe_3_d3a7fcdb0c",
                                ext: ".png",
                                mime: "image/png",
                                size: 0.8,
                                url: CDN_PATH + "dmf_2.svg",
                                previewUrl: null,
                                provider: "cloudinary",
                                provider_metadata: {
                                    public_id: "stripe_3_d3a7fcdb0c",
                                    resource_type: "image"
                                },
                                createdAt: "2023-06-23T22:05:36.152Z",
                                updatedAt: "2023-06-23T22:06:01.101Z"
                            }
                        }
                    }
                },
                {
                    id: 4,
                    text: "Desconto exclusivo no meu site e na minha loja física",
                    image: {
                        data: {
                            id: 7,
                            attributes: {
                                name: "stripe_4.png",
                                alternativeText: null,
                                caption: null,
                                width: 48,
                                height: 38,
                                formats: null,
                                hash: "stripe_4_b60a13f05a",
                                ext: ".png",
                                mime: "image/png",
                                size: 0.41,
                                url: CDN_PATH + "dmf_3.svg",
                                previewUrl: null,
                                provider: "cloudinary",
                                provider_metadata: {
                                    public_id: "stripe_4_b60a13f05a",
                                    resource_type: "image"
                                },
                                createdAt: "2023-06-23T22:05:36.035Z",
                                updatedAt: "2023-06-23T22:05:36.035Z"
                            }
                        }
                    }
                },
                {
                    id: 6,
                    text: "Acesso em primeira mão aos meus lançamentos",
                    image: {
                        data: {
                            id: 10,
                            attributes: {
                                name: "stripe_5.png",
                                alternativeText: null,
                                caption: null,
                                width: 50,
                                height: 41,
                                formats: null,
                                hash: "stripe_5_49cd511560",
                                ext: ".png",
                                mime: "image/png",
                                size: 0.39,
                                url: CDN_PATH + "dmf_4.svg",
                                previewUrl: null,
                                provider: "cloudinary",
                                provider_metadata: {
                                    public_id: "stripe_5_49cd511560",
                                    resource_type: "image"
                                },
                                createdAt: "2023-06-23T22:05:36.234Z",
                                updatedAt: "2023-06-23T22:05:36.234Z"
                            }
                        }
                    }
                }
            ]
        }
        };
        el.get(0).style.setProperty('--cms_benefits_text_color', dmf.attributes.text_color);
        el.get(0).style.setProperty('--cms_benefits_background_color', dmf.attributes.background_color);
        el.append(theme.functions.benefits(dmf));        
        oObj.html(el.prop('outerHTML'));
        
    }else{
        let cms_benefits = sessionStorage.getItem('cms_benefits');
        if(cms_benefits){    
            cms_benefits = JSON.parse(cms_benefits);   
            console.log('local benefits', cms_benefits)     
            el.get(0).style.setProperty('--cms_benefits_text_color', cms_benefits.attributes.text_color);
            el.get(0).style.setProperty('--cms_benefits_background_color', cms_benefits.attributes.background_color);
            el.append(theme.functions.benefits(cms_benefits));        
            oObj.html(el.prop('outerHTML'));
        }else{
            $.ajax({
                url: CMS_PATH + "/benefit-stripe?populate=deep",   
                method: 'GET'         
            }).done(function(response){
                console.log(response.data);
                if(response.data){
                    cms_benefits = response.data;
                    sessionStorage.setItem('cms_benefits',JSON.stringify(cms_benefits));
                    console.log('ixi boy')
                    theme.generateContent.benefits(prop,oObj);
                }
            });
        } 
    }
    
};

theme.functions.benefits = function(cms_benefits){
    let items = cms_benefits.attributes.benefits;
    let list = $('<div class="slick-me cdsg_benefits my-4" data-md-cols="0" data-md-infinite="true" data-md-delay="3000" data-md-arrows="true" data-md-dots="true" data-sm-cols="1" data-sm-arrows="true" data-sm-dots="false" data-sm-delay="3000" data-sm-infinite="true" data-sm-slidesToScroll="1" data-md-slidesToScroll="1" data-sm-slidesToShow="1" data-md-slidesToShow="1" data-arrow-image="'+ CDN_PATH + 'arrow_slider_indigo.svg' + '"></div>');
    $.each(items, function(k_, i_){
        let item = $('<div class="item"></div>');
        if(i_.image && i_.image.data){
            item.append($('<div class="image"><img src="'+ i_.image.data.attributes.url +'"/></div>'));
        }
        i_.text != null ? item.append('<p>'+ i_.text +'</p>') : false;
        list.append(item);      
    });
    return list;
}





theme.build = [];

theme.build.sideHelp = function(){
    let el = $(`<div class="cdsg_sideHelp"> <div class="triggers"> <div> <button type="button" class="cdsg_sideHelp_trigger"> <i></i> <span> Ajuda? </span> </button></div><a href="https://wa.me/5511916588376" target="_blank" class="d-md-block d-none"> <div apx_load="load_img" apx_load_prop="side_whatsapp.svg"></div></a> </div><div class="help-content"><div class="cdsg_sideHelp-menu"> <div class="d-flex justify-content-between align-items-center mb-3"> <div> <img src="${CDN_PATH + 'ball.svg'}"/> <b>Rastrear Pedido</b> </div><button type="button" class="cdsg_sideHelp_trigger"></button> </div></div><div apx_load="form_rastreio"></div><div apx_load="side_options"></div></div></div>`);
    el.appendTo('body');

    $('body').on('click','.cdsg_sideHelp .cdsg_sideHelp_trigger',function(){
        $('.cdsg_sideHelp').toggleClass('visible');
    });
}

theme.build.topbar = function(){
    $('#cdsg_header_default').prepend('<div class="cdsg_topbar py-md-3 py-2"></div>');
    let el = $('<div class="container"></div>');
    let items = false;
    let cms_topbar = sessionStorage.getItem('cms_topbar');
    if(cms_topbar){    
        cms_topbar = JSON.parse(cms_topbar);        
        el.append(theme.functions.topbar(cms_topbar));
    }else{
        $.ajax({
            url: CMS_PATH + "/topbar?populate[items][populate][0]=icon",   
            method: 'GET'         
        }).done(function(response){
            if(response.data){
                cms_topbar = response.data.attributes;
                sessionStorage.setItem('cms_topbar',JSON.stringify(cms_topbar));
                el.append(theme.functions.topbar(cms_topbar));                
            }
        });
    }
    el.appendTo('.cdsg_topbar');
}


theme.functions.searchAutoComplete = function(){
    $('body').on('keyup','[apx_load="search"] form input', function(){
        let results = $(this).closest('[apx_load="search"]').find('.results-products > .list');
        let count = $(this).closest('[apx_load="search"]').find('.results-products > .count');
        let clearBtn = $(this).closest('[apx_load="search"]').find('.clear_list');
        let q = $(this).val().toLowerCase();
        if(q.length > 3){
            clearBtn.show();
            $.ajax({
                url: window.API_PRODUCT_PUBLIC_URL + "/autocomplete",
                headers: {
                    "x-store-id": window.LOJA_ID
                },
                dataType: "json",
                data: {
                    q: q,
                    page: {
                        size: 6
                    }
                },
            }).done(function(response){
                if(results.length > 0){
                    results.empty();
                    count.empty()
                    response.meta.total.resources > 0 ? count.append('<div class="col-auto">' + response.meta.total.resources + ' <span>produtos</span></div>') : false;
                    response.meta.total.resources > 0 ? count.append('<div class="col-auto"><a href="/buscar?q='+ q +'">ver tudo</a></div>') : false;
                    
                    $.each(response.data, function(k_, i_){
                        let box = $('<div class="col-6 col-md-2 px-md-2 px-1 mb-md-0 mb-2"></div></div>');
                        let item = $('<div class="item"></div>');

                        item.append('<button type="button" class="add-wishlist"><img src="'+ CDN_PATH + 'wishlist.svg' + '"/></button>');
                        item.append('<a href="'+ i_.url +'"><div class="image"><img src="'+ (i_.images && i_.images[0] ? window.MEDIA_URL + i_.images[0].url.slice(1,i_.images[0].url.length) : 'https://via.placeholder.com/200x200') +'"/></div></a>');
                        item.append('<a href="'+ i_.url +'"><div class="name">'+ i_.name +'</div></a>');
                        box.append(item);
                        
                        results.append(box);

                    });
                }
                console.log(response.data)
            })
        }else{
            clearBtn.hide();
        }
        console.log()
    });
    $('body').on('click', '.clear_list', function(){
        $(this).closest('[apx_load="search"]').find('.list, .count').empty();
        $(this).closest('[apx_load="search"]').find('input').val('');
        $(this).closest('[apx_load="search"]').find('input').keyup();
    });
    $('body').on('click', '.cdsg_search_trigger', function(){
        if($(this).next('[apx_load="search"]').length > 0){
            $(this).next('[apx_load="search"]').toggleClass('visible');
        }
        if($(this).closest('[apx_load="search"]').length > 0){
            $(this).closest('[apx_load="search"]').toggleClass('visible');
        }
    });
};


theme.functions.topbar = function(cms_topbar){
    let items = cms_topbar.items;
    $('.cdsg_topbar').get(0).style.setProperty('--cms_topbar_text_color', cms_topbar.text_color);
    $('.cdsg_topbar').get(0).style.setProperty('--cms_topbar_background_color', cms_topbar.background_color);
    let list = $('<div class="slick-me" data-md-cols="1" data-md-infinite="true" data-md-delay="3000" data-md-arrows="true" data-md-dots="false" data-sm-cols="1" data-sm-arrows="true" data-sm-dots="false" data-sm-delay="3000" data-sm-infinite="true" data-sm-slidesToScroll="1" data-md-slidesToScroll="1" data-sm-slidesToShow="1" data-md-slidesToShow="1" data-arrow-image="'+ CDN_PATH + 'topbar_arrow_l.svg' + '"></div>');
    $.each(items, function(k_, i_){
        let item = $('<div class="item"></div>');
        i_.icon != null && i_.icon.data != null ? item.append('<img class="d-md-block d-none" src="'+ i_.icon.data.attributes.url +'"/>') : false;
        i_.text != null ? item.append('<span class="d-md-block d-none">'+ i_.text +'</span>') : false;
        i_.short_text != null ? item.append('<span class="d-block d-md-none">'+ i_.short_text +'</span>') : false;
        i_.url != null ? item.innerWrap('<a href="'+ i_.url +'"></a>') : false;

        list.append(item);      
    });
    return list;
}


theme.build.header = function(){
    $('#cabecalho').html(''+
    '<div id="cdsg_header">'+
        '<div id="cdsg_header_default">' +
            '<div class="container py-md-4 py-3">' +
                '<div class="row d-flex align-items-center">' +
                    '<div class="col-md-5 col-4">' +
                        '<div apx_load="functions" apx_load_prop="mobile" class="cdsg_functions d-block d-md-none"></div>' +
                        '<div apx_load="menu" class="cdsg_menu"></div>' +
                    '</div>' +
                    '<div class="col-md-2  col-4 justify-content-center d-flex">' +
                        '<div apx_load="logo" class="cdsg_logo"></div>' +
                    '</div>' +
                    '<div class="col-md-5  col-4 justify-content-end d-flex align-items-center">' +
                        '<div apx_load="menu_extra" class="cdsg_menu me-md-5 d-none d-md-block"></div>' +
                        '<div apx_load="functions" class="cdsg_functions"></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>'+
    '</div>');

    $('#cabecalho').append(`<div id="cdsg_mobile_menu"> <div class="account d-flex align-items-center justify-content-between"> <a href="/conta/index"> <img src="${CDN_PATH + 'user.svg'}"/> <div class="d-flex flex-column"> <span>Olá, ${theme.account.userName}.</span> <u class="text-uppercase">Acesse sua conta</u> </div></a><button type="button" class="cdsg_menu_trigger"></button></div><div class="actions d-flex align-items-center justify-content-between text-center px-0 py-3 my-3"> <div class="item col"> <a href=""> <div class="image"> <img src="${CDN_PATH + 'wishlist.svg'}"/> </div><span>Meus<br>Favoritos</span> </a> </div><div class="item col"> <a href=""> <div class="image"> <img src="${CDN_PATH + 'box_pedido.svg'}"/> </div><span>Rastrear<br>pedido</span> </a> </div><div class="item col"> <a href=""> <div class="image"> <img src="${CDN_PATH + 'ajuda_loja.svg'}"/> </div><span>Encontrar<br>loja</span> </a> </div><div class="item col"> <a href=""> <div class="image"> <img src="${CDN_PATH + 'ajuda_whats.svg'}"/> </div><span>Whats<br>Chico</span> </a> </div></div><div class="menu"> <div apx_load="menu" class="cdsg_menu"></div><div apx_load="menu_extra" apx_load_prop="mobile"></div></div><div class="social"> <div apx_load="social" apx_load_prop="mobile" class="cdsg_social"></div></div></div>`);

    if(!theme.isMobile){
        $('#cabecalho').prepend(''+
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
        '</div>');

        let header = $('#cdsg_header_default');
        let header_fixed = $('#cdsg_header_fixed');

        $(window).on('resize scroll', function() {
            if (header.isInViewport()) {
                header_fixed.removeClass('visible');
                header_fixed.find('[apx_load="search"]').removeClass('visible');
            } else {
                header_fixed.addClass('visible');
            }
        });
    }

    $('body').on('click','.cdsg_menu_trigger',function(){
        $('#cdsg_mobile_menu').toggleClass('visible');
    });
    $('body').on('click','#cdsg_mobile_menu .com-filho > i',function(){
        $(this).closest('li').toggleClass('open');
        $(this).prev('ul').slideToggle();
    })

    $(window).load(function(){
        theme.functions.headerCategoriesDropdown();
    });
   
};

theme.settings.imageRatio = 1.3;
theme.build.productList = function(){
    $('.listagem-linha > ul > li:first-child').unwrap();
    $('.listagem-linha > li:first-child').unwrap();

    $('[data-produtos-linha]').addClass('row');
    $('[data-produtos-linha] > li').addClass('col-6 col-md-3 mb-md-4 mb-3');
    $('[data-produtos-linha] > li').removeClass('span3');

    $('.listagem-item .imagem-produto img').each(function(){
        let src = $(this).attr('src').replace('300x300','600x600');
        $(this).attr('src',src);
    });

    let h = $('.listagem-item .imagem-produto').first().innerWidth() * theme.settings.imageRatio;
    $('.listagem-item .imagem-produto').css('--ratio',theme.settings.imageRatio);
    $('.listagem-item .imagem-produto').css('height',h + 'px');   

    theme.functions.productListLoadColors();
};


theme.lang.footer = [];
theme.lang.footer.duvidas = "Dúvidas?";
theme.lang.footer.institucional = "O Cansei de Ser Gato";
theme.lang.footer.fale_conosco = "Fale Conosco";
theme.lang.footer.fale_conosco_text = "Compre ou tire suas dúvidas por WhatsApp";
theme.lang.footer.pagamento = "Formas de Pagamento"; 
theme.lang.footer.seguranca = "Segurança"; 
theme.build.footer = function(){
    $('#rodape > *:not(div:last-child)').remove();
    $('#rodape').prepend('<div id="cdsg_footer"></div>');
    $('#barraNewsletter .interno-conteudo').append('<div apx_load="social" class="cdsg_social"></div>');
    $('#barraNewsletter .componente').prepend('<img src="'+ CDN_PATH + 'newsletter.png'+'"/>');
    //$('#cdsg_footer').load('http://127.0.0.1:5500/footer.html');
    $('#cdsg_footer').html(`<div class="container mt-md-5">` +
        `<div class="row align-items-start justify-content-between">` +
            `<div class="col-md-auto col-12">` +
                `<h4>${theme.lang.footer.duvidas} <i class="d-md-none d-block expand"></i></h4>` +
                `<div apx_load="menu_footer" apx_load_prop="DÚVIDAS?"></div>` +
            `</div>` +
            `<div class="col-md-auto col-12">` +
                `<h4>${theme.lang.footer.institucional} <i class="d-md-none d-block expand"></i></h4>` +
                `<div apx_load="menu_footer" apx_load_prop="O CANSEI DE SER GATO"></div>` +
                `<div class="d-md-block d-none"><h4>Onde encontrar nossos produtos <i class="d-md-none d-block expand"></i></h4>` +
                `<div apx_load="find_where_form"></div></div>` +
                
            `</div>` +
            `<div class="col-md-auto col-12">` +
                `<h4>${theme.lang.footer.fale_conosco} <i class="d-md-none d-block expand"></i></h4>` +
                `<div><p>${theme.lang.footer.fale_conosco_text}</p>` +
                `<div class="row align-items-center">` +
                    `<div class="col-auto">` +
                        `<div class="row align-items-center">` +
                            `<div class="col-auto">` +
                                `<div apx_load="load_img" apx_load_prop="footer_whatsapp.svg"></div>`+
                            `</div>` +
                            `<div class="col-auto">` +
                                `<div apx_load="contact_phone" class="mb-2"></div>` +
                                `<div apx_load="contact_hour"></div>` +
                            `</div>` +
                            
                        `</div>` +
                    `</div>` +
                    `<div class="col-auto">` +
                        `<div apx_load="load_img" apx_load_prop="whatsapp_qrcode.png"></div>` +
                    `</div>` +
                `</div>` +
                `<div class="row mt-4">` +
                    `<div class="col-12">` +
                        `<div class="row align-items-center">` +
                            `<div class="col-auto">` +
                                `<div apx_load="load_img" apx_load_prop="footer_email.svg"></div>` +
                            `</div>` +
                            `<div class="col-auto">` +
                                `<div apx_load="contact_mail"></div>` +
                            `</div>` +
                        `</div>` +
                    `</div>` +
                `</div></div>` +
            `</div>` +
        `</div>` +
    `</div>` +
    `<hr></hr>` +
    `<div class="container footer_bottom pb-4">` +
        `<div class="row align-items-center justify-content-between">` +
            `<div class="col-md-auto col-12 d-flex flex-md-row flex-column align-items-center">` +
                `<h4 class="me-md-4">${theme.lang.footer.pagamento} <i class="d-md-none d-block expand"></i></h4>` +
                `<div apx_load="footer_payments"></div>` +
            `</div>` +
            `<div class="col-md-auto col-12 d-flex flex-md-row flex-column align-items-center">` +
                `<h4 class="me-md-4">${theme.lang.footer.seguranca} <i class="d-md-none d-block expand"></i></h4>` +
                `<div apx_load="footer_secure"></div>` +
            `</div>` +
        `</div>` +
    `</div>`+
    `<div apx_load="load_img" apx_load_prop="gatoxinha.png" class="d-block d-md-none gatoxinha"></div>`);

    if(theme.isMobile){
        $('#rodape #cdsg_footer h4 i').click(function(){
            $(this).closest('h4').toggleClass('open');
            $(this).closest('h4').next().slideToggle();
        })
    }
   
};

theme.build.sliders = function(){
    
    if(theme.isMobile){
        $('.pagina-categoria .cdsg_categoryIconList[apx_load="categoryIconList"] .items:not(.slick-slider)').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button type="button" class="apx_arrow prev"><img src="' + CDN_PATH + 'arrow_slider_black_l.svg' + '"/></button>',
            nextArrow: '<button type="button" class="apx_arrow next"><img src="' + CDN_PATH + 'arrow_slider_black_l.svg' + '"/></button>',
            autoplay:true,
            autoplaySpeed:3000
            
        });
    }

    $('.banner.cheio .flexslider').addClass('unflexedSlider');
    theme.functions.flexDestroy($('.banner.cheio .flexslider'));

    $('.banner.cheio .unflexedSlider .slides:not(.slick-slider)').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: "<button type=\"button\" class=\"apx_arrow prev\"><img src=\"https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/arrow_slider_white_l.svg\"/></button>",
        nextArrow: "<button type=\"button\" class=\"apx_arrow next\"><img src=\"https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/arrow_slider_white_l.svg\"/></button>",
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    infinite: true,
                    slidesToScroll: 1,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            }
        ]
    });

    $('.cdsg_list_side_banner').next('div').find('[data-produtos-linha]:not(.slick-slider)').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: "<button type=\"button\" class=\"apx_arrow prev\"><img src=\"https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/arrow_slider_black_l.svg\"/></button>",
        nextArrow: "<button type=\"button\" class=\"apx_arrow next\"><img src=\"https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/arrow_slider_black_l.svg\"/></button>",
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            }
        ]
    });

    $('.pagina-inicial').find('[data-produtos-linha]:not(.slick-slider)').slick({
        infinite: true,
        //slidesToShow: theme.isMobile ? 2 : 4,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: "<button type=\"button\" class=\"apx_arrow prev\"><img src=\"https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/arrow_slider_black_l.svg\"/></button>",
        nextArrow: "<button type=\"button\" class=\"apx_arrow next\"><img src=\"https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/arrow_slider_black_l.svg\"/></button>",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });

    if(theme.isMobile){
        $('.pagina-produto').find('.aproveite-tambem > ul:not(.slick-slider)').addClass('row');
        $('.pagina-produto').find('.aproveite-tambem > ul:not(.slick-slider) li.span3').attr('class','col-12 col-md-6 px-0');
        $('.pagina-produto').find('.aproveite-tambem > ul:not(.slick-slider)').attr('data-produtos-linha',4);
        $('.pagina-produto').find('.aproveite-tambem > ul:not(.slick-slider)').slick({
            infinite: true,
            //slidesToShow: theme.isMobile ? 2 : 4,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: "<button type=\"button\" class=\"apx_arrow prev\"><img src=\"https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/arrow_slider_black_l.svg\"/></button>",
            nextArrow: "<button type=\"button\" class=\"apx_arrow next\"><img src=\"https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/arrow_slider_black_l.svg\"/></button>",
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true
                    }
                }
            ]
        });

        let h = $('.listagem-item .imagem-produto').first().innerWidth() * theme.settings.imageRatio;
        $('.listagem-item .imagem-produto').css('--ratio',theme.settings.imageRatio);
        $('.listagem-item .imagem-produto').css('height',h + 'px'); 
    }

    $('.slick-me:not(.slick-slider)').each(function(){
        let oObj = $(this);
        let settings = {};
        settings.responsive = [];
        let md = {};
        let sm = {};

        
        if(parseInt(oObj.attr('data-md-cols')) < 1){
            settings.responsive.push({
                breakpoint:9999,
                settings:'unslick'
            })
        }else{
            settings.infinite = oObj.attr('data-md-infinite') == "true" ? true : false;
            settings.slidesToShow = oObj.attr('data-md-slidesToShow') ? parseInt(oObj.attr('data-md-slidesToShow')) : 1;
            settings.slidesToScroll = oObj.attr('data-md-slidesToScroll') ? parseInt(oObj.attr('data-md-slidesToScroll')) : 1;
            settings.dots = oObj.attr('data-md-dots') == "true" ? true : false;
            settings.arrows = oObj.attr('data-md-arrows') == "true" ? true : false;
            settings.autoplay = oObj.attr('data-md-delay') && parseInt(oObj.attr('data-md-delay')) > 0 ? true : false;
            settings.autoplaySpeed = oObj.attr('data-md-delay') && parseInt(oObj.attr('data-md-delay')) > 0 ? parseInt(oObj.attr('data-md-delay')) : 5000;
        }
        
        sm.breakpoint = 990;
        if(parseInt(oObj.attr('data-sm-cols')) < 1){
            sm.settings = "unslick";
        }else{
            sm.settings = {};
            sm.settings.infinite = oObj.attr('data-sm-infinite') == "true" ? true : false;
            sm.settings.slidesToShow = oObj.attr('data-sm-slidesToShow') ? parseInt(oObj.attr('data-sm-slidesToShow')) : 1;
            sm.settings.slidesToScroll = oObj.attr('data-sm-slidesToScroll') ? parseInt(oObj.attr('data-sm-slidesToScroll')) : 1;
            sm.settings.dots = oObj.attr('data-sm-dots') == "true" ? true : false;
            sm.settings.arrows = oObj.attr('data-sm-arrows') == "true" ? true : false;
            sm.settings.autoplay = oObj.attr('data-sm-delay') && parseInt(oObj.attr('data-sm-delay')) > 0 ? true : false;
            sm.settings.autoplaySpeed = oObj.attr('data-sm-delay') && parseInt(oObj.attr('data-sm-delay')) > 0 ? parseInt(oObj.attr('data-sm-delay')) : 5000;

        }

        settings.responsive.push(sm);

        if(oObj.attr('data-arrow-image')){
            settings.prevArrow = '<button type="button" class="apx_arrow prev"><img src="' + oObj.attr('data-arrow-image') + '"/></button>';
            settings.nextArrow= '<button type="button" class="apx_arrow next"><img src="' + oObj.attr('data-arrow-image') + '"/></button>';
        }
        console.log(settings);
        $(this).slick(settings);
    });
};

theme.functions.productDataById = function(_id){
    let product = null;
    $.ajax({
        url: window.API_PRODUCT_PUBLIC_URL + "/" + _id,
        headers: {
            "x-store-id": window.LOJA_ID
        }            
    }).done(function(response){
        if(response.data){
            product = response.data;            
            return product
        }
    });
    console.log(product);
    return product;
};

theme.functions.productListLoadColors = function(){
    $('.listagem-item .info-produto').prepend('<div class="cdsg_colors"></div>');
    
    $('.listagem-item').each(function(){
        let _id = $(this).find('[data-trustvox-product-code]').attr('data-trustvox-product-code');
        let me = $(this);
        let colors = false;
        if(_id){
            if(sessionStorage.getItem('colors_' + _id) && sessionStorage.getItem('colors_' + _id) != "false"){
                if(sessionStorage.getItem('colors_' + _id) != "empty"){
                    colors = JSON.parse(sessionStorage.getItem('colors_' + _id));
                    theme.functions.productListSetColors(colors, me);
                }
            }else{
                $.ajax({
                    url: window.API_PRODUCT_PUBLIC_URL + "/" + _id,
                    headers: {
                        "x-store-id": window.LOJA_ID
                    }            
                }).done(function(response){
                    if(response.data){
                        product = response.data;            
                        if(product.skus[0].variations.find(el => el.grid.value_for_display == "Cor")){
                            let colors_ = [];
                            $.each(product.skus, function(k_, i_){
                                $.each(i_.variations.filter(el => el.grid.value_for_display == "Cor"), function(k__, i__){
                                    colors_.push(i__.value);
                                });
                            });
                            sessionStorage.setItem('colors_' + _id, JSON.stringify(colors_));
                            theme.functions.productListSetColors(colors_, me);
                        }else{
                            sessionStorage.setItem('colors_' + _id, 'empty');    
                        }
                    }else{
                        sessionStorage.setItem('colors_' + _id, 'empty');
                    }
                });
            }
        }
    });    
};

theme.lang.nao_encontrado = [];
theme.lang.nao_encontrado.titulo = "Não encontrei o que você procura, humano.";
theme.lang.nao_encontrado.texto = "Você pode verificar o endereço acessado ou digitar o que está procurando em nossa busca.<br><br><br>Mas eu vou te ajudar a encontrar. verifique o endereço digitado ou faça uma nova busca.";

// theme.generateContent.faq_menu = function(){
    
//     return el.prop('outerHTML');
// }

theme.functions.sidePage = function(){
    return `<div class="col-12 col-md-auto cdsg_side_page_bar ms-auto"><b class="d-block mb-1">Ficou com alguma dúvida? Fale comigo!</b><br><p class="d-block mb-3">Compre ou tire suas dúvidas por WhatsApp</p><div class="row align-items-center"> <div class="col-auto"> <div class="row align-items-center"> <div class="col-auto"> <div apx_load="load_img" apx_load_prop="footer_whatsapp.svg"></div></div><div class="col-auto"> <div apx_load="contact_phone" class="mb-2"></div><div apx_load="contact_hour"></div></div></div></div><div class="col-auto"> <div apx_load="load_img" apx_load_prop="whatsapp_qrcode.png"></div></div></div><div class="row mt-4"> <div class="col-12"> <div class="row align-items-center"> <div class="col-auto"> <div apx_load="load_img" apx_load_prop="footer_email.svg"></div></div><div class="col-auto"> <div apx_load="contact_mail"></div></div></div></div></div><img class="side_img" src="${CDN_PATH + 'gato_pages__.png'}"/></div>`;
}

theme.lang.faq = [];
theme.lang.faq.titulo="FAQ - Chico Response";
theme.build.faq = function(){
    let currentContent = $('#corpo .secao-principal .caixa-sombreada').html();
    let el = $('<div class="row align-items-start justify-content-between"></div>');

    let cms_faq = sessionStorage.getItem('cms_faq');
    let faq = $('<ul id="cdsg_faq"></ul>');
    if(cms_faq){
        cms_faq = JSON.parse(cms_faq);        
        $.each(cms_faq, function(k_, i_){
            let page = theme.resources.json.pages.find(el => el.name.toLowerCase().trim() == i_.title.toLowerCase().trim());
            if(page){
                faq.append(`<li><a href="${page.url}">${page.name}</a></li>`);
            }
        })
    }

    el.append('<div class="col-12 col-md-auto">'+faq.prop('outerHTML')+'</div>');
    el.append('<div class="col-md-5 col-12 cdsg_faq_content ps-md-5">'+ currentContent +'</div>');
    el.append(theme.functions.sidePage());
    $('#corpo .secao-principal').html('<div class="container"><div class="cdsg_faq_title"><strong>'+ theme.lang.faq.titulo +'</strong></div>'+el.prop('outerHTML')+'</div>');

}

theme.lang.contato = [];
theme.lang.contato.titulo = "Formulário de Contato";
theme.lang.contato.outras_formas_titulo = "OUTRAS FORMAS DE CONTATO";
theme.lang.contato.outras_formas = "Você pode mandar um e-mail também para <a href='mailto:loja@canseidesergato.com'><u><b>loja@canseidesergato.com</b></u></a>";
theme.lang.contato.parceria_titulo = "OUTRAS FORMAS DE CONTATO";
theme.lang.contato.parceria = "Se você quer fazer uma parceria e falar sobre publicidade, esse é o meu contato:<br><br><a href='mailto:marketing@canseidesergato.com'><u><b>marketing@canseidesergato.com</b></u></a>";
theme.build.contact_form_page = function(){
    let currentContent = $('#corpo .secao-principal .caixa-sombreada').html();
    let el = $('<div class="row align-items-start justify-content-start"></div>');

    

    el.append('<div class="col-12 col-md-3 cdsg_page_side_left">'+ currentContent +'</div>');
    el.append('<div class="col-md-4 col-12 cdsg_page_content contact mt-4"><strong>Sobre o que deseja conversar?</strong><div apx_load="contact_form"></div></div>');
    el.append( `<div class="col-12 col-md-3 cdsg_side_page_bar ms-auto" style="min-width:27.5%"><b class="d-block mb-2">${theme.lang.contato.outras_formas_titulo}</b><p class="mb-2">${theme.lang.contato.outras_formas}</p><hr></hr><p class="d-block mb-3">Compre ou tire suas dúvidas por <b>WhatsApp</b></p><div class="row align-items-center"> <div class="col-auto"> <div class="row align-items-center"> <div class="col-auto"> <div apx_load="load_img" apx_load_prop="footer_whatsapp.svg"></div></div><div class="col-auto"> <div apx_load="contact_phone" class="mb-2"></div><div apx_load="contact_hour"></div></div></div></div><div class="col-auto"> <div apx_load="load_img" apx_load_prop="whatsapp_qrcode.png"></div></div></div><hr></hr><div class="row mt-4"> <div class="col-12"><b class="d-block mb-3">${theme.lang.contato.parceria_titulo}</b><p>${theme.lang.contato.parceria}</p></div></div><img class="side_img" src="${CDN_PATH + 'gato_pages__.png'}"/></div>`);
    $('#corpo .secao-principal').html('<div class="container">'+el.prop('outerHTML')+'</div>');

    $(".contact").on("submit", "form", function(F) {
        F.preventDefault();
        F = $(this);
        var N = F.parents(".contact"),
            H = {};
        F.find("#id_hostname").val(location.hostname);
        H.nome = F.find("#id_nome").val();
        H.email = F.find("#id_email").val();
        H.telefone = F.find("#id_telefone").val();
        H.numero_pedido = F.find("#id_numero_pedido").val();
        H.mensagem = F.find("#id_mensagem").val();
        H.hostname = F.find("#id_hostname").val();
        H.politica_privacidade = F.find("#id_politica_privacidade").is(":checked");
        var x = N.find("#g-recaptcha-response").val(),
            M = function(ba, ra) {
                $("<div>").addClass("alert alert-" + ba).html(ra).insertAfter(N.find("form"))
            },
            W = function(ba) {
                //console.log('aaa')
                M("error", ba)
            };
        N.find(".alert").remove();
        H.nome && H.email && H.mensagem ? F.find("#id_politica_privacidade").length && !H.politica_privacidade ? (msg = "Voc\u00ea n\u00e3o aceitou as pol\u00edticas de privacidade.", W(msg)) : x ? (H.json = !0, H["g-recaptcha-response"] = x, $.post("/contato/popup/", H, function(ba) {
            if("SUCESSO" == ba.estado){
                M("success", 'Mensagem enviada com sucesso! Em breve te responderei, humano.');
                N.find("form").addClass('sended');
                //limpar_form(N)
            }else{
                $.each(ba.errors, function(ra, ia) {
                    $("#id_" + ra).parents(".control-group").addClass("error")
                });
                W(ba.mensagem)
            }
        }, "json")) : (msg = "Marque a verifica\u00e7\u00e3o reCAPTCHA.", W(msg)) : (msg = "Nome, E-mail e Mensagem s\u00e3o campos obrigat\u00f3rios.", W(msg))
    }); 

}
theme.build.contact_page = function(){
    let currentContent = $('#corpo .secao-principal .caixa-sombreada').html();
    let el = $('<div class="row align-items-start justify-content-start"></div>');

    let cms_faq = sessionStorage.getItem('cms_faq');
    let faq = $('<ul id="cdsg_faq"></ul>');
    if(cms_faq){
        cms_faq = JSON.parse(cms_faq);        
        $.each(cms_faq, function(k_, i_){
            let page = theme.resources.json.pages.find(el => el.name.toLowerCase().trim() == i_.title.toLowerCase().trim());
            if(page){
                faq.append(`<li><a href="${page.url}">${page.name}</a></li>`);
            }
        })
    }

    //el.append('<div class="col-12 col-md-auto"></div>');

    

    el.append('<div class="col-12 col-md-3 cdsg_page_side_left">'+ currentContent +'</div>');
    el.append(`<div class="col-md-9 col-12 cdsg_page_content contact_main mt-4"><div class="row align-items-start"><div class="col-12 col-md-4"><strong>Whatsapp</strong><p class="d-block mb-3">Você pode comprar por aqui também =)</p><div class="row align-items-center"><div class="col-auto"><div apx_load="load_img" apx_load_prop="footer_whatsapp.svg"></div></div><div class="col-auto"><div apx_load="contact_phone" class="mb-2"></div><div apx_load="contact_hour"></div></div></div></div><div class="col-12 col-md-4"><strong>E-mail</strong><a href="/pagina/formulario-de-contato.html" class="cdsg_btn">Formulário de Contato</a><p class="d-block mb-3">Ou você pode mandar um e-mail para<a href="mailto:loja@canseidesergato.com"><u><b>loja@canseidesergato.com</b></u></a></p></div><div class="col-12 col-md-4"><strong>FAQ - Chico Responde</strong><p class="mb-2">Já conhece a sessão Chico responde?<br>Aqui eu respondo dúvidas sobre:</p>${faq.prop('outerHTML')}</div></div></div>`);
    //el.append( `<div class="col-12 col-md-3 cdsg_side_page_bar ms-auto" ><b class="d-block mb-2">${theme.lang.contato.outras_formas_titulo}</b><p class="mb-2">${theme.lang.contato.outras_formas}</p><hr></hr><p class="d-block mb-3">Compre ou tire suas dúvidas por <b>WhatsApp</b></p><div class="row align-items-center"> <div class="col-auto"> <div class="row align-items-center"> <div class="col-auto"> <div apx_load="load_img" apx_load_prop="footer_whatsapp.svg"></div></div><div class="col-auto"> <div apx_load="contact_phone" class="mb-2"></div><div apx_load="contact_hour"></div></div></div></div><div class="col-auto"> <div apx_load="load_img" apx_load_prop="whatsapp_qrcode.png"></div></div></div><hr></hr><div class="row mt-4"> <div class="col-12"><b class="d-block mb-3">${theme.lang.contato.parceria_titulo}</b><p>${theme.lang.contato.parceria}</p></div></div><img class="side_img" src="${CDN_PATH + 'gato_pages__.png'}"/></div>`);
    $('#corpo .secao-principal').html('<div class="container">'+el.prop('outerHTML')+'</div>');
    $('#corpo .secao-principal').append(`<div class="container  pt-5 mt-5 contact_row_publi"><div class="row justify-content-between align-items-center"><div class="col-12 col-md-3 text-center"><img src="${CDN_PATH + 'ball.svg'}"></div><div class="col-12 col-md-3"><div class="box-publi p-4"><b class="d-block mb-2">PARCERIA E PUBLICIDADE</b><p>${theme.lang.contato.parceria}</p></div></div></div></div>`);

   
}
theme.functions.contactOk = function(){

}
theme.lang.store = [];
theme.lang.store.title = "Lojas Petz";
theme.build.store = function(){
    let currentContent = $('#corpo .secao-principal .caixa-sombreada > div').html();
    let el = $('<div class="row align-items-start justify-content-between"></div>');

    

    //el.append('<div class="col-12 col-md-auto">'+faq.prop('outerHTML')+'</div>');
    el.append('<div class="col-md-3 col-12 left"><h1>'+ theme.lang.store.title +'</h1>'+ currentContent +'<div id="apx_encontrar_loja"><div><button id="apx_geo" type="button"><img src="'+ CDN_PATH + 'pin_lojas.svg'+'"/>Ache a loja mais próxima</div><form autocomplete="off"><div class="mt-4"><label>Procure por CEP</label><div class="field"><input type="text" name="apx_zip" class="apx_zip" placeholder="Informe o CEP"/><button type="button"><img src="'+ CDN_PATH + 'search_small.svg'+'"/></button></div><div><label>Procure por Cidade</label><div class="field"><input type="text"  name="apx_city" class="apx_city" autocomplete="off" /><button type="button"><img src="'+ CDN_PATH + 'search_small.svg'+'"/></button></div></div></form></div></div>');
    el.append('<div class="col-md-9 col-12"><div class="row"><div class="col-12"><div id="cdsg_map"></div></div></div><div class="row cdsg_stores"></div></div>')
    
    $('#corpo .secao-principal').html('<div class="container">'+el.prop('outerHTML')+'</div>');

    let cms_store = sessionStorage.getItem('cms_store');
    if(cms_store){
        $.each(JSON.parse(cms_store), function(k_, i_){
            let store = i_.attributes;
            let item = $('<div class="col-12 col-md-4 mt-4"><div class="item p-3"></div></div>');

            item.find('.item').append(`<h3>${store.name}</h3>`);
            item.find('.item').append(`<p>${store.location.details.adr_address}</p>`);
            item.find('.item').append(`<div class="mt-5"><b>Horário:</b> ${store.opening_time.slice(0,5)} às ${store.closing_time.slice(0,5)}<br><b>Telefone:</b><a href="tel:${store.phone.replace(/\D/g, "")}">${store.phone}</a></div>`);
            //if(store.location.place_id){
                //item.find('.item').append(`<a href="https://www.google.com/maps/search/${store.location.lat},${store.location.lng}" target=_blank>Como Chegar</a>`);
            //}else{
                item.find('.item').append(`<a class="px-4 mt-3 d-block open_map" href="https://www.google.com/maps/place/${store.location.description}" target=_blank>Como Chegar</a>`);
            //}

            $('.cdsg_stores').append(item)
        });
    }

    theme.functions.geo();
};
theme.functions.geo = function(){
    $('.apx_zip').mask('00000-000');
    $('#apx_geo').click(function(){
        navigator.geolocation.getCurrentPosition(function(posicao) {
            var url = "https://nominatim.openstreetmap.org/reverse?lat="+posicao.coords.latitude+"&lon="+posicao.coords.longitude+"&format=json";
            $.get(url,function(result){
                console.log(result);
                sessionStorage.setItem('apx_geo', result)
                let newLatLng = {lat:parseFloat(result.lat),lng:parseFloat(result.lon)};
                console.log(newLatLng)
                theme.functions.setLatLng(newLatLng,13)
            }); 
        });        
    });

    $('.apx_zip + button').click(function(){
        let zip = $(this).closest('.field').find('input').val();
        if(zip.length == 9){
            let geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: zip }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                var netLatLng = results[0].geometry.location;
                theme.functions.setLatLng(netLatLng,17)
                } else {
                console.log("Geocode falhou: " + status);
                }
            });
        }else{
            alert('Digite o CEP e tente realizar novamente sua busca novamente.');
        }
    });

    let cidadesEstados = [];
    $.ajax({
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/municipios",
        dataType: "json",
    }).done(function (data) {
        cidadesEstados = data;
        $('.apx_city').autocomplete({
            source: function (request, response) {
              // Filtrar as cidades e estados com base no termo de pesquisa
              var termo = request.term.toLowerCase();
              var sugestoes = cidadesEstados.filter(function (item) {
                return (
                  item.nome.toLowerCase().indexOf(termo) !== -1 ||
                  item.microrregiao.mesorregiao.UF.sigla.toLowerCase().indexOf(termo) !== -1
                );
              }).map(function (item) {
                return {
                  label: item.nome + ", " + item.microrregiao.mesorregiao.UF.sigla,
                  value: item.nome,
                };
              });
        
              response(sugestoes);
            },
            minLength: 3,
        });
    });

    $('.apx_city + button').click(function(){
        let city = $(this).closest('.field').find('input').val();
        if(city.length > 5){
            $.get('https://nominatim.openstreetmap.org/search.php?city='+ city +'&format=jsonv2',function(result){
                let newLatLng = {lat:parseFloat(result[0].lat),lng:parseFloat(result[0].lon)};
                theme.functions.setLatLng(newLatLng,13)
            });             
        }else{
            alert('Digite o nome da sua cidade e tente novamente.');
        }
    });

    if($('#cdsg_map').length > 0){
        $('head').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5CRJ2xF2iIiXoL2Nz3j2ivuX8CcRBHbw&callback=initMap" async defer></script>')
        
    }
}

theme.functions.setLatLng = function(netLatLng,zoom){
    map.setCenter(netLatLng);
    map.setZoom(zoom);
}

function initMap(){
    var initialLatLng = { lat: -23.5505, lng: -46.6333 };
    
    map = new google.maps.Map(document.getElementById("cdsg_map"), {
        center: initialLatLng,
        zoom: 10,
        fullscreenControl:false,
        mapTypeControl:false
    });

    
    var locations = [];

    let cms_store = sessionStorage.getItem('cms_store');
    if(cms_store){
        $.each(JSON.parse(cms_store), function(k_, i_){
            locations.push({
                lat: i_.attributes.location.lat, lng: i_.attributes.location.lng, title: i_.attributes.name, info: `<b>${i_.attributes.name}</b><br><br><b>Endereço:</b> ${i_.attributes.location.description}<br><b>Telefone:</b> ${i_.attributes.phone}<br><b>Horário:</b> ${i_.attributes.opening_time.slice(0,5)} às ${i_.attributes.closing_time.slice(0,5)}`
            });
        });
    }

    //console.log(locations);

    
    for (var i = 0; i < locations.length; i++) {
        var location = locations[i];

        var marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.title,
        });

        // Criação de infowindow para exibir informações adicionais ao clicar no marcador
        var infowindow = new google.maps.InfoWindow({
        content: location.info,
        });

        marker.addListener("click", function () {
            infowindow.open(map, marker);
        });
    }
}

theme.lang.telefoneCheckout = "(11) 91658-8376"
theme.build.checkoutHeader = function(){
    $('#cabecalho').html('<div id="cdsg_checkout_header">'+
        '<div class="container-fluid py-md-3 pt-3 px-md-5 px-2 my-md-3">'+
            '<div class="row align-items-center justify-content-between">'+
                '<div class="col-md-3 col-auto">'+
                    '<div apx_load="logo" apx_load_prop="" class="cdsg_logo"></div>'+
                '</div>'+
                '<div class="col-md-auto col-12">'+
                    '<div apx_load="checkout_steps" apx_load_prop="" class="cdsg_checkout_steps"></div>'+
                '</div>'+
                '<div class="col-3 d-none d-md-block text-left"><div class="row align-items-center justify-content-end"><div class="col-auto"><div apx_load="load_img" apx_load_prop="footer_whatsapp.svg"></div></div><div class="col-auto"><div class="mb-1"><b>Dúvidas? '+ theme.lang.telefoneCheckout +'</b></div><div apx_load="contact_hour"></div></div></div></div>'+
            '</div>'+
        '</div>'+
    '</div>');
};

theme.build.checkoutFooter = function(){
    $('#rodape').empty();
};

theme.lang.dica_boleto = "Dica: se for imprimir, configure sua impressora para utilizar modo normal de impressão (não utilizar opção rascunho).";

theme.pages['pagina-pedido-finalizado'] = function(){
    let pedido = [];

    pedido.numero = $('.numero-pedido').first().text().trim();

    $('.caixa-info li b').each(function(){
        let txt = $(this).text();
        if(txt == "Seu nome:"){
            pedido.nome = $(this).next('span').text().trim().split(' ')[0];
        }
        if(txt == "Endereço:"){
            pedido.endereco = $(this).next('span').text().trim();
        }
        if(txt == "Bairro:"){
            pedido.bairro = $(this).next('span').text().trim();
        }
        if(txt == "CEP:"){
            pedido.cep = $(this).next('span').text().trim();
        }  
    });

    $('legend').each(function(){
        let txt = $(this).text();
        if(txt == "Pagamento"){
            pedido.pagamento = $(this).next('ul').find('img').attr('alt').trim();
        }
        if(txt == "Entrega"){
            pedido.entrega = $(this).next('ul').find('img').length > 0 ? $(this).next('ul').find('img').attr('alt').trim() : $(this).next('ul').find('span').text().trim();
        }       
    });

    //pedido.imagem_pagamento = $('#img-forma-pagamento').prop('outerHTML')
    pedido.entrega = pedido.entrega.toLowerCase().trim() == "retirar pessoalmente" ? 'Retirada' : pedido.entrega;
    pedido.imagem_pagamento = `<span class="label-option">${pedido.pagamento}</span>`;
    pedido.imagem_envio = `<span class="label-option">${pedido.entrega}</span>`;
    pedido.status = window.pedido_status.replaceAll('_',' ');
    

    if($('[alt="Boleto Bancário"]').length > 0 && $('#mensagemBoleto #linhaDigitavel').length > 0){
        pedido.codigo_boleto = `<div class="box_interno"><b class="d-block mb-2">CÓDIGO</b><div class="my-3">${$('#mensagemBoleto #linhaDigitavel').text()}</div><textarea class="d-none" id="codigoBoleto">${$('#mensagemBoleto #linhaDigitavel').text()}</textarea><button class="cdsg_btn copiar_codigo" type="button">Copiar Código</button></div>`;
        pedido.imprimir_boleto = `<div class="box_interno"><b class="d-block mb-2">IMPRIMIR BOLETO</b><div class="my-3">${theme.lang.dica_boleto}</div><textarea class="d-none" id="codigoBoleto">${$('#mensagemBoleto #linhaDigitavel').text()}</textarea><a class="cdsg_btn" target=_blank href="${window.url_boleto}">Visualizar e Imprimir Boleto</a></div>`;

        $('#box-pagamento-boleto , #iframe-boleto-container').addClass('d-none')

    }else{
        pedido.codigo_boleto = '';
        pedido.imprimir_boleto = '';
    }

    pedido.aviso_cartao = '';

    console.log(pedido)

    $('.pedido-finalizado').prepend('<div id="cdsg_finalizado_header"></div>');
    $('#cdsg_finalizado_header').html(`<div class="row mt-md-5"><div class="col-12 col-md-4"><div class="order_info"><div class="px-md-5"><h4>Obrigado por escolher a minha loja, ${pedido.nome}!</h4><p class="mt-3">Você receberá um e-mail com todos os detalhes do seu pedido.</p></div><div class="order_number mt-3"><div class="block_header violet px-md-5 px-md-0 px-3 py-md-1 py-2">Número do pedido</div><div class="apx_order_number px-md-5 px-3 pb-3">${pedido.numero}</div></div><div class="apx_order_status mt-3 px-5 py-3 d-flex align-items-center"><b class="">Status do pedido:</b><span class="ms-1 d-block">${pedido.status}</span></div></div></div><div class="col-md-5 col-12"><div class="order_payment"><div class="block_header px-3 py-1 d-flex align-items-center justify-content-between">Pagamento<span>${pedido.imagem_pagamento}</span></div><div class="apx_info_pagamento box_cdsg">${pedido.codigo_boleto} ${pedido.imprimir_boleto} ${pedido.aviso_cartao}</div></div></div><div class="col-12 col-md-3"><div class="order_shipping"><div class="block_header px-3 py-1 d-flex align-items-center justify-content-between">Envio<span>${pedido.imagem_envio}</span></div><div class="apx_info_envio box_cdsg"><b class="d-block mb-2">ENDEREÇO DO PEDIDO:</b>${pedido.endereco} - ${pedido.bairro} - ${pedido.cep}</div></div></div></div></div>`)
    $('#cdsg_finalizado_header').after('<div id="cdsg_finalizado_footer"></div>');
    $('#cdsg_finalizado_footer').html(`<div class="row mt-5"><div class="col-md-8 col-12"><div class="block_header px-3 py-1 mb-1">Seu Pedido</div><div class="cdsg_order_resume"></div></div><div class="col-md-4 col-12"><div class="cdsg_cart_info"></div></div></div><div class="row mt-md-5 mt-4 justify-content-end align-items-center cdsg_finalizar_functions"><div class="col-md-auto col-12"><a href="/">Fazer nova Compra</a></div><div class="col-md-auto col-12"><a href="/conta/pedido/listar">Ir para Meus Pedidos</a></div></div>`);
    $('.resumo-compra').appendTo('.cdsg_order_resume');
    $('.resumo-compra td[colspan="4"]').closest('tr').appendTo('.cdsg_cart_info')
    
    if($('[alt="Pix"]').length > 0 && window.pix_qrcode){
        $('#box-pagamento-pix').appendTo('.apx_info_pagamento')
    }else{
        pedido.codigo_pix = '';
    }


    $('.copiar_codigo').click(function(){
        var t = document.getElementById('codigoBoleto');
        t.select();
        try {
            var successful = document.execCommand('copy')
            var msg = successful ? 'successfully' : 'unsuccessfully'
            console.log('text coppied ' + msg);
            alert('Código copiado');
        } catch (err) {
            console.log('Unable to copy text')
            alert('Erro ao copiar código');
        }
    });

    $('.status-pagamento').appendTo('.apx_info_pagamento');


};

theme.lang.aproveite_e_leve_tambem = "Aproveite e leve também";

theme.functions.formatMoney = function(string){
    return string.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

theme.functions.relatedAjax = function(product_ids, limit, i){
    $.ajax({
        url: window.API_PRODUCT_PUBLIC_URL + "/" + product_ids[i],
        headers: {
            "x-store-id": window.LOJA_ID
        }            
    }).done(function(response){
        if(response.data){
            product = response.data;            
            console.log(product)
            
            if(product.status="active" && product.is_available && $('[data-produto-id] a[href$="'+product.canonical_url.path+'"]').length == 0){
                $(`<div class="col-6 col-md-2 px-md-1"><div class="item"><div class="image"><img src="${window.MEDIA_URL + '200x200'+ product.images[0].url }"/></div><a href="${product.canonical_url.path}">${product.name}</a><div><strong>${theme.functions.formatMoney(product.selected_sku.price.sell)}</strong></div><a href="/carrinho/produto/${product.id}/adicionar" class="btn-buy"></a></div></div>`).appendTo('#apx_upsell .list');
                limit++;
            }
            
            if(limit == 6 || i == product_ids.length - 1){
                if(limit == 0){
                    $('#apx_upsell').addClass('d-none')
                }
                $('#apx_upsell').removeClass('apx_loading');                                    
            }else{
                i++;
                theme.functions.relatedAjax(product_ids, limit,i);
            }
        }
        
    });
}

theme.pages['pagina-carrinho'] = function(){
    if($('.pagina-carrinho:not(.carrinho-checkout)').length > 0){
        $('<div id="checkout-sidebar"></div>').insertBefore('.acao-editar');
        $('.tabela-carrinho .bg-dark:not(.hidden-phone)').appendTo('#checkout-sidebar');
        
        $('#checkout-sidebar').prepend('<div id="side_subtotal" class="row align-items-center justify-content-between"><div class="col-auto"><strong>Subtotal</strong></div><div class="col-auto place"></div></div>');
        
        let subtotal = $('[data-subtotal-valor]').closest('tr');
        $('[data-subtotal-valor]').appendTo('#side_subtotal .place');

        $('.tabela-carrinho .imagem img').each(function(){
            let src = $(this).attr('src').replace('64x64','200x200');
            $(this).attr('src',src)
        });

        $('.pagina-carrinho .cabecalho-interno h1.titulo').text('Meu Carrinho ('+ ($('[data-produto-id]').length > 0 ? $('[data-produto-id]').length : 0) +')')
        $('.tabela-carrinho').after(`<div id="apx_upsell" class="apx_loading mt-md-5 mb-md-0 my-3"><h4 class="my-4">${theme.lang.aproveite_e_leve_tambem}</h4><div class="list row mx-0"></div></div>`);

        let filter_string = "";
        $('[data-produto-id]').each(function(k_,i_){
            let id = sessionStorage.getItem('main_id_' + $(this).attr('data-produto-id')) ? sessionStorage.getItem('main_id_' + $(this).attr('data-produto-id')) : $(this).attr('data-produto-id');
            
            filter_string = filter_string + (filter_string == "" ? '' : '&') + 'filters[identifier][$in]['+k_+']='+id;
        });
        
        $.ajax({
            url: CMS_PATH + "/products?populate=related_products&" + filter_string,   
            method: 'GET'         
        }).done(function(response){
            if(response.data){
                if(response.data && response.data.length > 0){
                    let product_ids = []
                    $.each(response.data, function(k_, i_){
                        $.each(i_.attributes.related_products, function(k__, i__){
                            product_ids.push(i__.main_product_id);
                        })
                    });

                    let limit = 0;
                    theme.functions.relatedAjax(product_ids, limit,0);
                    // $.each(product_ids, function(k_, i_){
                        
                    // });
                }else{
                    //alert('deu ruim');
                    $('#apx_upsell').addClass('d-none')
                    $('#apx_upsell').removeClass('apx_loading');                                    
                }
                // sessionStorage.setItem('cms_faq',JSON.stringify(response.data.attributes.pages));
                // if(response.data.attributes.pages.find(el => el.title.toLowerCase().trim() == $('body').find('h1').text().toLowerCase().trim())){
                //     page_load = true;
                //     theme.build.faq();
                // }                
            }
        });
        


    }else{
        $('.resumo-compra').hide();
        $.get('/carrinho/minicart', function(response){
            let cart = response.carrinho;
            console.log(cart);
            $('#formularioCheckout').before('<div class="row mb-5"><div class="col-md-8 col-12"><div class="cdsg_box_title d-flex justify-content-between align-items-center px-3 py-2"><strong>Seu Pedido ('+ cart.items.length +')</strong><a href="/carrinho/index">Editar Pedido</a></div><div class="cdsg_cart_resume"></div></div><div class="col-md-4 col-12"><div class="cdsg_cart_info"></div></div></div>')
            
            $.each(cart.items, function(k_, i_){
                let block = $('<div class="options"></div>');
                if(i_.variationTypes && i_.variationTypes.length > 0){
                   $.each(i_.variationTypes, function(k__, opt){
                        if(opt.variations[0].secondaryColor){
                            block.append('<span style="background: linear-gradient( -45deg, '+ opt.variations[0].color+', '+ opt.variations[0].color+' 50%,  '+ opt.variations[0].secondaryColor+' 50% ); "></span>')
                        }else if(opt.variations[0].color){
                            block.append('<span style="background-color:'+ opt.variations[0].color +'"></span>');
                        }else{
                            block.append('<span class="text">'+ opt.variations[0].name +'</span>');
                        }
                   }) ;
                }
                $('.cdsg_cart_resume').append('<div class="col-auto"><div class="item"><span class="imagem" title="'+ i_.name +'"><img src="'+ window.MEDIA_URL + '200x200/'+ i_.images[0].path+'"/>'+ block.prop('outerHTML') +'</span><strong>'+ i_.quantity +'</strong></div></div>')
            });
            
            $('.resumo-compra .bg-dark').appendTo('.cdsg_cart_info');
            if($('.fazer-login-btn').length > 0){
                $('.fazer-login-btn').text('Já Tenho Conta');
                let login = $('.fazer-login-btn').clone();
                $('.fazer-login-btn').closest('legend').html('Identificação');                
                $('[for="id_email"]').append(login);
            }

            $(document).on( "ajaxComplete", function( event, xhr, settings ) {
                if(settings.url.includes("?envio_id=")){
                    $('.cdsg_cart_info .tr-checkout-frete .frete-preco .titulo').text(xhr.responseJSON.valor_frete.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
                    $('.cdsg_cart_info .tr-checkout-frete .frete-preco .muted').hide();
                    $('.cdsg_cart_info .tr-checkout-frete .frete-preco .titulo').show();
                    
                }
            } );
        });
        $('#formularioCheckout .caixa-sombreada').closest('.span4').addClass('checkout-step-block');
        $('.dados-cadastro').closest('.span4').append('<button type="button" class="nextStep">Ir para Entrega</button>');
        $('#formularioEndereco').closest('.caixa-sombreada').closest('.span4').append('<button type="button" class="nextStep">Ir para Pagamento</button>');

        $('.checkout-step-block .caixa-info .cliente-editar-dados-link').appendTo($('.cliente-editar-dados-link').closest('.checkout-step-block').find('fieldset > legend'));
        $('.checkout-step-block #listaEndereco .cliente-editar-dados-link').appendTo($('.checkout-step-block #listaEndereco .cliente-editar-dados-link').closest('fieldset').find('legend'))

        $('.nextStep').click(function(){
            theme.functions.checkoutSteps(this);            
        });

        $('.checkout-step-block').first().find('input').first().each(function(){
            let me = $(this).closest('.checkout-step-block');
            if(theme.functions.validaStep(this) > 0){
                me.find('.nextStep').slideUp();
            }else{
                me.find('.nextStep').slideDown();
            }
        })
        

        // $('#formularioCheckout input').focusout(function(){
        //     let me = $(this).closest('.checkout-step-block');
        //     if(theme.functions.validaStep(this) > 0){
        //         me.find('.nextStep').slideUp();
        //     }else{
        //         me.find('.nextStep').slideDown();
        //     }
        // });
        $('[name="endereco_principal"]').change(function(){
            setTimeout(() => {
                //$('#id_cep').focusout();
            }, 1000);
        });
        $('body').on('change','#formularioCheckout input',function(){            
            let me = $(this).closest('.checkout-step-block');
            if(theme.functions.validaStep(this) > 0){
                me.find('.nextStep').slideUp();
            }else{
                me.find('.nextStep').slideDown();
            }
        })
    }
    theme.functions.checkoutHeader();
    //$(document).ready(function(){
        
        
    //})
}
theme.functions.validaStep = function(oObj){
    let me = $(oObj).closest('.checkout-step-block');
    let error = me.find('.required.error').length;
    let empty = 0;
    me.find('.required input, #formas-envio-wrapper input').each(function(){        
        if(($(this).closest('.tab-pane').length > 0 && $(this).closest('.tab-pane.active').length == 0)
        || ($(this).closest('#userNewAddressInfo').length > 0 && $(this).closest('#userNewAddressInfo').attr('style') != "display: block;")){
            console.log('n valida',$(this).attr('name'))
        }else{
            console.log('valida',$(this).attr('name'))
            if($(this).attr('type') == "radio"){
                console.log('[name="'+ $(this).attr('name') +'"]:checked')
                if($('[name="'+ $(this).attr('name') +'"]:checked').val() == undefined){
                    empty = empty + 1
                    console.log('vazio mesmo')
                }
            }
            // if($(this).attr('name','cep') && $(this).val().length == 0 && $('[name="endereco_principal"]:checked').val() != 0){
            //     console.log('test')
            // }        
            empty = empty + ($(this).val().length  == 0 ? 1 : 0);
        
            
            $(this).val().length == 0 ? console.log('empty',$(this)) : '';
        }
        
    });
    console.log(error, empty)
    return error + empty;
    
}
theme.functions.checkoutSteps = function(oObj){
    let me = $(oObj).closest('.checkout-step-block');
    if(theme.functions.validaStep(oObj) == 0){
        me.addClass('validated');
        $(oObj).slideUp();
        me.next('.checkout-step-block').addClass('available');
        
        let me_ = me.next('.checkout-step-block');
        setTimeout(() => {            
            
            if(theme.functions.validaStep(me_.find('input').first()) > 0){
                me_.find('.nextStep').slideUp();
            }else{
                me_.find('.nextStep').slideDown();
            }            
        }, 1000);
        
        
    }
};

theme.functions.accountHeader = function(){
    let sessionAccount = sessionStorage.getItem('account') && JSON.parse(sessionStorage.getItem('account'));
    //$('.breadcrumbs').after(`<strong class="cdsg_account_header">Olá human${sessionAccount.gender == "m" ? 'o' : 'a'}, ${sessionAccount.userName}!</strong>`)
    $('.breadcrumbs').after(`<strong class="cdsg_account_header">Olá, ${sessionAccount.userName.toUpperCase()}!</strong>`)
    $('.breadcrumbs').remove();
    $('body').addClass('cdsg_account');

    $('a[href="'+ window.location.href +'"]').addClass('active');
    $('a[href$="favorito/listar"]').html('Meus Favoritos <img class="mx-2 d-inline-block" src="'+ CDN_PATH + 'wishlist.svg' +'"/>')

}

theme.pages['pagina-conta'] = function(){
    theme.functions.accountHeader();
    
    $('fieldset .botao.principal').each(function(){
        $(this).appendTo($(this).closest('fieldset').find('legend'));
    });

    
    $('.outros-enderecos fieldset').append('<div class="acao-editar"></div>');
    $('.outros-enderecos legend a').addClass('botao').appendTo('.outros-enderecos .acao-editar');
    

    $('fieldset legend .botao.principal').text('Editar');

    $('.caixa-dados > div > .span6:nth-child(2) > fieldset:first-child ul li').prependTo('.caixa-dados > div > .span6:nth-child(1) > fieldset ul');
    $('.caixa-dados > div > .span6:nth-child(2) > fieldset:first-child').remove()
    $('.outros-enderecos fieldset').insertAfter('.caixa-dados > div > .span6:nth-child(2) > fieldset');
    $('.outros-enderecos').remove();

    $('.caixa-dados > .row-fluid > .span6').toggleClass('span6 col');
    $('.caixa-dados > .row-fluid').addClass('gx-5')
    $('.caixa-dados > .row-fluid').toggleClass('row-fluid row');

}

theme.pages['pagina-pedido-listar'] = function(){
    theme.functions.accountHeader();
    $('.caixa-dados').first().remove();
    $('.caixa-dados h3.titulo').text('Meus Pedidos');

    $('.tabela-pedidos tbody tr').each(function(){
        $(this).find('td:nth-child(3)').attr('data-status',$(this).find('td:nth-child(3)').text().toLowerCase().trim());
        let pedido = $(this).find('td:first-child a').attr('href');
        $(this).find('td:first-child a b').unwrap();

        $(this).append('<td class="action"><button type="button" data-order="'+ pedido +'" onclick="theme.functions.expandOrder(this)" class="expandOrder"><i></i></button></td>');
    });

    $('.tabela-pedidos tbody tr').after('<tr style="display:none;" class="orderExpandResult"><td style="width:100%;flex:1 1 100%;min-width:100%;"></td></tr>');

    $('h4.titulo').remove();

    $('#formFiltroPedido').prepend('<div><strong>Pedidos realizados</strong></div>')

}

theme.pages['pagina-favorito-listar'] = function(){
    theme.functions.accountHeader();
    $('.meus-favoritos img').each(function(){
        let src = $(this).attr('src');
        src = src.replace('64x64/','');
        $(this).attr('src',src);
    });

    $('h3.titulo').html('Meus Favoritos <img class="mx-2 d-inline-block" src="'+ CDN_PATH + 'wishlist.svg' +'"/>');
    
}

theme.functions.expandOrder = function(oObj){
    $(oObj).toggleClass('active');
    let order_path = $(oObj).attr('data-order');
    let box = $(oObj).closest('tr').next('tr.orderExpandResult').find('td');
    if(order_path){
        if(box.is(':empty')){
            $.get(order_path, function(response){
                console.log(response)
                let content = $(response).find('.abas-conteudo').prop('outerHTML');
                box.html(content);
                box.closest('tr').slideToggle();
            });
        }else{
            box.closest('tr').slideToggle();
        }
    }
}

theme.pages['pagina-pedido'] = function(){
    theme.functions.accountHeader();

    

}

theme.pages['pagina-pagina'] = function(){
    let page_title = $('body').find('h1.titulo').text().toLowerCase().trim();
    let page_load = false;

    $('.pagina-pagina').attr('data-page',page_title);
    
    let cms_faq = sessionStorage.getItem('cms_faq');
    if(cms_faq){ 
        cms_faq = JSON.parse(cms_faq);
        if(cms_faq.find(el => el.title.toLowerCase().trim() == page_title)){
            page_load = true;
            theme.build.faq()
        }
    }else{  
        $.ajax({
            url: CMS_PATH + "/faq?populate=pages",   
            method: 'GET'         
        }).done(function(response){
            if(response.data){
                sessionStorage.setItem('cms_faq',JSON.stringify(response.data.attributes.pages));
                if(response.data.attributes.pages.find(el => el.title.toLowerCase().trim() == $('body').find('h1').text().toLowerCase().trim())){
                    page_load = true;
                    theme.build.faq();
                }                
            }
        });
    }  

    
    if(page_title == 'encontre uma loja'){
        let cms_store = sessionStorage.getItem('cms_store');
        if(cms_store){ 
            theme.build.store()            
        }else{  
            $.ajax({
                url: CMS_PATH + "/stores?sort=name",   
                method: 'GET'         
            }).done(function(response){
                if(response.data){
                    sessionStorage.setItem('cms_store',JSON.stringify(response.data));
                    theme.build.store();                                    
                }
            });
        }   
    } 

    if(page_title == 'formulário de contato'){
        theme.build.contact_form_page();                                            
    } 

    if(page_title == 'contato'){
        theme.build.contact_page();                                            
    } 

    if(page_title == 'quem somos'){
        //$('.conteudo').load('http://127.0.0.1:5500/quem_somos.html');                                          
        let html = $('.conteudo .quem_somos').html();
        $('.conteudo').html(html)


        $('#navegacao a').click(function(event) {
            event.preventDefault();

            var target = $($(this).attr('href'));
            if (target.length) {
            var offset = target.offset().top;

            $('html, body').animate({
                scrollTop: offset - 200
            }, 800);
            }
        });

        $('.historia_main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots:false,
            asNavFor: '.historia_nav'
        });
        $('.historia_nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.historia_main',
            dots: true,
            arrows:true,
            prevArrow: '<button type="button" class="apx_arrow prev"><img src="' + CDN_PATH + 'arrow_slider_black_l.svg'  + '"/></button>',
            nextArrow: '<button type="button" class="apx_arrow next"><img src="' + CDN_PATH + 'arrow_slider_black_l.svg'  + '"/></button>'    
        });
    } 
};

theme.functions.flexDestroy = function(oObj){
    var $els = $(oObj);
    $els.each(function() {
        var $el = $(this);
        var $elClean = $el.clone();
    
        $elClean.find('.flex-viewport').children().unwrap();
        $elClean
        .removeClass('flexslider')
        .find('.clone, .flex-direction-nav, .flex-control-nav')
            .remove()
            .end()
        .find('*').removeAttr('style').removeClass(function (index, css) {
            // If element is SVG css has an Object inside (?)
            if (typeof css === 'string') {
            return (css.match(/\bflex\S+/g) || []).join(' ');
            }
        });
    
        $elClean.insertBefore($el);
        $el.remove();
    });
}

theme.pages['pagina-categoria'] = function(){
    $('.secao-banners').prependTo('#corpo');
    $('.breadcrumbs').prependTo('#corpo');
    $('.breadcrumbs').wrap('<div class="conteiner breadcrumbs-no-margin"></div>');

    let category_title = $('h1').text().toUpperCase().trim();
    if(['PARA GATOS','PARA HUMANOS'].includes(category_title)){
        $('.secao-banners').append('<div class="container py-5 cdsg_cat-categoryIconList"><div class="row justify-content-center"><div class="col-md-auto"><div apx_load="categoryIconList" apx_load_prop="'+ category_title +'" class="cdsg_categoryIconList"></div></div></div></div>');
    }

    $('h1').wrap('<div class="apx_categoryTitle"></div>');
    $('.apx_categoryTitle').prependTo($('.apx_categoryTitle').closest('.conteiner'));
    $('.apx_categoryTitle').after('<div class="apx_filters row align-items-center justify-content-between"><div class="filterBy col-md-auto col"></div><div class="sortBy col-md-auto col"><div class="filter" data-type="sort"><button type="button">Ordenar Por</button></div></div></div>')

    $('.filtro-coluna.faceta-preco').remove(); 
    $('.filtro-coluna').each(function(){
        let title = $(this).find('.titulo').text().toUpperCase().trim().replace('FILTRAR POR','').trim();
        let block = $('<div class="filter" data-type="'+ title +'"></div>');
        block.append('<button type="button">'+ title +'</button>');
        block.append($(this).find('ul'));
        block.appendTo('.filterBy');
    });

    $('body').on('click','.apx_filters button',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');            
        }else{
            $('.apx_filters button').removeClass('active');
            $(this).addClass('active');
        }        
    });
    $('#botaoOrdenar + ul a').each(function(){
        $(this).attr('href').includes(window.location.search) ? $(this).addClass('active') : false;
    });
    $('#botaoOrdenar + ul').appendTo('.sortBy > .filter');
    $('.sortBy > .filter ul').attr('class','');

    $('.ordenar-listagem, .coluna.span3').remove();
    $('.conteudo.span9').toggleClass('span9 span12');

    
    

}

theme.pages['pagina-404'] = function(){
    $('#corpo').addClass('pagina-404');
    $('#corpo .secao-principal').html(`<div class="my-md-5 py-md-5"><div class="row justify-content-center align-items-center"><div class="col-6"><img src="${CDN_PATH + '404.svg'}"/></div><div class="col-12 col-md-5"><h1 class="mb-5">${theme.lang.nao_encontrado.titulo}</h1><p>${theme.lang.nao_encontrado.texto}</p></div></div></div>`);
};
theme.pages['pagina-produto'] = function(){
    $('.produto > .row-fluid > .span6:first-child').attr('class','col-md-8 apx_product_left apx_loading');
    $('.produto > .row-fluid > .span6:last-child').attr('class','col-md-4');
    $('.produto > .row-fluid').attr('class','row');

    $('.apx_product_left').empty();        

    //galeria li
    $('.apx_product_left').append('<div class="stage apx_loading apx_gallery"><div class="slider-for"></div><div class="slider-nav"></div></div>');    
    
    //galeria cms
    $('.apx_product_left').append('<div class="apx_loading cms_gallery"></div>');    
    
    
    //video
    $('#buy-together-position1').before('<div class="apx_product_video"></div>');    

    

    //DMF - benefits
    $('#buy-together-position1').before('<div apx_load="benefits" class="cdsg_benefits"></div>');    

    //testimonials
    $('#blank-product-position4').after('<div class="cms_product_testimonials"></div>');    

    let sku = $('.produto .codigo-produto span[itemprop="sku"]').text().trim();
    
    if(theme.isMobile){
        $('.breadcrumbs').prependTo('#corpo');
        $('.cms_gallery').insertBefore($('.parcelas-produto').first());
    }

    //PRODUCT
    $.ajax({
        url: window.API_PRODUCT_PUBLIC_URL + "/" + window.PRODUTO_ID,
        headers: {
            "x-store-id": window.LOJA_ID
        }            
    }).done(function(response){
        if(response.data){
            let product = response.data;  
            theme.functions.productInfo(product); 
            $.each(product.skus, function(k_, i_){
                sessionStorage.setItem('main_id_'+i_.id,window.PRODUTO_ID);
            })            
        }
    });

    //PRODUCT_CMS
    let cms_product = sessionStorage.getItem('cms_product_'+window.PRODUTO_ID);
    cms_product = cms_product == "false" ? false : cms_product;
    if(cms_product){
        theme.functions.productCMSInfo(JSON.parse(cms_product)); 
    }else{
        $.ajax({
            url: CMS_PATH + "/products?filters[identifier][$eq]="+ window.PRODUTO_ID +"&populate=gallery,tabs",   
            method: 'GET'         
        }).done(function(response){
            //alert(response.data.length)
            if(response.data.length > 0){
                cms_product = response.data && response.data[0] && response.data[0].attributes;
                sessionStorage.setItem('cms_product_' + window.PRODUTO_ID,JSON.stringify(cms_product));
                theme.functions.productCMSInfo(cms_product);
            }else{
                sessionStorage.setItem('cms_product_' + window.PRODUTO_ID,false);
                $('.cms_gallery').removeClass('apx_loading')
            }
        });
    }

    //TESTIMONIALS
    let cms_testimonials = sessionStorage.getItem('cms_testimonials_'+sku);
    if(cms_testimonials){
        theme.functions.productTestimonials(JSON.parse(cms_testimonials)); 
    }else{
        $.ajax({
            url: CMS_PATH + "/testimonials?populate[order][fields]=client_name&filters[type][$eq]=product&populate=gallery&[filters][product_sku][$eq]="+ sku +"&sort[0]=publishedAt%3Adesc&sort[1]=rating",   
            method: 'GET'         
        }).done(function(response){
            if(response.data){
                cms_testimonials = response;
                sessionStorage.setItem('cms_testimonials_' + sku,JSON.stringify(cms_testimonials));
                theme.functions.productTestimonials(cms_testimonials);
            }
        });
    }

    $(document).ajaxComplete(function(e, data, opt) {
        if (opt.url.includes('compre_junto')) {
            $('.compre-junto .compre-junto__conteudo').before('<div class="compre_junto-cover"><img src="https://via.placeholder.com/873x752"/></div>')
            $('.compre-junto .compre-junto__conteudo .compre-junto__produtos > *').unwrap();
        }
    });
    

};

theme.lang.products.avaliacoes = "Avaliações"
theme.lang.products.recomendam = "Dos clientes<br>recomendam este produto!";
theme.lang.products.baseado_em = "baseado em";
theme.lang.products.avaliacoes_mais_recentes = "Avaliações mais recentes";

theme.functions.productTestimonials = function(testimonials){
    console.log('productTestimonials',testimonials);
    if(testimonials.data.length > 0){
        $('.cms_product_testimonials').append(`<div class="row mt-5"><div class="col-12"><h2>${theme.lang.products.avaliacoes}</h2></div></div>`)
        $('.cms_product_testimonials').append(`<div class="row mt-3 testimonials_header justify-content-center align-items-start"><div class="col-6 col-md-3"><b class="rating">5</b><div class="rating-stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><div><strong>${theme.lang.products.baseado_em}</strong> ${testimonials.meta.pagination.total} avaliações</div></div><div class="col-6 col-md-3 offset-md-2"><b class="percent">100%</b><span>${theme.lang.products.recomendam}</span></div></div>`);
        $('.cms_product_testimonials').append(`<div class="row mt-5 testimonials_list_header"><div class="col-12"><strong>${theme.lang.products.avaliacoes_mais_recentes}</strong></div></div><hr>`)
        $('.cms_product_testimonials').append('<div class="testimonials_list"></div>');

        $.each(testimonials.data, function(k_, i_){
            let row = $('<div class="row align-items-center item"></div>');
            let col = $('<div class="col-3 col-md-2"></div>');
            col.append(`<b>${i_.attributes.rating}</b><div class="rating-stars"></div>`);

            for(let i = 1; i<= 5; i++){
                if(i <= i_.attributes.rating){
                    if(i_.attributes > i - 1){
                        col.find('.rating-stars').append('<i class="fa fa-star-half"></i>')
                    }else{
                        col.find('.rating-stars').append('<i class="fa fa-star"></i>')
                        
                    }
                    
                }else{
                    col.find('.rating-stars').append('<i class="fa fa-star-o"></i>')
                }
            }
            
            row.append(col);

            col = $('<div class="col-md-10 col-9"></div>');
            i_.attributes.content ? col.append(`<p>${i_.attributes.content}</p>`) : false;
            
            if(i_.attributes.gallery && i_.attributes.gallery.data && i_.attributes.gallery.data.length > 0){
                let gallery = $('<div class="gallery"></div>');
                $.each(i_.attributes.gallery.data, function(k__, i__){
                    gallery.append('<a href="#" data-href="'+ i__.attributes.url + '"><img src="'+ i__.attributes.formats.thumbnail.url+'"></a>');
                });

                col.append(gallery);
            }

            i_.attributes.order && i_.attributes.order.data ? col.append(`<div><strong>${i_.attributes.order.data.attributes.client_name.split(' ')[0]}</strong><small>${theme.functions.formatData(i_.attributes.createdAt)}</small></div>`) : false;

            row.append(col);
            $('.cms_product_testimonials .testimonials_list').append(row);
            $('.cms_product_testimonials .testimonials_list').append('<hr></hr>')
        });
    }

};

theme.functions.formatData = function(dataString) {
    const data = new Date(dataString);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' };
    const dataFormatada = data.toLocaleDateString('pt-BR', options);
    
    return dataFormatada;
}

theme.functions.productInfo = function(info){
    //gallery
    if(info.images.length > 0){
        
        $.each(info.images, function(k_, i_){
            $('.apx_gallery .slider-for').append('<div class="item" data-image-id="'+ i_.id +'"><a href="#"><img src="'+ window.MEDIA_URL + i_.url.slice(1,i_.url.length) +'"/></a></div>')
            $('.apx_gallery .slider-nav').append('<div class="item '+ (k_ == 0 ? 'active': '') +'"><a href="#"><img src="'+ window.MEDIA_URL + i_.url.slice(1,i_.url.length) +'"/></a></div>');
        });

        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            prevArrow: '<button type="button" class="apx_arrow prev"><img src="' + CDN_PATH + 'arrow_slider_black_l.svg' + '"/></button>',
            nextArrow: '<button type="button" class="apx_arrow next"><img src="' + CDN_PATH + 'arrow_slider_black_l.svg' + '"/></button>',
            
        });

        $('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $('.slider-nav .active').removeClass('active');
            $($('.slider-nav .item').get(nextSlide)).addClass('active');            
        });

        if(info.description.youtube_url){
            console.log(info.description.youtube_url);
            $('.apx_gallery').append(`<button onclick="theme.functions.scrollTo('.apx_product_video')" type="button" class="apx_youtube_vid"></button>`);
            $('.apx_product_video').html(`<iframe src="https://www.youtube.com/embed/${info.description.youtube_url.split('?v=')[1]}" controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>`)
        }

        $('.apx_gallery').append('<a class="apx_add_wishlist" href="/conta/favorito/'+ window.PRODUTO_ID+'/adicionar"><img src="'+ CDN_PATH + 'wishlist.svg' +'"/></a>')
        
        $('.apx_gallery').removeClass('apx_loading');
    }
    


    $('.apx_product_left').removeClass('apx_loading');
};
theme.functions.scrollTo = function(target){
    var target = $(target);
    if (target.length) {
    var offset = target.offset().top;

    $('html, body').animate({
        scrollTop: offset - 100
    }, 800);
    }  
};
theme.functions.productCMSInfo = function(info){
    if(info.gallery && info.gallery.data && info.gallery.data.length > 0){
        $.each(info.gallery.data, function(k_, i_){
            $('.cms_gallery').append('<div class="item"><img src="'+ i_.attributes.url +'"/></div>')
        });

        $('.cms_gallery').removeClass('apx_loading');
    }

    if(info.tabs && info.tabs.length > 0){
        $('.principal #DelimiterFloat').after('<div class="cms_tabs"><div class="cms_tabs_header"><h3>Frete e Prazo de Entrega</h3><button type="button"><i class="fa fa-plus"></i></button></div><div class="cms_tabs_content cep_"></div></div>')
        $.each(info.tabs.reverse(), function(k_, i_){
            $('.principal #DelimiterFloat').after('<div class="cms_tabs"><div class="cms_tabs_header"><h3>'+ i_.title +'</h3><button type="button"><i class="fa fa-plus"></i></button></div><div class="cms_tabs_content">'+ i_.content +'</div></div>')
        });

        $('.principal #DelimiterFloat').after('<div class="cms_tabs"><div class="cms_tabs_header"><h3>Detalhes do Produto</h3><button type="button"><i class="fa fa-plus"></i></button></div><div class="cms_tabs_content">'+ $('#descricao').html() +'</div></div>');
        $('.abas-custom').remove();
        $('.cep').appendTo('.cms_tabs_content.cep_');

        $('body').on('click','.cms_tabs .cms_tabs_header button', function(){
            $(this).find('i').toggleClass('fa-plus fa-minus');
            $(this).closest('.cms_tabs').find('.cms_tabs_content').slideToggle();
        });
    }
};

theme.pages['pagina-inicial'] = function(){    
    $('#corpo').prepend('<div class="container" class="cdsg_home-categoryIconList"><div class="row cdsg_categoryIconListHeader"><div class="col-md-8 col-6"><h3>Para Gatos</h3></div><div class="col-md-4 col-6"><h3>Para Humanos</h3></div></div><div class="row"><div class="col-md-8"><div apx_load="categoryIconList" apx_load_prop="PARA GATOS" class="cdsg_categoryIconList"></div></div><div class="col-md-4"><div apx_load="categoryIconList" apx_load_prop="PARA HUMANOS" class="cdsg_categoryIconList"></div></div></div><hr></hr></div>');

    $('.vitrine-mas-vendido, .vitrine-mas-vendido + ul').wrapAll('<div class="box-mais-vendidos"></div>');
    $('.box-mais-vendidos').appendTo('#listagemProdutos');
    $('.secao-secundaria').append('<div class="container"><div apx_load="testimonials" apx_load_prop="store" class="cdsg_testimonials"></div></div>');
    $('.secao-secundaria').append('<div class="container"><div apx_load="benefits" class="cdsg_benefits"></div></div>');
    $('.secao-secundaria').append('<div class="container"><div class="row"><div class="col-12 col-md-8"><div apx_load="blog" class="cdsg_blog"></div></div><div class="col-12 col-md-4"><div apx_load="podcast" class="cdsg_podcast"></div></div></div></div>');
    $('.secao-secundaria').append('<div class="container"><div apx_load="" class="cdsg_benefits"></div></div>');
    $('#rodape').before('<div class="container mt-3 mb-md-5 mb-2 cdsg_instafeed_home"><div class="row align-items-center justify-content-between"><div class="col-auto col-md-auto"><img src="'+ CDN_PATH + 'ico_insta.svg' +'"/></div><div class="col-auto col-md-auto"><b>@canseidesergato</b></div></div><div apx_load="instafeed" class="mt-3"></div></div>');
    
    if(theme.isMobile){
        $('body').on('click','.cdsg_categoryIconListHeader h3',function(){
            let text = $(this).text().trim().toUpperCase();
            $('.cdsg_categoryIconListHeader h3').removeClass('active');
            $(this).addClass('active');
            console.log(text);
            $('.cdsg_categoryIconListHeader + div .cdsg_categoryIconList').removeClass('active');
            $('.cdsg_categoryIconListHeader + div .cdsg_categoryIconList[apx_load_prop="'+text+'"]').addClass('active');
        });
        $('.cdsg_categoryIconListHeader h3').first().click();
    }
};



theme.functions.productListSetColors = function(colors, me){
    let block = $('<div></div>');
    $.each(colors, function(k_, i_){
        if(i_.codes.secondary != null){
            block.append('<span style="background: linear-gradient( -45deg, '+ i_.codes.primary+', '+ i_.codes.primary+' 50%,  '+ i_.codes.secondary+' 50% ); "></span>')
        }else{
            block.append('<span style="background-color:'+ i_.codes.primary +'"></span>');
        }
    });
    me.find('.cdsg_colors').append(block);
};

theme.functions.headerCategoriesDropdown = function(){
    let cms_categories = sessionStorage.getItem('cms_categories');
    if(cms_categories){   
        cms_categories = JSON.parse(cms_categories);
        
        if($('#cabecalho .nivel-um > .com-filho').length > 0){
            $('#cabecalho .nivel-um > .com-filho').each(function(){
                $(this).find('.nivel-dois > li > a').each(function(){
                    let me = $(this);
                    let txt = $(this).text().toLowerCase().trim();
                    let q = cms_categories.find(el => el.attributes.title.toLowerCase().trim() == txt);

                    q ? me.prepend(`<div class="image"><img src="${q.attributes.icon && q.attributes.icon.data && q.attributes.icon.data[0].attributes.url || 'https://via.placeholder.com/111x111'}"/></div>`) : me.prepend(`<div class="image"><img src="https://via.placeholder.com/111x111"/></div>`)
                });
                
                if($(this).closest('#cdsg_mobile_menu').length == 0){
                    $(this).find('.nivel-dois').wrap('<div class="cdsg_dropdown_box container justify-content-between align-items-center"></div>');

                    let me = $(this);
                    let txt = $(this).find('.titulo').text().toLowerCase().trim();
                    let q = cms_categories.find(el => el.attributes.title.toLowerCase().trim() == txt);

                    if(q){
                        if(q.attributes.dropdown_left_banner && q.attributes.dropdown_left_banner.Image && q.attributes.dropdown_left_banner.Image.data){
                            let el = $('<div class="dropdown_left_banner col-auto"></div>');                        
                            let box;
                            if(q.attributes.dropdown_left_banner.url != ""){
                                box = $('<a href="'+ q.attributes.dropdown_left_banner.url +'"></a>');
                            }else{
                                box = $('<div></div>');
                            }

                            q.attributes.dropdown_left_banner.Image.data.attributes.url ? box.append(`<img src="${q.attributes.dropdown_left_banner.Image.data.attributes.url}"/>`) : false;
                            q.attributes.dropdown_left_banner.title ? box.append(`<strong>${q.attributes.dropdown_left_banner.title}</strong>`) : false;
                            q.attributes.dropdown_left_banner.button_text ? box.append(`<button>${q.attributes.dropdown_left_banner.button_text}</button>`) : false;

                            el.append(box);
                            me.children('.cdsg_dropdown_box').prepend(el)
                        }

                        if(q.attributes.dropdown_right_banner && q.attributes.dropdown_right_banner.Image && q.attributes.dropdown_right_banner.Image.data){
                            let el = $('<div class="dropdown_right_banner col-auto"></div>');                        
                            let box;
                            if(q.attributes.dropdown_right_banner.url != ""){
                                box = $('<a href="'+ q.attributes.dropdown_right_banner.url +'"></a>');
                            }else{
                                box = $('<div></div>');
                            }

                            q.attributes.dropdown_right_banner.Image.data.attributes.url ? box.append(`<img src="${q.attributes.dropdown_right_banner.Image.data.attributes.url}"/>`) : false;
                            q.attributes.dropdown_right_banner.title ? box.append(`<strong>${q.attributes.dropdown_right_banner.title}</strong>`) : false;
                            q.attributes.dropdown_right_banner.button_text ? box.append(`<button>${q.attributes.dropdown_right_banner.button_text}</button>`) : false;

                            el.append(box);
                            me.children('.cdsg_dropdown_box').append(el)
                        }
                    }
                }
            });
            // $.each(theme.resources.json.categories, function(k_, i_){
            //     console.log(i_);
            // });
        }
    }else{
        $.ajax({
            url: CMS_PATH + "/categories?populate=deep",   
            method: 'GET'         
        }).done(function(response){
            if(response.data){
                cms_categories = response.data;
                sessionStorage.setItem('cms_categories',JSON.stringify(cms_categories));
                theme.functions.headerCategoriesDropdown();
            }
        });
    }
};

theme.functions.pools = function(){
    let cms_pools = sessionStorage.getItem('cms_pools');
    if(cms_pools){   
        cms_pools = JSON.parse(cms_pools);
        $.each(cms_pools, function(k_, i_){
            let pool = i_.attributes;
            if(($('.'+ pool.show_on).length > 0 || pool.show_on == "anywhere") && !sessionStorage.getItem(`pool_${i_.id}`)){
                let container = $(`<div class="cdsg_pool" data-show_when="${pool.show_when}" style="--text_color:${pool.text_color};--background_color:${pool.background_color};"><button onclick="$(this).closest('.cdsg_pool').addClass('closed').hide();" class="close_"></button></div>`);
                let el = $(`<div class="step_question"><img src="${pool.corner_image.data.attributes.url}" class="corner"/></div>`);
                el.append(`<b class="title">${pool.title}</b>`);
                el.append(`<p class="description">${pool.description}</p>`);

                let answers = $(`<form data-id="${i_.id}"></form>`);
                $.each(pool.answers.data, function(k__, i__){
                    let answer = $(`<div><label><input type="radio" name="answer" value="${i__.id}"/>${i__.attributes.title}</label><small>${i__.attributes.description != null ? i__.attributes.description : ''}</small></div>`)
                    i__.attributes.has_comments == true ? answer.append('<textarea name="answer_text" placeholder="Por favor, descreva aqui o motivo..."></textarea>') : false;
                    answers.append(answer);
                });
                answers.append('<button type="submit">Enviar</button>');
                el.append(answers);
                

                container.append(el);

                el = $('<div class="step_thanks"></div>');
                el.append(`<div><b>${pool.thanks_text}</b><img src="${pool.thanks_image.data.attributes.url}"/></div>`)

                container.append(el);
                container.wrapInner('<div></div>');
                container.appendTo('body');
            }
        });

        $('.cdsg_pool input').change(function(){
            let pool = $(this).closest('.cdsg_pool');
            pool.find('.selected').removeClass('selected')
            $(this).closest('div').addClass('selected')
        });

        $('.cdsg_pool form').submit(function(e){
            e.preventDefault();
            let pool = $(this).closest('.cdsg_pool');
            let value = pool.find('.selected input:checked').val();
            let obs = pool.find('.selected textarea').val();
            let _id = $(this).attr('data-id');

            if(value && _id){
                $.ajax({
                    url: CMS_PATH + "/pool-results",   
                    method: 'post',
                    data : {data :{
                        answer: value,
                        comments: obs || '',
                        pool: _id,                    
                        }
                    }         
                }).done(function(response){
                    pool.find('.step_question').remove();
                    pool.find('.step_thanks').show();
                    sessionStorage.setItem(`pool_${_id}`,true);
                    setTimeout(() => {
                        console.log("Delayed for 1 second.");
                        pool.addClass('closed').fadeOut();
                    }, "2000");
                });
            }else{
                alert('Verifique as opções do formulário e tente novamente, humano.');
            }
            
        });
    }else{
        $.ajax({
            url: CMS_PATH + "/pools?populate=deep",   
            method: 'GET'         
        }).done(function(response){
            if(response.data){
                cms_pools = response.data;
                sessionStorage.setItem('cms_pools',JSON.stringify(cms_pools));
                theme.functions.pools();
            }
        });
    }

    $(window).load(function(){
        setTimeout(() => {
            theme.functions.addEvent(document, 'mouseout', function(evt) {
                if (evt.toElement == null && evt.relatedTarget == null) {
                    $('[data-show_when="exit"]:not(.closed)').show();
                };
            });
        }, "5000");
    })
    
}
theme.functions.addEvent = function (obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

theme.functions.popFunctions = function(){

    $('body').append('<div id="load"></div>');
    $('#load').load('http://127.0.0.1:5500/popfunctions.html')
}
$(document).ready(function(){
    $('.menu [title="OCULTAR"]').closest('li').prev().nextAll().remove();
    $('a[href$="ocultar.html"]').closest('li').prev().nextAll().remove();
    
    theme.init();
    theme.functions.sessionData();
    theme.functions.popFunctions();
    if(theme.currentPage == 'pagina-carrinho' ||
    theme.currentPage == 'pagina-pedido-finalizado'){
        theme.build.checkoutHeader();
        theme.build.checkoutFooter();
    }else{
        theme.build.header();
        theme.build.topbar();
        theme.build.footer();
        theme.build.sideHelp();
        theme.build.productList();
        theme.functions.searchAutoComplete();
    }       
    
    theme.functions.pools();
    
    
    
    
    
    

    if($('.conteudo h1').text().toLowerCase().trim() == "página não encontrada"){
        theme.currentPage = "pagina-404"; 
    }
    try{
        theme.pages[theme.currentPage]();
    }catch(e){
        console.log('Page Function Err: ' + e)
    }


    $('[apx_load]').each(function(){
        let load = $(this).attr('apx_load');
        let me = $(this);
        console.log(me);
        try{
            if(theme.generateContent[load]){                
                $(this).append(theme.generateContent[load](($(this).attr('apx_load_prop') ? $(this).attr('apx_load_prop') : ''),me));
            }
        }catch(e){
            console.log(e);
        }        
    });    
       
    theme.build.sliders();
    theme.build.afterLoad();
});

$(window).load(function(){
    $('[apx_load]:empty').each(function(){
        let load = $(this).attr('apx_load');
        let me = $(this);
        console.log(load, $(this).attr('apx_load_prop'));
        try{
            if(theme.generateContent[load]){                
                $(this).append(theme.generateContent[load](($(this).attr('apx_load_prop') ? $(this).attr('apx_load_prop') : ''),me));
            }
        }catch(e){
            console.log(e);
        }        
    });    
       
    theme.build.sliders();
});

theme.build.afterLoad = function(){
    $('[data-produtos-linha]:not(.slick-slider)').each(function(){
        $(this).find('.nome-produto').equalHeights();
    });    
}


$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


window.onerror = function(error) {
    console.log('err tracking: ' + error + ' - url: ' + window.location + ' - browser: ' + (window.navigator.userAgent + ' | ' + window.navigator.vendor) + ' - datetime: ' + (new Date()));    
};