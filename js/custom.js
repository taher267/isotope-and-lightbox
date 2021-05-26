(function ($) {
    "use strict";
    /***********************
     *  Gallery Isotope  *
     ***********************/
    $('.gallery-outer ul.tabs li:first').addClass('active');
	$(".gallery-outer ul.tabs li span").on('click',function(){
        $('.gallery-outer ul.tabs li').removeClass('active');
        $(this).parent().addClass('active');
    });
    var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
    	var weight = $( itemElem ).find('.weight').text();
   	 	return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
    }
    });
	 
    // filter functions
    var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
    }
    };
    // bind filter button click
    $('.gallery-outer .tabs').on( 'click', 'span', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
    });
	
	 setInterval(function(){ $grid.isotope(); }, 300);

    /***********************
     *  class Schedule Tabs  *
     ***********************/
    $('.classSch-outer .tab_container').hide();
    $('.classSch-outer .tab_container:first').show();
    $('.classSch-outer ul.tabs li:first').addClass('active');
	$(".classSch-outer ul.tabs li a").on('click',function(){
        $('.classSch-outer ul.tabs li').removeClass('active');
        $(this).parent().addClass('active');
        var currentTab = $(this).attr('href');
        $('.classSch-outer .tab_container').hide();
        $(currentTab).show();
        return false;
    });
    /***********************
     *  Flicker Box  *
     ***********************/
    var gallery = $('.flicker-box a').simpleLightbox();
    /***********************
     *  Our Gallery Box  *
     ***********************/
    var gallery = $('.gallery-list a').simpleLightbox();


})(jQuery);
