(function ($) {
	Drupal.behaviors.bootstrap_businessModifyProductQuanlity = {
		attach: function() {
			$('.container-product-quanlity div.icon-product-add').click(function(){
				var quanlityInput = $(this).siblings('div.form-item-quantity').children('input.form-text');
				console.log(quanlityInput);
				quanlityInput.val(parseInt(quanlityInput.val()) + 1);
			});
			$('.container-product-quanlity div.icon-product-del').click(function(){
				var quanlityInput = $(this).siblings('div.form-item-quantity').children('input.form-text');
				console.log(quanlityInput);
				quanlityInput.val(parseInt(quanlityInput.val()) - 1);
			});
		}
	};
}(jQuery));
