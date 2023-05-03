function myFunction(x) {
    x.classList.toggle("change");
  }
  
  $(document).ready(function(){
      $('.container').click(function(){
        $('header').toggleClass('toggle');
      });
     
      $(window).on('scroll load',function(){
           $('container').removeClass('fa-times');
           $('header').removeClass('toggle');
      });
    });
  
  
    $('#GetFile').on('click', function () {
      $.ajax({
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/172905/test.pdf',
          method: 'GET',
          xhrFields: {
              responseType: 'blob'
          },
          success: function (data) {
              var a = document.createElement('a');
              var url = window.URL.createObjectURL(data);
              a.href = url;
              a.download = 'SaÃ¢d-eddine ELHIMEUR CV.pdf';
              document.body.append(a);
              a.click();
              a.remove();
              window.URL.revokeObjectURL(url);
          }
      });
  });