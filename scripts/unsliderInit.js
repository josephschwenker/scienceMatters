jQuery(document).ready(
	function($) {
		$(".banner").unslider(
			{
				autoplay: true,
				nav: false,
				delay: 5000,
				arrows: {
					prev: '<a class="unslider-arrow prev">‹</a>',
					next: '<a class="unslider-arrow next">›</a>'
				}
			}
		)
	}
)