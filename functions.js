//EQUAL HEIGHTS
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);

const CDN_PATH = "https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/";
const CMS_PATH = "https://cms-cdsg.up.railway.app/api";


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
    return theme.headerMenu;
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

theme.generateContent.load_img = function(prop, oObj){
    let el = $('<img src="'+ CDN_PATH + prop +'"/>');

    return el;
};

theme.generateContent.social = function(prop, oObj){
    let el = $('<div>Nos acompanhe <div>'+ theme.socialIcons +'</div></div>');
    return el;
};


theme.generateContent.logo_fixed = function(prop, oObj){
    let el = $(theme.logo);
    el.find('img').attr('src',CDN_PATH + 'logo_fixo.svg');
    return el;
};

theme.generateContent.menu_extra = function(prop, oObj){
    let el = $('<nav class="d-flex align-items-center row"></nav>');
    el.append('<div class="col px-md-4"><a href="#">Blog</a></div>');
    el.append('<div class="col px-md-4"><a href="#">Atendimento</a></div>');
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
    el.append('<div class="col"><button class="cdsg_search_trigger" type="button"><img src="'+ CDN_PATH + 'search.svg' +'"/></button><div apx_load="search"></div></div>');
    el.append('<div class="col"><a href="#"><img src="'+ CDN_PATH + 'wishlist.svg' +'"/></a></div>');
    el.append('<div class="col"><a href="#"><img src="'+ CDN_PATH + 'user.svg' +'"/></a></div>');
    el.append('<div class="col">'+ theme.headerCart +'</a></div>');
    el.find('.carrinho .icon-shopping-cart').before('<img src="'+ CDN_PATH + 'cart.svg' +'"/>');
    el.find('.carrinho .icon-shopping-cart').remove();
    return el.prop('outerHTML');
};

theme.generateContent.search = function(prop, oObj){
    let el = $('<div class="container"><button class="cdsg_search_trigger" type="button"></div>');
    el.append('<div class="cdsg_search_form"><form id="form-buscar" action="/buscar" method="get"><button class="botao botao-busca" aria-label="Buscar"><img src="'+ CDN_PATH + 'search_green.svg' +'"/></button><input id="auto-complete" type="text" name="q" placeholder="O que procuras, humano?" value="" autocomplete="off" maxlength="255" class="ui-autocomplete-input"><button type="button" class="clear_list"></button></form></div>');
    el.append('<div class="cdsg_results"> <div class="row"> <div class="col-12 results-products"> <div class="row justify-content-between align-items-center count"></div><div class="row list"></div></div><div class="d-none col-12 results-blog-posts"> <div class="row count"></div><div class="row list"></div></div></div></div>');
    el.append('<div class="cdsg_suggestion"></div>');
    
    return el.prop('outerHTML');
};


