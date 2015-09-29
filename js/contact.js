$('form[name="contact"]').on('submit', function(e) {
  e.preventDefault();

  var first_name = $('#first_name').val(),
      last_name = $('#last_name').val(),
      email = $('#email').val(),
      message = $('#message').val();

  $.ajax({
      url: "//formspree.io/" + APP.contact_email,
      method: "POST",
      data: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        message: message
      },
      dataType: "json"
  }).done(function(response) {
    if (response.success === "email sent" && _.isFunction(success)) {
      // DO SOMETHING FOR SUCCESS
      return;
    }

    if (_.isFunction(error)) {
      // DO SOMETHING FOR ERROR
    }
  });
});
