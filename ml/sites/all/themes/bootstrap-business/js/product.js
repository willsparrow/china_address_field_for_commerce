(function ($) {
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
                                $(this).children('.views-field-add-to-cart-form').children('.prod-add-to-cart').css("visibility","visible");
                        });
                        $('.product').mouseleave(function(){
                                  setTimeout($(this).children('.views-field-add-to-cart-form').children('.prod-add-to-cart').css("visibility","hidden"),100);
                        });
                }
        };
}(jQuery));
