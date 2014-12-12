(function ($) {
        var timer;
        Drupal.behaviors.bootstrap_businessModifyProductQuanlity = {
                attach: function() {
                        $('.container-product-quanlity div.icon-product-add').click(function(){
                                var quanlityInput = $(this).siblings('div.form-item-quantity').children('input.form-text');
                                //console.log(quanlityInput);
                                quanlityInput.val(parseInt(quanlityInput.val()) + 1);
                        });
                        $('.container-product-quanlity div.icon-product-del').click(function(){
                                var quanlityInput = $(this).siblings('div.form-item-quantity').children('input.form-text');
                                //console.log(quanlityInput);
                                if (parseInt(quanlityInput.val()) > 1){
                                        quanlityInput.val(parseInt(quanlityInput.val()) -1);
                                }
                        });
                }
        };
        Drupal.behaviors.bootstrap_businessDisplayProductAddToCart = {
                attach: function(){
                        $('.product').mouseenter(function(){
                                $(this).children('.views-field-add-to-cart-form').children('.prod-add-to-cart').css("display","block");
                        });
                        $('.product').mouseleave(function(){
                                $(this).children('.views-field-add-to-cart-form').children('.prod-add-to-cart').css("display","none");
                        });
                }
        };
        Drupal.behaviors.bootstrap_businessDisplayMyShopingCart = {
                attach: function(){
                        $('.last').mouseenter(function(){
                                $('#my-shoping-cart').css("display","block");
                        });
                        $('.last').mouseleave(function(){
                                timer = setTimeout(function(){$('#my-shoping-cart').css('display','none')},2000);
                                //console.log(timer);
                        });
                }
        };
        Drupal.behaviors.bootstrap_businessDisplayMyShopingCartView = {
                attach: function(){
                        $('#my-shoping-cart').mouseenter(function(){
                                //console.log(timer);
                                clearTimeout(timer);
                                $('#my-shoping-cart').css("display","block");
                        });
                        $('#my-shoping-cart').mouseleave(function(){
                                timer = setTimeout(function(){$('#my-shoping-cart').css('display','none')},1000);
                                //$('#my-shoping-cart').css("display","none");
                        });
                }
        };
}(jQuery));
