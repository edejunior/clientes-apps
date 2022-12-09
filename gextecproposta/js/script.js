

$(document).ready(function() {
  
	var active  = getCookie('app_tab_active');
	if (active != "") {
		$('#'+active).addClass('active');
		var elem = $('#'+active).children('a').attr('aria-controls');
		$('#'+elem).addClass('active in');
       	$('#'+elem).attr('aria-hidden','false');		
    } else {    	
       $('.fancyTabs li:first-child').addClass('active');       
       var elem = $('.fancyTabs li:first-child').children('a').attr('aria-controls');
       $('#'+elem).addClass('active in');
       $('#'+elem).attr('aria-hidden','false');
    }
	  
    var numItems = $('li.fancyTab').length;	
	
			  if (numItems == 12){
					$("li.fancyTab").width('8.3%');
				}
			  if (numItems == 11){
					$("li.fancyTab").width('9%');
				}
			  if (numItems == 10){
					$("li.fancyTab").width('10%');
				}
			  if (numItems == 9){
					$("li.fancyTab").width('11.1%');
				}
			  if (numItems == 8){
					$("li.fancyTab").width('12.5%');
				}
			  if (numItems == 7){
					$("li.fancyTab").width('14.2%');
				}
			  if (numItems == 6){
					$("li.fancyTab").width('16.666666666666667%');
				}
			  if (numItems == 5){
					$("li.fancyTab").width('20%');
				}
			  if (numItems == 4){
					$("li.fancyTab").width('25%');
				}
			  if (numItems == 3){
					$("li.fancyTab").width('33.3%');
				}
			  if (numItems == 2){
					$("li.fancyTab").width('50%');
				}
		  
	 
	$("li.fancyTab").on('click',function(){			
			setCookie('app_tab_active',$(this).attr('id'),30);					
	});					

	// $.ajax({
 //   		url : "../check.py",
 //   		type: "POST",
 //    	datatype:"JSON",
 //    	data: {'key':'value','key2':'value2'},
 //    	success: function(response){
 //       		console.log(response);
 //    	}
	// });

	//  $.ajaxSetup({ cache: false });
	// // $.ajaxSetup({ async: false })	
	//  $.ajaxSetup({ timeout: 10000 });

var elem;	
	

	              //   $.ajax({
               //      url: "https://helloacm.com/api/can-visit/?url=https://www.gp.srv.br/adm_aguaboa/servlet/login",
               //      type: "get",                    
               //      crossDomain : true,                    
               //      complete : function(data) {
               //      	var retorno = JSON.parse(data.responseText);
               //          console.log(retorno.code);
               //      }
               // });
    verificaOnline();           
    setInterval(function(){ verificaOnline() }, 180000);           
});

function verificaOnline(){
	// console.log('verificaOnline()');

	$('.app-box').each(function() {	
		var elem = $(this);	
		var link = $(this).attr('href');		
		if (link.substring(0, 21) ==="https://www.gp.srv.br"){	
			try{								
				$.ajax({
                    url: "https://helloacm.com/api/can-visit/?url="+elem.attr('href'),
                    type: "get",                    
                    complete : function(data) {
                    	var retorno = JSON.parse(data.responseText);                    	
                    	//console.log(retorno.code + ' - '+link);
                        if (retorno.code !== 200 && retorno.code !== 0){
                        	if (!elem.hasClass('off')){
                        		elem.addClass('off');	
                        	}
                        	elem.css('background-color','#ff00004a');
			        		elem.prop('title','Aplicação Offline/Indisponível');                        
			        	}else{
			        		if (elem.hasClass('off')){
                        		elem.removeClass('off');	
                        	}			        		
			        		elem.prop('title','');
			        	}	
                    }
               });
			}catch(err){			
				console.log(err);
				if (elem.hasClass('off')){
            		elem.removeClass('off');	
            	}                        	
			    elem.prop('title','');
			}
		}
	});	
}

$(window).load(function() {

  $('.fancyTabs').each(function() {

    var highestBox = 0;
    $('.fancyTab a', this).each(function() {

      if ($(this).height() > highestBox)
        highestBox = $(this).height();
    });

    $('.fancyTab a', this).height(highestBox);

  });
});


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}