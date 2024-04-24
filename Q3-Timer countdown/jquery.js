$(document).ready(function(){
    // $('#simple_timer').syotimer({
    //     date: new Date(2035, 4, 9, 20, 30),
    //     periodic: true,
    //     periodInterval: 3,
    //     periodUnit: 'm'
    //   });

      $('#periodic_timer_days').syotimer({
        date: new Date(2035, 4, 9, 20, 30),
        headTitle: '<h3>Timer with header and footer. Countdown is over</h3>',
        footTitle: '<i style="color: brown;">Footer of timer.</i>',
      });

      $('#simple_timer').syotimer({
        date: new Date("2024-05-01T18:00:00.000+02:00"),
      });
});