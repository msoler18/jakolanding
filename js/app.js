
  $(".main").onepage_scroll({
     sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
     easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                      // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
     animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
     pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
     updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
     beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
     afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
     loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
     keyboard: true,                  // You can activate the keyboard controls
     responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                      // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                      // the browser's width is less than 600, the fallback will kick in.
     direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
  });


  /* Animate Logo */
  TweenMax.from(".ms-logo-jako",3,{x:300,opacity:0,scale:0.5});

  /* Animated one feather */
  let tl = new TimelineMax({repeat:30, repeatDelay:1});
  tl.to(".ms-feather-animated-1", 10, {skewX: 45,rotation: 360});

  /* Animated Header Largest Bird */
  let tl2 = new TimelineMax({repeatDelay:1});
  tl2.to(".ms-bird-animated-1", 90 ,{x: 600,y:-100,yPercent: 50,skewX: 10,skewY: 10});

  /* Little Bird Two Header */
  let tl3 = new TimelineMax({repeat:30, repeatDelay:1});
  tl3.to(".ms-feather-animated-3", 10, {rotation:40});

  /* Animated two feather */
  let tl4 = new TimelineMax({repeat:30, repeatDelay:1});
  tl4.to(".ms-feather-animated-2", 40, {rotation:80,y:30,x:300});


  /* Animated two largest bird */
  let tl5 = new TimelineMax({repeat:30, repeatDelay:-1});
  tl5.to(".ms-bird-animated-2", 200, {x: -900,y:400,skewX: 10,skewY: 10});

  /* Animated Feather apoya */
  let tl6 = new TimelineMax({repeat:30, repeatDelay:-1});
  tl6.to("#last-feather", 100, {x: -900,y:400,skewX: 10,skewY: 10});
