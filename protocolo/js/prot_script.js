$(document).ready(function() {
	var clientes = [
        'https://www.gp.srv.br/protocolo_aguaboa/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_altafloresta/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_altoaraguaia/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_barradogarcas/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_barramansa/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_camponovodoparecis/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_campoverde/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_chapada/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_codema/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_colider/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_cuiabacm/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_dpemt/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_diamantino/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_gauchadonorte/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_guarantadonorte/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_juscimeira/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_lucasdorioverdesaae/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_matupa/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_nortelandia/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_novamutum/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_portalamazonia/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_peixotodeazevedo/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_querencia/servlet/approtocolo_info',        
        'https://www.gp.srv.br/protocolo_servsaude/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_sinop/servlet/approtocolo_info',
        'https://www.gp.srv.br/protocolo_tapurah/servlet/approtocolo_info',        
        'https://www.gp.srv.br/protocolo_rosariooeste/servlet/approtocolo_info',
        'coplan'
        ]

        

    $('.linhas').html("");
    var tempo = 100;

    window.total_processos_geral = 0;
	window.total_processos_hoje = 0;
	window.total_processos_sete_dias = 0;
	window.total_tramites_geral = 0;
	window.total_tramites_hoje = 0;
	window.total_tramites_sete_dias = 0;
	window.total_usuario_cadastrados = 0;
	window.total_setores = 0;
    window.total_email_enviados_hoje = 0;
    window.total_email_enviados = 0;
    window.total_docs_hoje = 0;
    window.total_docs_enviados = 0;

	clientes.forEach(function(element) {   
		if  (element !== 'coplan'){
           
                var settings = {
              "crossDomain": true,
              "url": element,
              "method": "GET",
              "headers": {
                "content-type": "json",
                "cache-control": "no-cache"
              },
              "processData": false            
            }        
            $.ajax(settings).success(function (response) { 
                if (response.total_usuario_cadastrados > 0){
                    addLinha(response);                                  
                    setTimeout(function(){
                        contador(response.unidade_gestora_conn);    
                    },tempo);            
                }                   
            });  
  		
	    }else{
	    	setTimeout(function(){
	    	addTotal();
	    },2000);         
	    }
    });
    	
});

