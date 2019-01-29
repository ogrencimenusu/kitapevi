$(document).ready(function() {
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true
        },
        callbacks: {

            buildControls: function() {
                // re-appends controls inside the main container
                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
            }
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });

    var content = $('#firmalar'),
        tab = $('#filters a');

    content.isotope({
        filter: '.RveB',
        animationOptions: {
            duration: 1000
        }
    });

    tab.on('click', function(e){
        tab.removeClass('active').filter(this).addClass('active');

        var filter = $(this).data('filter');

        content.isotope({
            filter: filter,
            animationOptions: {
                duration: 1000
            }
        });
        e.preventDefault();
    });

});