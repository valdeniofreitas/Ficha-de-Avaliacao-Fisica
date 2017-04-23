// Calcula o Percentual de Gordura RsIMC

	function PercentGordura() {

		var RrSubescapular = document.getElementById("VrSubescapular").value;
		var RrTriceps = document.getElementById("VrTriceps").value;
		var RrSuprailiaca = document.getElementById("VrSuprailiaca").value;
		var RrAbdomen = document.getElementById("VrAbdomen").value;
		var RrPeito = document.getElementById("VrPeito").value;
		var RrAxilar = document.getElementById("VrAxilar").value;
		var RrCoxa = document.getElementById("VrCoxa").value;
		var RrIdade = document.getElementById("VLIdade").value;
		var RSexo = document.getElementById('sexo').value;;

		/* Soma Musculos */
		var TtMusc = parseFloat(RrSubescapular)+parseFloat(RrTriceps)+parseFloat(RrSuprailiaca)+parseFloat(RrAbdomen)+parseFloat(RrPeito)+parseFloat(RrAxilar)+parseFloat(RrCoxa);

		/* Raiz quadrada */
		var TmParc2 = Math.pow(TtMusc, 2);

		/* Condição */
    if (RSexo == 'true' ) {
				var ResulGord = ((4.95/(1.112-0.00043499*TtMusc+0.00000055*TmParc2-0.00028826*RrIdade))-4.5)*100 ;
	    } else {
    		var ResulGord = ((4.95/(1.097-0.00046971*TtMusc+0.00000056*TmParc2-0.00012828*RrIdade))-4.5)*100 ;
	    }

		/* Arredondamento */
		var arredondado = parseFloat(ResulGord.toFixed(2));

		/* Exibe o resultado */
		document.getElementById('PercGord').innerHTML = arredondado;
}