function addTotal(){
	var html = '<div class="box">'+
'   <div class="brasao">'+
'       <img src="https://cdn.municipioweb.com.br/public/images/brasoes/coplan.png">'+
'   </div>'+
'   <div class="content">'+
'       <row class="ug"><h3><a target="_blank" href="#" style="color: black;text-decoration: none; padding: 0; margin: 0;">TOTAL</a></h3></row>'+
'       <row>'+
'           <div class="col">'+
'               <div class="row">'+
'                   <h4 class="campo">Total de processos</h4>'+
'                   <h2 class="valor contar-coplan" data-cliente="coplan" id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+total_processos_geral+'">0</h2>'+
'               </div> '+
'           </div> '+
'           <div class="col">'+
'               <div class="row">'+
'                   <h4 class="campo-sm">Processos Hoje</h4>'+
'                   <h2 class="valor-sm contar-coplan"  data-cliente=" coplan" id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+total_processos_hoje+'">0</h2>'+
'                   <h4 class="campo-sm">Processos 7 Dias</h4>'+
'                   <h2 class="valor-sm contar-coplan" data-cliente=" coplan"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+total_processos_sete_dias+'">0</h2>'+
'               </div> '+
'           </div>'+
'           <div class="col">'+
'               <div class="row">'+
'                   <h4 class="campo">Total de Trâmites</h4>'+
'                   <h2 class="valor contar-coplan" data-cliente=" coplan"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+total_tramites_geral+'">0</h2>'+
'               </div> '+
'           </div> '+
'           <div class="col">'+
'               <div class="row">'+
'                   <h4 class="campo-sm">Trâmites Hoje</h4>'+
'                   <h2 class="valor-sm contar-coplan" data-cliente=" coplan"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+total_tramites_hoje+'">0</h2>'+
'                   <h4 class="campo-sm">Trâmites 7 Dias</h4>'+
'                   <h2 class="valor-sm contar-coplan" data-cliente=" coplan"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+total_tramites_sete_dias+'">0</h2>'+
'               </div> '+
'           </div>  '+
'           <div class="col">'+
'               <div class="row">'+
'                   <h4 class="campo-sm">Usuários Cadastrados</h4>'+
'                   <h2 class="valor-sm contar-coplan" data-cliente=" coplan"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+total_usuario_cadastrados+'">0</h2>'+
'                   <h4 class="campo-sm">Setores Cadastrados</h4>'+
'                   <h2 class="valor-sm contar-coplan" data-cliente=" coplan"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+total_setores+'">0</h2>'+
'               </div> '+
'           </div> '+
'           <div class="col">'+
'               <div class="row">'+
'                   <h4 class="campo-sm">E-mails Enviados Hoje</h4>'+
'                   <h2 class="valor-sm contar-coplan" data-cliente=" coplan"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+total_email_enviados_hoje+'">0</h2>'+
'                   <h4 class="campo-sm">Total de E-mails Enviados</h4>'+
'                   <h2 class="valor-sm contar-coplan" data-cliente=" coplan"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+total_email_enviados+'">0</h2>'+
'               </div> '+
'           </div> '+
'           <div class="col">'+
'               <div class="row">'+
'                   <h4 class="campo-sm">Anexos Hoje</h4>'+
'                   <h2 class="valor-sm contar-coplan" data-cliente=" coplan"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+total_docs_hoje+'">0</h2>'+
'                   <h4 class="campo-sm">Total de Anexos</h4>'+
'                   <h2 class="valor-sm contar-coplan" data-cliente=" coplan"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+total_docs_enviados+'">0</h2>'+
'               </div> '+
'           </div> '+
'       </row>'+
'   </div>'+
'</div>'
    $('.linhas').prepend(html);    
    setTimeout(function(){
        contador('coplan');    
    },1000);
};

