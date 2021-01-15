$(document).ready(function() {



    ///////////
    // 	MAKE PHONE IN THE HEADER CLICK TO CALL
    ///////////
    if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var ttdPhoneNumber = $('#CTCPhoneNumber').text();
        ttdPhoneNumber = ttdPhoneNumber.replace(/\ /g, '');
        ttdPhoneNumber = ttdPhoneNumber.replace(/\(/g, '');
        ttdPhoneNumber = ttdPhoneNumber.replace(/\)/g, '');
        ttdPhoneNumber = ttdPhoneNumber.replace(/\-/g, '');

        $('#CTCPhoneNumber').wrapInner('<a href="" style="text-decoration:none !important; color: inherit !important;"></a>');
        $('#CTCPhoneNumber').find('a').attr('href', 'tel:' + ttdPhoneNumber);

        // mobile click-to-call
        $('.mtx_buscontact .value').addClass('click-to-call');
        $('.click-to-call').each(function() {
            var ctcNumber = $(this).text();
            $(this).html('<a href="tel:' + ctcNumber + '" rel="nofollow" style="text-decoration: none; color: currentColor;">' + ctcNumber + '</a>');
        })
    }



    ///////////
    // 	ECOMM CLEANUP
    ///////////	
    if (window.location.href.indexOf("SecureCart") > -1) {
        $(".mtrx_ecom_layout > table > tbody > tr:first-child , .mtrx_ecom_layout > table > tbody > tr:nth-child(2) > td:first-child").css("display", "none");
    }
    $("#webcom_ecomm_category_title").click(function(e) {

        $('#webcom_ecomm_category_title').toggleClass('rsp_active');
        $('#cats').toggleClass('rsp_active');
        e.preventDefault();
    });

    ///////////
    // MOBILE VIEWPORT FIX
    ///////////

    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');

    ///////////
    // HIDE AUTO GENERATED <br>'S WHEN ADDING NEW CONTENT BLOCK
    ///////////

    $('br[style="clear: both;"]').css("display", "none");
    $('br[style="clear:both;"]').css("display", "none");


    ///////////
    // STRIP HARDCODED IMAGE HEIGHTS AND WIDTHS
    ///////////

    $('img').each(function() {
        $(this).removeAttr('width')
        $(this).removeAttr('height');
    });


    ///////////
    // 	DUPLICATE NAV TO USE FOR SLIDE OUT NAVIGATION
    ///////////

    $("#navContainer").clone().attr('id', 'slide-navContainer').appendTo("body");

    ///////////
    // CREATE STICKY NAV 
    ///////////
    $("#navContainer").clone().attr('id', 'sticky-navContainer').appendTo("body");
    var stickyTop = $(".header").outerHeight(true) + $("#navContainer").outerHeight(true) + 150;

    $(window).scroll(function() {
        if ($(window).scrollTop() > stickyTop) {
            $('#sticky-navContainer').css('top', '0');

        } else {
            $('#sticky-navContainer').css('top', '-120px');
        }
    });

    $("#sticky-navContainer").addClass("primaryColorbg");
    $('#sticky-navContainer').each(function() {
        $('#nav', this).wrapAll('<div class="section"></div>')
    });


    ///////////
    //	iOS REMOVE FIXED BG
    ///////////
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        $('html, body, .fullwidthStatic, table, td, div').css('background-attachment', 'scroll');
    }

    ///////////
    // 	REMOVE ANY <P> and <br> TAGS AFTER THE MAP EMBED
    ///////////

    $('div[id*="webcom-component-map"]').parent().find('p').remove();
    $('div[id*="webcom-component-map"]').parent().find('br').remove();

    ///////////
    // 	RESPONSIVE EMBEDDED VIDEOS
    //  fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids
    ///////////

    ! function(e, t) { "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t : e.fluidvids = t() }(this, function() {
        "use strict";

        function e(e) { return new RegExp("^(https?:)?//(?:" + d.players.join("|") + ").*$", "i").test(e) }

        function t(e, t) { return parseInt(e, 10) / parseInt(t, 10) * 100 + "%" }

        function i(i) {
            if ((e(i.src) || e(i.data)) && !i.getAttribute("data-fluidvids")) {
                var n = document.createElement("div");
                i.parentNode.insertBefore(n, i), i.className += (i.className ? " " : "") + "fluidvids-item", i.setAttribute("data-fluidvids", "loaded"), n.className += "fluidvids", n.style.paddingTop = t(i.height, i.width), n.appendChild(i)
            }
        }

        function n() {
            var e = document.createElement("div");
            e.innerHTML = "<p>x</p><style>" + o + "</style>", r.appendChild(e.childNodes[1])
        }
        var d = { selector: ["iframe", "object"], players: ["www.youtube.com", "player.vimeo.com"] },
            o = [".fluidvids {", "width: 100%; max-width: 100%; position: relative;", "}", ".fluidvids-item {", "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;", "}"].join(""),
            r = document.head || document.getElementsByTagName("head")[0];
        return d.render = function() { for (var e = document.querySelectorAll(d.selector.join()), t = e.length; t--;) i(e[t]) }, d.init = function(e) {
            for (var t in e) d[t] = e[t];
            d.render(), n()
        }, d
    });



    ///////////
    // 	FIX COUPON OVERFLOW
    ///////////
    $('.wsp_print_btn').parent().parent().addClass('coupon-clear');


    ///////////
    // 	BACKGROUND-COVER IE6-8 SUPPORT
    // 	Library homepage: https://github.com/Metafalica/background-size-emu
    ///////////

    ///////////
    // 	RESPONSIVE DATA TABLES
    ///////////	
    var sheet = (function() {
        // Create the <style> tag
        var style = document.createElement("style");

        // Add a media (and/or media query) here if you'd like!
        // style.setAttribute("media", "screen")
        style.setAttribute("media", "only screen and (max-width : 768px)")

        // WebKit hack :(
        style.appendChild(document.createTextNode(""));

        // Add the <style> element to the page
        document.head.appendChild(style);

        return style.sheet;
    })();

    $('.responsiveTable tr:first').addClass('tableHeader');
    $('.tableHeader td, .tableHeader th').addClass('colHeader');
    $('.responsiveTable').each(function() {
        var i = 0;
        var tableID = '#' + $(this).attr("id");
        if (tableID == '#undefined') {
            tableID = '';
        }
        $(this).find("td").each(function() {
            var heading = $(this).closest('table').find(".tableHeader .colHeader").eq(i).html();
            if (heading == '' || heading == 'undefined' || !heading) {
                heading = $(this).closest('table').find(".tableHeader .colHeader").eq(i).html();
            }
            i++;
            sheet.insertRule(tableID + '.responsiveTable td:nth-of-type(' + i + '):before {content: "' + heading + '"; font-weight:bold;}', 0);
        });
    });
});
$(window).on("load resize", function(e) {


    ///////////
    // HEADER TOP PADDING
    ///////////
    $("#layout .section").first().css("padding-top", "");


    ///////////
    // NAV SELECT DROPDOWN
    ///////////


    $('.primary-webcomMenu li').css("text-indent", "0");


    $("#navContainer #slideout-menu-toggle, #sticky-navContainer #slideout-menu-toggle").remove();
    var width = 0;
    var navwidth = $('#styleNav').width();
    navwidth = navwidth - 115;
    var stickywidth = $('.section').width();
    stickywidth = stickywidth - 115;
    var toowide = 'no';

    pagewidth = window.innerWidth;
    if (pagewidth <= 768) {
        toowide = 'yes';
        $("#navContainer ul:first > li, #sticky-navContainer ul:first > li").each(function() {
            $(this).css("display", "none");
        });
    } else {
        $("#navContainer ul:first > li").each(function() {
            width = width + $(this).outerWidth(true);
            if (width < navwidth) {
                toowide = 'no';
                $(this).css("display", "block");
            }
            if (width > navwidth) {
                toowide = 'yes';
                $(this).css("display", "none");
            }
        });
        width = 0;
        $("#sticky-navContainer ul:first > li").each(function() {
            width = width + $(this).outerWidth(true);
            if (width < stickywidth) {
                toowide = 'no';
                $(this).css("display", "block");
            }
            if (width > stickywidth) {
                toowide = 'yes';
                $(this).css("display", "none");
            }
        });
    }
    if (toowide == 'yes') {
        $('#navContainer .primary-webcomMenu, #sticky-navContainer .primary-webcomMenu').append("<li id='slideout-menu-toggle' class='hamburger'><a href='#' id='nav-toggle' ><span></span><div></div></a></li>");
    }

    ///////////
    // SLIDE OUT MENU TOGGLE
    ///////////		

    $("#slideout-menu-toggle, .close").click(function(e) {
        var distance = $('#slide-navContainer').css('right');

        if (distance == "auto" || distance == "0px") {
            $('#slide-navContainer').animate({ "right": "-250px" }, "slow");
        } else {
            $('#slide-navContainer').animate({ "right": "0px" }, "slow");
        }

        e.preventDefault();
    });
});

