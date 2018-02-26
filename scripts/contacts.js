$('.contacts').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
      })
$(window).on('click', function () {
        $('.contacts')
            .removeClass('contacts_active');
})