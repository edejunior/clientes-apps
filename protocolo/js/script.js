$(document).ready(function() {
	var clientes = ['tst']

	clientes.forEach(function(element) {
	  console.log(element);

	  $.ajax({
	        url: "//coplan.inf.br:5012/protocolo/servlet/approtocolo_info",
	        type: "get",    
	        dataType: "application/json",               
	        complete: function(data) {
	        	console.log(data);        				
	        }
	   });

	});


});

function animateValue(id, start, end, duration) {
      // assumes integer values for start and end
    
    var obj = document.getElementById(id);
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));
    
    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);
    
    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;
  
    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();

}	

function contador(){
	var contar = document.getElementsByClassName("contar");
	var i;
	var interval;
	for (i = 0; i < contar.length; i++) {		
		interval = Math.random() * Math.floor(1000);
		interval += 1000
		animateValue(contar[i].id,0, contar[i].getAttribute('data-value'), interval);		 
	} 
};