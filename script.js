$(document).ready(function(){
	
	function updateScreen(value){
		if($("#result").text()==='0' && !value.match(/[+\-*/%\.]/))
			$("#result").html(value);
		else	
		$("#result").append(value);
	}


	function update(value){
		var text=$("#result").text();
		
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
					$("#result").html(eval(text));
				else if(text[text.length-1].match(/[+\-*/%]/))
				{}
				else
				$("#result").html(eval(text)+value);

			}

			else if(value=="=" && text.search(/=/)==-1)
			{
			}

			else
				updateScreen(value);

							
		}
		else if(value=='ac')
			$("#result").html(0);
		else if(value=='ce'){
			if(text.length==1)
				$("#result").html(0);
			else
			$("#result").html(text.substring(0,text.length-1));
			
		}


	}

	$("button").on("click",function(){

		update(this.id);
	
	});
});