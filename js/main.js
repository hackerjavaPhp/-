; $(document).ready(function(){

	$(".js-faq-title").on("click", function(e){

		e.preventDefault();

		var $this = $(this),
			listGood = "active";

			if(!$this.hasClass(listGood )){
				$(".js-faq-content").slideUp();
				$(".js-faq-title").removeClass(listGood);
			}
				$this.toggleClass(listGood);
				$this.next().slideToggle();
			

		

	});



});