window['matrixMiscInfo'].partnerId = 'wdc_difm';
window['matrixMiscInfo'].isPublish = true

WebCom.ResourceLoader.setShared(true);
WebCom.ResourceLoader.setSecure(false);
WebCom.ResourceLoader.loadLib('com.jquery', '', true);
WebCom.ResourceLoader.loadLib('com.web.components.navigation', '1.1', true);
WebCom.ResourceLoader.loadLib('com.web.core', '', true);
WebCom.ResourceLoader.loadLib('com.jqueryvalidate', '', true);
WebCom.ResourceLoader.loadLib('com.web.components.form', '1.0', true);
WebCom.ResourceLoader.loadLib('com.web.components.footercontact', '1.0', true);
WebCom.ResourceLoader.flushResourcesQueue();

jQuery(document).ready(function() {
    WebCom.ResourceLoader.setDocumentClosed(true);
    WebCom.Components.Navigation.init({ "styleNav": { "primary": { "orientation": "horizontal", "height": 72, "animation": { "effect": "none", "speed": "none" }, "decoration": { "stretch": "horizontal" }, "button": { "height": 72, "width": "auto", "stretch": "horizontal", "bullet": "none" }, "singleline": true, "width": 960 }, "secondary": { "position": { "offsetV": 0, "offsetH": 0, "reference": "self" }, "orientation": "vertical", "animation": { "effect": "none", "speed": "default" }, "decoration": { "stretch": "vertical" }, "button": { "width": "auto", "stretch": "vertical", "bullet": "none" }, "direction": { "y": "down", "x": "right" }, "delay": "fast", "type": "flyout" } } });
    WebCom.Components.Form.renderInstances([{ "id": "webcom-component-form-4232608176302751", "componentData": { "form": { "template": "InformationRequest", "id": "webcom-layout-area", "title": "", "formProcessorUrl": "#", "description": "", "settings": { "emailDelivery": "copy", "formType": "form", "formId": 1444336668405, "form2db": false, "isSecure": false, "postSubmission": { "message": "Thanks for your submission!", "errorValue": "Oops! There was a problem submitting your form. Please try again.", "type": "showMessage", "url": "http://yourdomain.com/thankyou.html" }, "formatting": { "useCustomStyle": false, "errorMsgColor": "#c70202", "postSubmissionMsgColor": "", "requiredTextColor": "#c70202", "label": { "fontWeight": "", "color": "", "fontFace": "", "size": "" }, "formAlignment": "" } }, "name": "Information Request", "creationTime": "2015-10-08T16:37:56", "elements": [{ "validators": [], "height": "medium", "isRequired": true, "toolTip": "", "width": "large", "name": "name", "children": [{ "height": "medium", "validators": [], "isRequired": true, "name": "FirstName", "width": "medium", "children": [], "label": "First Name", "type": "TextBox", "defaultValue": "", "options": {} }, { "height": "medium", "validators": [], "isRequired": true, "name": "LastName", "width": "medium", "children": [], "label": "Last Name", "type": "TextBox", "defaultValue": "", "options": {} }], "label": "Name", "defaultValue": "", "type": "PersonName", "options": {} }, { "validators": [], "height": "medium", "isRequired": true, "width": "large", "name": "email", "children": [], "label": "Email", "defaultValue": "", "type": "TextBox", "options": {} }, { "validators": [], "height": "medium", "isRequired": true, "width": "large", "name": "PhoneNumber", "children": [], "label": "Phone Number", "defaultValue": "", "type": "TextBox", "options": {} }, { "validators": [], "height": "large", "isRequired": true, "toolTip": "", "maxChar": "", "width": "large", "name": "comments", "value": "", "children": [], "label": "Comments", "type": "TextArea", "defaultValue": "", "options": {} }, { "validators": [], "height": "medium", "isRequired": false, "width": "medium", "name": "formClientName", "children": [], "label": "Client number", "defaultValue": "", "type": "TextBox", "options": {} }, { "validators": [], "height": "medium", "isRequired": false, "width": "small", "name": "Submit", "value": "Submit", "children": [], "label": "Untitled", "defaultValue": "", "type": "Submit", "options": {} }] } }, "miscData": { "q": "7EdfoRk7I10OsHdQamvklPrUivktm1KkGixgvFOKGid768TItp9Im3WbVsvh6dMI1k0hI/d7libb\r\nQ9ZL5zBvPmBF1QhxLizd4qClxBQXevpkB2uoBXN6SzzqDrBJ9M39RhvwVrTl8nXnejltd9gsT8CN\r\nJaMWTz5OPTwZBHJY/qwXCuHe0BAPk/SVmbcosr5Tbor6zzbVPZZFLKcYYUZ4MetRFbMw848zkAcz\r\nvMyQK6oKjJAUufAadk9R/deurY+NcVafd+CUkh13tXlMcrEUsUbXyNJApLTyQJEcefC5nvkDLDGs\r\no413GN4gBNTciIf65T9bsOBW6056qzV35j4BNFX7mbACasOr4g5aocysd6h+xD3uAubT+4zxLDHd\r\n2pVhCSvNMI1iAXYtvgGHzxClHN+11vTvQbVhFvMz9Iyh3hfZjsAOjOD3ZRTkgLi6qhBhE/PNq039\r\nWVEafnO6oXAoaKcb24YHhHxDcDrrDKqwfOQcI8Zfbxpsftx9YvGSVo6j2Nvrg4fookTbtn4UD5Cx\r\n1W7g0ZMR8bDjmksod4ncEsKm6KwkFArElAPxeoDDVjwKvWQ+a/kjjTX1b0qkyb4m3TN9Ixnsz/hr\r\narquv9oHYtXuoEuiQMivoB1KsCpM9rsgG8NeGa7HPT0k9iVuKmlj/Nw69ftnFiOncT7Qs7nQob+t\r\nMdFkaivkj5B/BywWMz7E1uaPSyqP9O5amFe9EmHWLe6msuOK4SaPjLBCPdVDX6RBl6O+8SOnUK7s\r\nW0yS5DQmGxVUb3C0+JBxZ8dvniiU7FuOyNqTXC4Gc6jLWXzwlFjOE2SGmEQhrmqoYCivR40REraW\r\nUonE7H9LWJQVc875fgOdfr8VtZ3V/owOalZIIc4uyvBPngRqKHUmFGFDaFau+JezYgOe95aChh7U\r\nuhfi/JnXxEFCQOQ7I2AsBLAfOwQ9fqfMibQyQ1tKsVbmRMBygs/XInAIWvwuVKNFkQbvbt9kul+N\r\nsojrzCCmpU8szZBiyphHX3kUs6j9BH2URsF45JHLHFr35QPj4Tf0nOFQkmWwvUysNcOYiG3r07LT\r\nLo8pwcCQOmbOy7I01YKQ6P8jjOkPOogKGSM/Z4PbdJd35t9SBZXCbJmiuFYgWgqyl5Xp7cGmxwhN\r\nbOjlEXW+6ymwLSXtim4lwksCmkzsbuso75aoQLXpznpryRstrx2zpWIllxePxS08B6vObHAxlVl1\r\np8p+j4YwywGCSRMO6ap3kxj8TZJ841cjnuA7ej4RpznhsxwMmIxhJhcxdQOIjBv3C2QsACL7FXhT\r\nHoYhAEdv9ty6GHUBjjgEP5sU2qS5gmHmjuITKcDgqPHtRWuF+VE4irlot+NxJauRKv3T7YKkYEEW\r\n3baMPygtjbzZ/+ijoY0L4Fddtjpu6cnxGUJp8qeQXmcDekY3f3vgbf3i8Inzhs2c0EnKHVsAqa8F\r\no6iInHMD3KLFw1BfsbSXD2glgusYNHa3e2fwSkaOcxRqbKjHjAVjmlMBc8WCf0oNyEWnGM6prqVs\r\nsJiOsRtspmkzkJbhTBT1wSwq4MJi3f8KYboogHuaEB9Gb07sa6V4i0LkpRid4AeFgy+RUEhCjUJs\r\nKMg+gHDbsSkhdZyF+/b9FPesSNMgW+TfJJMN4pUGezOJEBhaEg0zxAzz5b+25HtrxA/sJIXUG+jj\r\nuiXNILBh4E3bvBaNs+EZoVKktx01rtkVoyaZhc7pUat25hWlANB2fUpwXOT3zN0xbwpGnvKCs1XD\r\nQm20e13GQOf/vq8l+S9/dQ8dBWAX2SGZZ7pBbLFIx+U+sg3rokNPKNLtk9SChbdHtrr/elH1++n/\r\nQ17WHjQulQhMjP2izlELmFDD9WeCHaS2Mir8mgttY7LqyLQHKG7yRFfvpm1J5FvW055Av+2PSqgl\r\nihE+YIl0LgD6PojR0rhTJ5Zip0dXsRYNUxVy2w7l/I4PXeH0wyFDHsx92gU0KPrS0UMQ2+on4ess\r\n8fok+zq9l7T2/mq3U8HKlM1TbkyjpwJw4gPDoza5qvD9eOl2Bgpl1w+yWArZ543G1CJJ+os7+dJT\r\n0cKhsAWGnfqWyfzjfvoH5kpkEJgcMRNGvNButtKTGyMzTCXpiH2DyRwt/FOFC93lRtT/R6Ixl5Se\r\nBAsA0n9Jw7ql/2w1N5kr4SMB28KKdB4hlzchsw2FmVZk2bOekL+YKzSFiCKpJeYzBhPsGUqD2GIW\r\nwdhAONghcebLpJNG6hPyl5Q7JcmlhXXdEkW/HgF+FVdnhavIiNdUPSj0CbkfIUSYPGyWr1uSXRmt\r\nDvyhQvMFy9nafzO+CUttD2Ss+iMKaaB0487MmThByurFThwdgOAILT55evDsk7hd2gLzFxS/OtmK\r\nio7SWks9c2RnrhG8I/aqpYLkyJWwzxTiKtPheQrBNsndtiEBs2Ydc1HYd/fMKBreMI7MmOsR43Vv\r\nPBETGtFM/KCfRTna/C76yWvPeDWmr2NrIR19yFfy2WsK2k3DQIPQVWliOpR+LB+yX35BKVCHWUE0\r\nIL6c0SpMURDtRzzsMc5bfVnz8AwtVyo7kLii/DMIWkc8B83lvCLoWBJQMymA7MM3B9jwJf2RHEHm\r\nMMVaV5UbvM3BDIWSfr0s9pZbvILSNVTrxO2Pc9HxDqmB4+GYcYXFpkjY6VPTxh1Uup8Lm7NhyQhJ\r\nhp1k4hiwHFoVF5EpArm5OMRtCw1TOYGQSzSCCwCphdsCYRT+2SRcN6kqBcNeuH4+f8pIFpi+3Yf7\r\n3VfHDQr0x6cUCq1lIe9ew8Rb0G6OzNQntWKx+9hWjpqFZvfFYl9h6Ogn+wcLkTQtx3VAPl43IR0h\r\nRnl1j+qp9jgvbuGG7wzOn7NdQ/48PnCVgL8CdJlyuT9GzStIYSN5zLjJguKJvnw2vn4vXAhx/ZQZ\r\nvz4jbm/RDn1DoOpGopHMLMwZv0+roUkTgMAHmgvwQQYHDl8JNXr14o9KgJ+noSlutZG4oRtIH14H\r\nOGdeqzMZha5VZ+5iUWY9Zbh64GkQWtYm/H4f8nCqzVKWh2u+SThf/5tOAKYEewPpqWOTIgh06HfX\r\nmFd6Yw7Gp1B7xJJqZuNR4tl5UbeEYoqlXmAgZpN0FbJJ7vDwNUZfMLWSjGmrZtBiTT5AuIfVb9Rt\r\nfVzd2NJbt3UNqu31nZLRoUwRZKe8/+NiScCX3TPD5d9h8GphSYdhRqV2R64BspjeiMvUJZZ+DK+S\r\n9407eOevNQoCfmSkmjRPgEZ+E3GGrhQlyu8PO/Rz+dYDQi5V2wg83baDJBN7o4UUj2Vm0PL5JDeB\r\noMeZ66/Ym08BJVDeIZ4AekP94FxMjk2R92Qq9L44TrbxI2zIyCDDbke9pXIr+g6CJRo+aIpmIWcZ\r\nkC3/wvaZCiKRKHC/TaUgAKEypL3y36zpwt7QFU1jV1UbcrETbHfxsn2SCrBASzDGFS2B5P4BL6wi\r\nVq60TqDl1h9t2ybIQILjdCiaoNorsNgWaWX7npbq6EFhHvnWkuB7LC4q2kmfZkzUlCK3Q7UWF0aG\r\nRvM5pjPDxppAVkzCtM9A1saBJpD5Lp1YflPm+SAfRCJ5Z7fP6Mk1N07XBsNe6gTGuBQrDe4CGkJ1\r\nq8n8dy+ENDWkKgvamnpf2TpErWH5zih5T2ax90/aiohoQgW08f4l2F9ehOuFxPetXmhnOWz7RbFI\r\nrkhTC9XrcVF1FgbnnYpSQVcHsTeZ4HUPXTfhnol+kSXDV2Ev8uSNavTyQ1zXWLUanHbG9vZ3PlMA\r\nJXPEJyqyzZ8MuZ8yKCFCXtzA04leAcMUqwHRzH6OZsDSY3O9hkly/hzLCJOMhYAO4LkZZQf07X82\r\nb5G6IJacARAgp6p1slkJrdmJpR+5gA2XzYAhrM95gfRdV6ymB0yDLEsRYPifUiUXIJpB4+7yxZF3\r\n0Nl6x8B9fXOMRbrcxoeK4/2sAH/U+xbBsV4K6TanBgSzmFhh6miCM+PQO+Kp13P/pIAe4LOXWE+J\r\nCozncdv56zjvwLe4A5LSqdDw5eA6TycCJc3YwzgXue94byKoUS/AsyGLWeqOGhxbd+iRD6eCBG1h\r\nhMOBwGtgtV2yzKiext8VzbgUlQh91v7aS6gpuz7hrDBk0IFzM2s+yygCrgmxmqEdBEDbgwstgld6\r\nia1B+arrOv+fVSm6Pg5hy5KUzDBQWqeZjmurZg91YkVqMyRA7XEmAUNqqZ3E5gA53rqZJom0m78Q\r\narmkoM4rO2BMipqgFVIQPh2y0PBO5Tyhz/Eadli6AXd1igNjli655DDrBfakTjnSCZR7623mxyQb\r\n2UvNKFonGGJoP1s9sXgbhTLDe0gNFHpMHj0CnslYXdEo2DPCxZhKRh6mrAZCHegchizXvR8zeg+u\r\nrRlSN77usLnOq9LNPuF4ZWFvhPFwMVxdrp1Tmul+xKebu4Z4cTFqlJm89vSotOK0ks3beomQ0gSH\r\nNWK0RyLs/33CXK9IuYLxcKuNvfqiqBWhISbMF0ePOtuIZkSXNkR9D/VI0yJzpv0/eFUJZEtxsMqV\r\n0QV9Jgu+Lkly4sTmSKosWbjkAajmXRBNJFAiKDdPm3NoMAleB2djhStwlTNJTCbjXo3OEvA8ljjK\r\nLCBekILm0Bwb+5F27NVrOAAP+jGetKlhDq/Cb5jfJAYx56PgvZsMrbrgs//GcwcQiwPiZqW7Bylk\r\ndjgMsB8aSVpzc+FjrTpD+7j3xizsouLwlvfKVviSYXdZ43+tfQyvtrAiN9CGsq1ArTqFX57o5ixB\r\nkx7QcdJm2hLZ2/cGlI++oPc3Mi/QJEw28G/eW4g97ZtaYCnmTWPu5Rv+sSdWitMGNn3UiVvCAgMN\r\n20tGyClJcPDlKn+3w7vwBsaGKN5iqRTjB2ayHZ3qyD70oQ+APVq8S4FC7J1gt9dxCIsDMnuJ59JH\r\nULsLHZ2KVl2LfRsKLPIXpj8BlXnE8FMsWiO6if1Zm0Mng4UuzSmiaKcewWXRbnzAYEO4fqupqmps\r\nE0dhgxdjl7U3OdFeV/O53CZUk9df+BSzKFpLFjVTNnAUOjL1ycyoFJ26cIp2/BhifX3xIIfekUIq\r\nyYW/VacqHEjiedQCHAGvQbi+WTqMFXl6rQs/R4sJJBYC4ulL4U9JwXkYnd51gcLsf9VEn0Cs+Ye8\r\n8EopKiejLMZAUpPlKkh6ollzgkEIsGXZUuex9Gpzoue/OA4Smg==", "renderMode": "Publish" } }]);
});