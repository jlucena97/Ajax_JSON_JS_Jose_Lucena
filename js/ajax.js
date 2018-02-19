{
	let div;
	let xmlhttp;

	let init = function()
	{
		div = document.getElementById("text");

		xmlhttp = new XMLHttpRequest();
	
		let select = document.getElementById("select");

		select.addEventListener("change",call);
	}

	let call = function()
	{
		let valor = this.value;
		div.innerHTML = "";

		xmlhttp.onreadystatechange = function()
		{
			if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
			{

				let respuesta = JSON.parse(xmlhttp.responseText);

				let array = Object.values(respuesta.framework[valor]);

				for (var i = 0; i < array.length; i++) {
					
					switch(i){
						case 0:
							div.innerHTML += "<h2>" + array[i] + "</h2>";
							break;
						case 1:
							div.innerHTML += "<p><strong>Enlace: </strong><a href='"+array[i]+"'>" + array[i] + "</a></p>";
							break;
						case 2:
							div.innerHTML += "<p><strong>Imagen: </strong><img src='img/"+array[i]+"'></p>";
							break;
						case 3:
							div.innerHTML += "<p><strong>Descripción: </strong>" + array[i] + "</p>";
							break;
					}
				}
			}
		}

		xmlhttp.open("GET","js/framework.json", true);
		xmlhttp.send();
	}

	window.onload = init; 
	/*$().ready(function()
	{
		$("select").on("change",function(){
				$("div").html("");
				 
				let boton = parseInt(this.value);
				 
				 $.getJSON("js/framework.json", function(result){
				 		//console.log(result);
			        $.each(result, function(i, field){
			        	//console.log(i);
			        	$.each(field[boton], function(titul, valor){
			        		if(titul === "URL"){
			        			$("div").append("<p><strong>"+ titul +": </strong><a href='"+valor+"'>" + valor + "</a></p>");
			        		}else if(titul === "Imagen"){
			        			$("div").append("<p><strong>"+ titul +": </strong><img src='img/"+valor+"'></p>");
			        		}else if(titul === "Nombre"){
			        			$("div").append("<h2>" + valor + "</h2>");
			        		}else {
			        			$("div").append("<p><strong>"+ titul +": </strong>" + valor + "</p>");
			        		}
				       });
			        });
			    });
		});

	});*/
}