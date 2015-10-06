$(function() {
  var that = this;

  // smooth scroll to anchor & active nav
  $('header li > a').on('click', function(event) {
    event.preventDefault();
    var anchor = $(this);

    $('header li > a').removeClass('active');
    $(this).addClass('active');

    $('html, body').animate({
      scrollTop: $('.' + anchor.attr('href')).offset().top - 75
    }, 1500);
  });

  // sending form thourght formspree
  $('form[name="contact"]').on('submit', function(e) {
    e.preventDefault();

    var first_name = $('#first_name').val(),
        last_name = $('#last_name').val(),
        corporate_name = $('#corporate_name').val(),
        label_people_number = $('#label_people_number').val(),
        email = $('#email').val(),
        phone = $('#phone').val(),
        message = $('#message').val();

    $.ajax({
        url: "//formspree.io/" + APP.contact_email,
        method: "POST",
        data: {
          first_name: first_name,
          last_name: last_name,
          corporate_name: corporate_name,
          label_people_number: label_people_number,
          phone: phone,
          email: email,
          message: message
        },
        dataType: "json"
    }).done(function(response) {
      if (response.success === "email sent" ) {
        // on success
        $('.contact__message.success').show();

        return;
      } else {
        // on error
        $('.contact__message.error').show();
      }
    });
  });
});
