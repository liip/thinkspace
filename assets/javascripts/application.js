$(function() {
  // open burger nav
  $('nav .icon').on('click', function() {
    if ($(this).hasClass('icon-burger')) {
      burgerNavOpen();
    } else {
      burgerNavClose();
    }
  });

  burgerNavOpen= function() {
    $('.icon-burger').css('background-image', 'url(./assets/images/burger-close.png)');
    $('.icon-burger').removeClass('icon-burger').addClass('icon-close');
    $('header.fixed-nav').animate({ 'height': '290px' }, 1000);
    $('nav > ul').removeClass('list-inline').removeClass('hide-xs');
    $('.locale ul').removeClass('hide-xs');
  }

  // close burger nav
  burgerNavClose = function() {
    $('.icon-close').css('background-image', 'url(./assets/images/burger-open.png)');
    $('.icon-close').removeClass('icon-close').addClass('icon-burger');
    $('header.fixed-nav').animate({ 'height': '77px' }, 1000);
    $('nav > ul, .locale > ul').addClass('hide-xs');
  }

  // smooth scroll to anchor & active nav
  $('header li > a.scrollto, .packages--contact').on('click', function(event) {
    event.preventDefault();
    var anchor = $(this);

    burgerNavClose();

    $('header li > a.scrollto').removeClass('active');
    $(this).addClass('active');

    $('html, body').animate({
      scrollTop: $('.' + anchor.attr('href')).offset().top - 75
    }, 2000);
  });

  // sending form thourght formspree
  $('form[name="contact"]').on('submit', function(e) {
    e.preventDefault();

    // hide notice message
    $('.contact__message').hide();

    var name = $('#name').val(),
        corporate_name = $('#corporate_name').val(),
        email = $('#email').val(),
        phone = $('#phone').val(),
        message = $('#message').val();

    $.ajax({
        url: "//formspree.io/" + APP.contact_email,
        method: "POST",
        data: {
          name: name,
          corporate_name: corporate_name,
          phone: phone,
          email: email,
          message: message
        },
        dataType: "json"
    }).done(function(response) {
      if (response.success === "email sent" ) {
        // on success
        $('.contact__message.success').show();
        $('form[name="contact"]').fadeOut(500);

        return;
      } else {
        // on error
        $('.contact__message.error').show();
        $(document).scrollTop( $(".contact__message").offset().top - 100);
      }
    });
  });

    // google map
    var marker;

    function initMap() {
      var myLatLng = {lat: 46.519276, lng: 6.638259};

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        scrollwheel:  false,
        disableDefaultUI: true,
        center: myLatLng
      });

      marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: myLatLng
      });

      marker.addListener('click', toggleBounce);
    }

    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    google.maps.event.addDomListener(window, 'load', initMap);
});

// update range slider form
function outputUpdate(vol) {
  document.querySelector('#label_people_number').value = vol;
}
