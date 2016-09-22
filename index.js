// $('#false-image').on('load', function(){
//   console.log('yes');
//   $('#image-container').css('background-image', 'url(defy_creations_landing_page.jpg)')
// });
$(function(){
  function submit(name, email, callback){
    console.log('working');
    var url = 'https://script.google.com/macros/s/AKfycbyzpCsDOZ9pcIHYvtCQ68xBTxcHIZyPQa7kY6qxyVz04L992cCv/exec';
    var script = document.createElement('SCRIPT');
    script.src = url + '?name=' + name + '&email=' + email;
    script.type = 'application/javascript';
    script.onload = function(){
      script.remove();
      typeof callback === 'function' && callback();
    }
    document.body.appendChild(script);
  }

  $('#submit-button').click(function(){
    var email = $('#email-input').val()
    submit('', email);
    console.log(email);
    $('#email-input').val('Thanks for your support!');

  })
});
