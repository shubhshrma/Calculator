$(document).ready(function(){
	
	function updateScreen(value){
		if($("#screen").text()==='0')
			$("#screen").html(value);
		else	
		$("#screen").append(value);
	}


	function update(value){
		var text=$("#screen").text();
		if(Number(value)>=0 && Number(value)<=9 )
			updateScreen(value);
		else if(value.match(/[+\-*/%\.=]/))
		{
			
			
			if((value)=='.'  ){
				if(text.search(/\./)!==-1 ){
					if(text.split('.').length-1<2 && text.search(/\.[0-9]+[+\-*/%]/)!==-1)
						updateScreen(value);
				}
				else
					updateScreen(value);
			}

			else if( text.search(/[+\-*/%=]/)!==-1 ){
				if(value=='=')
					$("#screen").html(eval(text));
				else if(text[text.length-1].match(/[+\-*/%]/))
				{}
				else
				$("#screen").html(eval(text)+value);

			}
			else
				updateScreen(value);

							
		}
		else if(value=='ac')
			$("#screen").html(0);
		else if(value=='ce'){
			if(text.length==1)
				$("#screen").html(0);
			else
			$("#screen").html(text.substring(0,text.length-1));
			
		}


	}

	$("button").on("click",function(){

		update(this.id);
	
	});
});