function addLinha(JsonElement){    	
	window.total_processos_geral += JsonElement.total_processos_geral;
	window.total_processos_hoje += JsonElement.total_processos_hoje;
	window.total_processos_sete_dias += JsonElement.total_processos_sete_dias;
	window.total_tramites_geral += JsonElement.total_tramites_geral;
	window.total_tramites_hoje += JsonElement.total_tramites_hoje;
	window.total_tramites_sete_dias += JsonElement.total_tramites_sete_dias;
	window.total_usuario_cadastrados += JsonElement.total_usuario_cadastrados;
	window.total_setores += JsonElement.total_setores;
    window.total_email_enviados_hoje += JsonElement.total_email_enviados_hoje;
    window.total_email_enviados += JsonElement.total_email_enviados;
    window.total_docs_hoje += JsonElement.total_docs_hoje;
    window.total_docs_enviados += JsonElement.total_docs_enviados;

    var html = '<div class="box">'+
'   <div class="brasao">'+
'       <img src="https://cdn.municipioweb.com.br/public/images/brasoes/'+JsonElement.unidade_gestora_conn+'.png">'+
'   </div>'+
'   <div class="content">'+
'       <row class="ug"><h3><a target="_blank" href="https://www.gp.srv.br/protocolo_'+JsonElement.unidade_gestora_conn+'/" style="color: black;text-decoration: none; padding: 0; margin: 0;">'+JsonElement.unidade_gestora_descricao+'</a></h3></row>'+
'       <row>'+
'           <div class="col">'+
'               <div class="row">'+
'                   <h4 class="campo">Total de processos</h4>'+
'                   <h2 class="valor contar-'+JsonElement.unidade_gestora_conn+'" data-cliente=" '+JsonElement.unidade_gestora_conn+'" id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+JsonElement.total_processos_geral+'">0</h2>'+
'               </div> '+
'           </div> '+
'           <div class="col">'+
'               <div class="row">'+
'                   <h4 class="campo-sm">Processos Hoje</h4>'+
'                   <h2 class="valor-sm contar-'+JsonElement.unidade_gestora_conn+'"  data-cliente=" '+JsonElement.unidade_gestora_conn+'" id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+JsonElement.total_processos_hoje+'">0</h2>'+
'                   <h4 class="campo-sm">Processos 7 Dias</h4>'+
'                   <h2 class="valor-sm contar-'+JsonElement.unidade_gestora_conn+'" data-cliente=" '+JsonElement.unidade_gestora_conn+'"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+JsonElement.total_processos_sete_dias+'">0</h2>'+
'               </div> '+
'           </div>'+
'           <div class="col">'+
'               <div class="row">'+
'                   <h4 class="campo">Total de Trâmites</h4>'+
'                   <h2 class="valor contar-'+JsonElement.unidade_gestora_conn+'" data-cliente=" '+JsonElement.unidade_gestora_conn+'"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+JsonElement.total_tramites_geral+'">0</h2>'+
'               </div> '+
'           </div> '+
'           <div class="col">'+
'               <div class="row">'+
'                   <h4 class="campo-sm">Trâmites Hoje</h4>'+
'                   <h2 class="valor-sm contar-'+JsonElement.unidade_gestora_conn+'" data-cliente=" '+JsonElement.unidade_gestora_conn+'"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+JsonElement.total_tramites_hoje+'">0</h2>'+
'                   <h4 class="campo-sm">Trâmites 7 Dias</h4>'+
'                   <h2 class="valor-sm contar-'+JsonElement.unidade_gestora_conn+'" data-cliente=" '+JsonElement.unidade_gestora_conn+'"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+JsonElement.total_tramites_sete_dias+'">0</h2>'+
'               </div> '+
'           </div>  '+
'           <div class="col">'+
'               <div class="row">'+
'                   <h4 class="campo-sm">Usuários Cadastrados</h4>'+
'                   <h2 class="valor-sm contar-'+JsonElement.unidade_gestora_conn+'" data-cliente=" '+JsonElement.unidade_gestora_conn+'"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+JsonElement.total_usuario_cadastrados+'">0</h2>'+
'                   <h4 class="campo-sm">Setores Cadastrados</h4>'+
'                   <h2 class="valor-sm contar-'+JsonElement.unidade_gestora_conn+'" data-cliente=" '+JsonElement.unidade_gestora_conn+'"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+JsonElement.total_setores+'">0</h2>'+
'               </div> '+
'           </div> '+
'           <div class="col">'+
'               <div class="row">'+
'                   <h4 class="campo-sm">E-mails Enviados Hoje</h4>'+
'                   <h2 class="valor-sm contar-coplan" data-cliente=" coplan"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+JsonElement.total_email_enviados_hoje+'">0</h2>'+
'                   <h4 class="campo-sm">Total de E-mails Enviados</h4>'+
'                   <h2 class="valor-sm contar-coplan" data-cliente=" coplan"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+JsonElement.total_email_enviados+'">0</h2>'+
'               </div> '+
'           </div> '+
'           <div class="col">'+
'               <div class="row">'+
'                   <h4 class="campo-sm">Anexos Hoje</h4>'+
'                   <h2 class="valor-sm contar-coplan" data-cliente=" coplan"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+JsonElement.total_docs_hoje+'">0</h2>'+
'                   <h4 class="campo-sm">Total de Anexos</h4>'+
'                   <h2 class="valor-sm contar-coplan" data-cliente=" coplan"  id="contador_'+Math.floor(Math.random() * 10000)+'" data-value="'+JsonElement.total_docs_enviados+'">0</h2>'+
'               </div> '+
'           </div> '+
'       </row>'+
'   </div>'+
'</div>'
    $('.linhas').append(html);    
}

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

function contador(cliente){
	var contar = document.getElementsByClassName("contar-"+cliente);
	var i;
	var interval;
	for (i = 0; i < contar.length; i++) {		
		interval = Math.random() * Math.floor(2000);
		interval += 1000
		animateValue(contar[i].id,0, contar[i].getAttribute('data-value'), interval);		 
	} 
};
