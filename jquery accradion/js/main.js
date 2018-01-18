; $(document).ready(function(){

	$(".js-faq-title").on("click", function(e){

		e.preventDefault();

		var $this = $(this),
			listGood = "active",
			$thisHref = $this.attr("href");

			if(!$this.hasClass(listGood)){
				$(".js-faq-content").slideUp();
				$($this).removeClass("active");
			}

			$($this).toggleClass("active");
			$($thisHref).slideToggle();
			

		

	});



});