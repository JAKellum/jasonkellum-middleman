//= require vendor/jquery-3.1.0.min
//= require vendor/modernizr.min
//= require vendor/selectivizr.min
//= require vendor/smoothState
//= require vendor/windows.min

$(document).ready(function() {
  var hookEvents = function() {
    $('#nav-icon').click(function() {
       $('.overlay').slideToggle( 'show' );
       $(this).toggleClass('open');
    });

    if ($('.div-toggler').length > 0) {

      $('select.div-toggler').change(function() {
        var target = $(this).data('target');
        $(target).children().addClass('hide');

        var show = $("option:selected", this).data('show');
        $(show).removeClass('hide');
      });
    }
  }

  var options = {
    prefetch: true,
    cacheLength: 2,
    onStart: {
      duration: 250, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        $container.addClass('is-exiting');

        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');

        // Inject the new content
        $container.html($newContent);

        hookEvents();
      }
    },
    onBefore: function($currentTarget, $container) {
      $('#nav-icon').off('click');
    }
  };

  window.smoothState = $('#main').smoothState(options).data('smoothState');
  hookEvents();
});
