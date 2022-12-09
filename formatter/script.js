$(document).ready(function() {		
	$('#texto_orig').focusout(function(){		
		formata_1();
	});
});

function formata_1(){        
    switch($('.sel').val()) {
      case "1":
        // code block
        identa();
        break;
      case "2":
        // code block
        replacealan();
        break;      
    };

	
}

function identa(){
    var linhas = $('#texto_orig').val().split('\n');
    var maiorLinha = 0; 
    var indexMaior = 0;     
    var equalsign = 0;
    var word = '';  
    var separador = '';
    $.each(linhas, function(index, item) {
        word = item.replace(/\s/g,'');
        separador = word.indexOf("+=") > 0 ? '+=' : '=';
        equalsign = word.indexOf(separador);
        indexMaior = equalsign > maiorLinha ? index : indexMaior;
        maiorLinha = equalsign > maiorLinha ? equalsign : maiorLinha;
    });    
    
    maiorLinha +=1;
    var text_out = ''
    var linhaItens;
    var fWord;
    var i;
    $.each(linhas, function(index, item) {       
        word = item.replace(/\s/g,''); 
        separador = word.indexOf("+=") > 0 ? '+=' : '=';            
        equalsign = word.indexOf(separador);
        linhaItens = word.split(separador);
        fWord = linhaItens[0].replace(/(^\s+)|(\s+$)/g,'');
        if (equalsign>1) {                              
            i = fWord.length;                       
            do{
                fWord = fWord+ ' ';
                i++;
            }while  (i<maiorLinha);         
            fWord = fWord + '\t'+separador+' '+linhaItens[1].replace(/(^\s+)|(\s+$)/g,'');
            text_out += fWord.replace(/(^\s+)|(\s+$)/g,'')+'\n';    
        }else{
            text_out += item.replace(/(^\s+)|(\s+$)/g,'')+'\n';
        }       
        
    });
    $('#texto_resu').val(text_out);
}

function replacealan(){
    var str = $('#texto_orig').val()
    var substituir = [];
    substituir.push("for each");
    substituir.push("do case");
    substituir.push("endfor");
    substituir.push("sub ");
    substituir.push("endsub");
    substituir.push("case ");
    substituir.push("endcase");
    substituir.push("Where");
    substituir.push("when none");
    substituir.push("exit");
    substituir.push("print");
    substituir.push("Do '");    
    substituir.push("Do'");
    substituir.push("if ");    
    substituir.push("else");
    substituir.push("endif");
    substituir.push("enddo");
    substituir.push("true");
    substituir.push("false");   
    substituir.push("Eject");   
    substituir.push("Do While");      
    substituir.push("when not");      
    substituir.push("order ");      
    substituir.push("when ");      
    
    var len = substituir.length;

    for (var i = 0; i < len; i++) {
        var replace = substituir[i];
        var re = new RegExp(replace,"gi");
        
        str = str.replace(re,substituir[i].toUpperCase());        
    }


    $('#texto_resu').val(str);
}

function copyText() {
  /* Get the text field */
  var copyText = document.getElementById("texto_resu");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("Copy");
}