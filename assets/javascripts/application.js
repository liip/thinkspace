$(function() {

  /**
   * Toggle nav
   */
  function toggleNav() {
    var $hamburgerBtn = $('#toggleNav');

    // Do not alter the navigation on desktop
    if ($hamburgerBtn.is(':hidden')) return;

    $hamburgerBtn.find('.icon').toggleClass('icon-burger icon-close');
    $('.fixed-nav__collapse').slideToggle();
  }

  $(document).on('click', '#toggleNav', toggleNav);


  /**
   * smooth scroll to anchor & active nav
   */
  var animation;

  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();

    var $target = $(e.currentTarget),
        hash = $target.attr('href'),
        $container = $(hash);

    if ($target.closest('.main-nav').length) {
      toggleNav();
    }

    if (animation) {
      animation.stop();
    }

    animation = $('html, body').animate({
      scrollTop: $container.offset().top - 74
    }, 1000);
  });


  /**
   * sending contact form throught Formspree
   */
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
      url: '//forsdfgmspree.io/' + APP.contact_email,
      method: 'POST',
      data: {
        name: name,
        corporate_name: corporate_name,
        phone: phone,
        email: email,
        message: message
      },
      dataType: 'json',
      success: function() {
        $('.contact__message.success').show();
        $('form[name="contact"]').fadeOut(500);
      },
      error: function() {
        $('.contact__message.error').show();
        $(document).scrollTop( $('.contact__message').offset().top - 100);
      }
    });
  });


  /**
   * Google Map
   */
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
