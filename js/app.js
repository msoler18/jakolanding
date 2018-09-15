
  $(".main").onepage_scroll({
     sectionContainer: "section",     
     easing: "ease",                  
                                      
     animationTime: 1000,             
     pagination: true,                
     updateURL: false,                
     beforeMove: function(index) {},  
     afterMove: function(index) {},   
     direction: "vertical"            
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

    /* Animate meeting square */
    let tl7 = new TimelineMax({repeat:30, repeatDelay:-1});
    tl7.to("#ms-square-meeting", 100, {x:400});