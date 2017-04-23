function imprime() {

	var RtNome = document.getElementById("PtNome").value;
	var RtData = document.getElementById("PtData").value;
	var RtProfetion = document.getElementById("PtProfetion").value;
	var RtQAtiv = document.getElementById("PtQAt").value;

	document.getElementById('RtNome').innerHTML = RtNome;
	document.getElementById('RtData').innerHTML = RtData;
	document.getElementById('RtProfetion').innerHTML = RtProfetion;  
	 

  var CpPratica = document.getElementById("PraticaEdu").value;

	if (CpPratica == 'true' ) {
			document.getElementById('RtResultProf').innerHTML = RtQAtiv;
  } else {
			document.getElementById('RtResultProf').innerHTML = "Não Pratica";
	}
 

//	document.getElementById('RtResultProf').innerHTML = RtQAtiv
}