theme.generateContent.instafeed = function(prop, oObj){
    let el = $('<div class=""></div>');
    let instafeed = sessionStorage.getItem('instafeed');
    if(instafeed){    
        instafeed = JSON.parse(instafeed);        
        el.append(theme.functions.instafeed(instafeed));
        oObj.html(el.prop('outerHTML'));
    }else{
        $.ajax({
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
    let el = $('<div class="cdsg_sideHelp"> <div class="triggers"> <div> <button type="button"><i></i><span> Ajuda? </span> </button> <div class="cdsg_sideHelp-menu"> <div> <div> <div apx_load="load_img" apx_load_prop="ball.svg"></div><b>Rastrear Pedido</b> </div><button type="button" class="close"> </div></div><div apx_load="form_rastreio"></div><div apx_load="side_options"></div></div><a href="#"> <div apx_load="load_img" apx_load_prop="side_whatsapp.svg"></div></a> </div></div>');
    el.appendTo('body');
}

theme.build.topbar = function(){
    $('#cdsg_header_default').prepend('<div class="cdsg_topbar py-md-3"></div>');
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
                        let box = $('<div class="col-12 col-md-2"></div></div>');
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
        i_.icon != null && i_.icon.data != null ? item.append('<img src="'+ i_.icon.data.attributes.url +'"/>') : false;
        i_.text != null ? item.append('<span>'+ i_.text +'</span>') : false;
        i_.url != null ? item.innerWrap('<a href="'+ i_.url +'"></a>') : false;

        list.append(item);      
    });
    return list;
}


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
            header_fixed.find('[apx_load="search"]').removeClass('visible');
        } else {
            header_fixed.addClass('visible');
        }
    });

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
    $('#cdsg_footer').html(`<div class="container mt-5">` +
        `<div class="row align-items-start justify-content-between">` +
            `<div class="col-auto">` +
                `<h4>${theme.lang.footer.duvidas}</h4>` +
                `<div apx_load="menu_footer" apx_load_prop="DÚVIDAS?"></div>` +
            `</div>` +
            `<div class="col-auto">` +
                `<h4>${theme.lang.footer.institucional}</h4>` +
                `<div apx_load="menu_footer" apx_load_prop="O CANSEI DE SER GATO"></div>` +
                `<h4>Onde encontrar nossos produtos</h4>` +
                `<div apx_load="find_where_form"></div>` +
                
            `</div>` +
            `<div class="col-auto">` +
                `<h4>${theme.lang.footer.fale_conosco}</h4>` +
                `<p>${theme.lang.footer.fale_conosco_text}</p>` +
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
                `</div>` +
            `</div>` +
        `</div>` +
    `</div>` +
    `<hr></hr>` +
    `<div class="container footer_bottom pb-4">` +
        `<div class="row align-items-center justify-content-between">` +
            `<div class="col-auto d-flex align-items-center">` +
                `<h4 class="me-md-4">${theme.lang.footer.pagamento}</h4>` +
                `<div apx_load="footer_payments"></div>` +
            `</div>` +
            `<div class="col-auto d-flex align-items-center">` +
                `<h4 class="me-md-4">${theme.lang.footer.seguranca}</h4>` +
                `<div apx_load="footer_secure"></div>` +
            `</div>` +
        `</div>` +
    `</div>`);
   
};

theme.build.sliders = function(){
    $('.cdsg_list_side_banner').next('div').find('[data-produtos-linha]:not(.slick-slider)').slick({
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            }
        ],
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: "<button type=\"button\" class=\"apx_arrow prev\"><img src=\"https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/arrow_slider_black_l.svg\"/></button>",
        nextArrow: "<button type=\"button\" class=\"apx_arrow next\"><img src=\"https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/arrow_slider_black_l.svg\"/></button>"
    });

    //$('[data-produtos-linha].slick-slider .nome-produto').css('height','auto');
        

    $('.pagina-inicial').find('[data-produtos-linha]:not(.slick-slider)').slick({
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            }
        ],
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: "<button type=\"button\" class=\"apx_arrow prev\"><img src=\"https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/arrow_slider_black_l.svg\"/></button>",
        nextArrow: "<button type=\"button\" class=\"apx_arrow next\"><img src=\"https://cdn.jsdelivr.net/gh/Cansei-De-Ser-Gato/li_cdsg/assets/arrow_slider_black_l.svg\"/></button>"
    });

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
    return `<div class="col-12 col-md-auto cdsg_side_page_bar"><b class="d-block mb-1">Ficou com alguma dúvida? Fale comigo!</b><br><p class="d-block mb-3">Compre ou tire suas dúvidas por WhatsApp</p><div class="row align-items-center"> <div class="col-auto"> <div class="row align-items-center"> <div class="col-auto"> <div apx_load="load_img" apx_load_prop="footer_whatsapp.svg"></div></div><div class="col-auto"> <div apx_load="contact_phone" class="mb-2"></div><div apx_load="contact_hour"></div></div></div></div><div class="col-auto"> <div apx_load="load_img" apx_load_prop="whatsapp_qrcode.png"></div></div></div><div class="row mt-4"> <div class="col-12"> <div class="row align-items-center"> <div class="col-auto"> <div apx_load="load_img" apx_load_prop="footer_email.svg"></div></div><div class="col-auto"> <div apx_load="contact_mail"></div></div></div></div></div><img class="side_img" src="${CDN_PATH + 'gato_pages__.png'}"/></div>`;
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
            let page = theme.resources.json.pages.find(el => el.name.toLowerCase().trim() == i_.attributes.title.toLowerCase().trim());
            if(page){
                faq.append(`<li><a href="${page.url}">${page.name}</a></li>`);
            }
        })
    }

    el.append('<div class="col-12 col-md-auto">'+faq.prop('outerHTML')+'</div>');
    el.append('<div class="col-md-5 col-12 cdsg_faq_content">'+ currentContent +'</div>');
    el.append(theme.functions.sidePage());
    $('#corpo .secao-principal').html('<div class="container"><div class="cdsg_faq_title"><strong>'+ theme.lang.faq.titulo +'</strong></div>'+el.prop('outerHTML')+'</div>');

}

theme.lang.store = [];
theme.lang.store.title = "Lojas Petz";
theme.build.store = function(){
    let currentContent = $('#corpo .secao-principal .caixa-sombreada > div').html();
    let el = $('<div class="row align-items-start justify-content-between"></div>');

    let cms_store = sessionStorage.getItem('cms_store');
    let stores = $('<ul id="cdsg_stores"></ul>');
    if(cms_store){
        // cms_faq = JSON.parse(cms_faq);        
        // $.each(cms_faq, function(k_, i_){
        //     let page = theme.resources.json.pages.find(el => el.name.toLowerCase().trim() == i_.attributes.title.toLowerCase().trim());
        //     if(page){
        //         faq.append(`<li><a href="${page.url}">${page.name}</a></li>`);
        //     }
        // })
    }

    //el.append('<div class="col-12 col-md-auto">'+faq.prop('outerHTML')+'</div>');
    el.append('<div class="col-md-3 col-12"><h1>'+ theme.lang.store.title +'</h1>'+ currentContent +'</div>');
    //el.append(theme.functions.sidePage());
    $('#corpo .secao-principal').html('<div class="container">'+el.prop('outerHTML')+'</div>');
};

theme.pages['pagina-pagina'] = function(){
    let page_title = $('body').find('h1').text().toLowerCase().trim();
    let page_load = false;
    
    let cms_faq = sessionStorage.getItem('cms_faq');
    if(cms_faq){ 
        cms_faq = JSON.parse(cms_faq);
        if(cms_faq.find(el => el.attributes.title.toLowerCase().trim() == page_title)){
            page_load = true;
            theme.build.faq()
        }
    }else{  
        $.ajax({
            url: CMS_PATH + "/faqs?sort=order",   
            method: 'GET'         
        }).done(function(response){
            if(response.data){
                sessionStorage.setItem('cms_faq',JSON.stringify(response.data));
                if(response.data.find(el => el.attributes.title.toLowerCase().trim() == $('body').find('h1').text().toLowerCase().trim())){
                    page_load = true;
                    theme.build.faq();
                }                
            }
        });
    }  

    //alert(page_title)
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
};

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
    $('.apx_categoryTitle').after('<div class="apx_filters row align-items-center justify-content-between"><div class="filterBy col-auto"></div><div class="sortBy col-auto"><div class="filter" data-type="sort"><button type="button">Ordenar Por</button></div></div></div>')

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
    $('#buy-together-position1').before('<div class="cms_product_testimonials"></div>');    

    let sku = $('.produto .codigo-produto span[itemprop="sku"]').text().trim();
    
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
        }
    });

    //PRODUCT_CMS
    let cms_product = sessionStorage.getItem('cms_product_'+sku);
    if(cms_product){
        theme.functions.productCMSInfo(JSON.parse(cms_product)); 
    }else{
        $.ajax({
            url: CMS_PATH + "/products?filters[identifier][$eq]="+ sku +"&populate=gallery",   
            method: 'GET'         
        }).done(function(response){
            if(response.data){
                cms_product = response.data && response.data[0] && response.data[0].attributes;
                sessionStorage.setItem('cms_product_' + sku,JSON.stringify(cms_product));
                theme.functions.productCMSInfo(cms_product);
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
            let col = $('<div class="col-2"></div>');
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

            col = $('<div class="col-10"></div>');
            i_.attributes.content ? col.append(`<p>${i_.attributes.content}</p>`) : false;
            
            if(i_.attributes.gallery && i_.attributes.gallery.data && i_.attributes.gallery.data.length > 0){
                let gallery = $('<div class="gallery"></div>');
                $.each(i_.attributes.gallery.data, function(k__, i__){
                    gallery.append('<a href="#" data-href="'+ i__.attributes.url + '"><img src="'+ i__.attributes.formats.thumbnail.url+'"></a>');
                });

                col.append(gallery);
            }

            i_.attributes.order && i_.attributes.order.data ? col.append(`<div><strong>${i_.attributes.order.data.attributes.client_name}</strong><small>${theme.functions.formatData(i_.attributes.createdAt)}</small></div>`) : false;

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
    console.log('productInfo',info);

    
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
            $('.apx_gallery').append('<button type="button" class="apx_youtube_vid"></button>');
        }

        $('.apx_gallery').append('<a class="apx_add_wishlist" href="/conta/favorito/'+ window.PRODUTO_ID+'/adicionar"><img src="'+ CDN_PATH + 'wishlist.svg' +'"/></a>')
        
        $('.apx_gallery').removeClass('apx_loading');
    }
    


    $('.apx_product_left').removeClass('apx_loading');
};

theme.functions.productCMSInfo = function(info){
    console.log('productCMSInfo',info)
    if(info.gallery && info.gallery.data && info.gallery.data.length > 0){
        $.each(info.gallery.data, function(k_, i_){
            $('.cms_gallery').append('<div class="item"><img src="'+ i_.attributes.url +'"/></div>')
        });

        $('.cms_gallery').removeClass('apx_loading');
    }
};

theme.pages['pagina-inicial'] = function(){    
    $('#corpo').prepend('<div class="container" class="cdsg_home-categoryIconList"><div class="row cdsg_categoryIconListHeader"><div class="col-md-8"><h3>Para Gatos</h3></div><div class="col-md-4"><h3>Para Humanos</h3></div></div><div class="row"><div class="col-md-8"><div apx_load="categoryIconList" apx_load_prop="PARA GATOS" class="cdsg_categoryIconList"></div></div><div class="col-md-4"><div apx_load="categoryIconList" apx_load_prop="PARA HUMANOS" class="cdsg_categoryIconList"></div></div></div><hr></hr></div>');

    $('.vitrine-mas-vendido, .vitrine-mas-vendido + ul').wrapAll('<div class="box-mais-vendidos"></div>');
    $('.box-mais-vendidos').appendTo('#listagemProdutos');
    $('.secao-secundaria').append('<div class="container"><div apx_load="testimonials" apx_load_prop="store" class="cdsg_testimonials"></div></div>');
    $('.secao-secundaria').append('<div class="container"><div apx_load="benefits" class="cdsg_benefits"></div></div>');
    $('.secao-secundaria').append('<div class="container"><div class="row"><div class="col-12 col-md-8"><div apx_load="blog" class="cdsg_blog"></div></div><div class="col-12 col-md-4"><div apx_load="podcast" class="cdsg_podcast"></div></div></div></div>');
    $('.secao-secundaria').append('<div class="container"><div apx_load="" class="cdsg_benefits"></div></div>');
    $('#rodape').before('<div class="container mt-3 mb-5 cdsg_instafeed_home"><div class="row align-items-center justify-content-between"><div class="col-12 col-md-auto"><img src="'+ CDN_PATH + 'ico_insta.svg' +'"/></div><div class="col-12 col-md-auto"><b>@canseidesergato</b></div></div><div apx_load="instafeed" class="mt-3"></div></div>');
    
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
            })
            $.each(theme.resources.json.categories, function(k_, i_){
                console.log(i_);
            });
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


$(document).ready(function(){
    theme.init();
    theme.build.header();
    theme.build.topbar();
    theme.build.footer();
    theme.build.productList();
    theme.build.sideHelp();
    theme.functions.searchAutoComplete();
    
    

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