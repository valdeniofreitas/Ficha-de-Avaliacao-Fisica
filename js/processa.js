
// Questão: Pratica Edu. Física?

      function FuncPE() {
            var CpPratica = document.getElementById("PraticaEdu").value;

	        if (CpPratica == 'true' ) {
	        document.getElementById("qualAt").style.display = "block";
	    	    } else {
	        document.getElementById("qualAt").style.display = "none";
	        }
      }

// Questão: Fuma?

      function FuncFuma() {
            var CpPratica = document.getElementById("fumante").value;

	        if (CpPratica == 'true' ) {
	        document.getElementById("quantCigarro").style.display = "block";
	    	    } else {
	        document.getElementById("quantCigarro").style.display = "none";
	        }
      }

 // Questão: Dieta?

      function FuncDieta() {
            var CpPratica = document.getElementById("dieta").value;

	        if (CpPratica == 'true' ) {
	        document.getElementById("fazDieta").style.display = "block";
	    	    } else {
	        document.getElementById("fazDieta").style.display = "none";
	        }
      }

 // Questão: Medicamento?

      function FuncMedic() {
            var CpPratica = document.getElementById("medicamento").value;

	        if (CpPratica == 'true' ) {
	        document.getElementById("usaMedic").style.display = "block";
	    	    } else {
	        document.getElementById("usaMedic").style.display = "none";
	        }
      } 

 // Questão: Fraturas?

      function FuncFrat() {
            var CpPratica = document.getElementById("fratura").value;

	        if (CpPratica == 'true' ) {
	        document.getElementById("fraturado").style.display = "block";
	    	    } else {
	        document.getElementById("fraturado").style.display = "none";
	        }
      } 

// Questão: Alergia?

      function FuncAlerg() {
            var CpPratica = document.getElementById("alergia").value;

	        if (CpPratica == 'true' ) {
	        document.getElementById("alergico").style.display = "block";
	    	    } else {
	        document.getElementById("alergico").style.display = "none";
	        }
      } 

// Questão: Cirurgia?

      function FuncCirg() {
            var CpPratica = document.getElementById("cirurgia").value;

	        if (CpPratica == 'true' ) {
	        document.getElementById("entFaca").style.display = "block";
	    	    } else {
	        document.getElementById("entFaca").style.display = "none";
	        }
      } 

// Questão: Varizes?

      function FuncVari() {
            var CpPratica = document.getElementById("varizes").value;

	        if (CpPratica == 'true' ) {
	        document.getElementById("variceu").style.display = "block";
	    	    } else {
	        document.getElementById("variceu").style.display = "none";
	        }
      } 

// Questão: Doença?

      function FuncDoen() {
            var CpPratica = document.getElementById("doenca").value;

	        if (CpPratica == 'true' ) {
	        document.getElementById("fudido").style.display = "block";
	    	    } else {
	        document.getElementById("fudido").style.display = "none";
	        }
      } 

// Calcula IMC
function CalcIMC () {
		var mpeso = document.getElementById('VrPeso').value;
		var maltura = document.getElementById('VrAltura').value;

		var RsIMC = mpeso / (maltura * maltura);
		document.getElementById('IMCall').innerHTML = RsIMC.toFixed(1);
		
		if (RsIMC < 17) {
			var RsStatus = "Muito abaixo do peso";
			document.getElementById('StatusIMC').innerHTML = RsStatus;
		}
		else if (RsIMC > 17 && RsIMC <= 18.49) {
			var RsStatus = "Abaixo do peso";
			document.getElementById('StatusIMC').innerHTML = RsStatus;
		} 
		else if (RsIMC >= 18.5 && RsIMC <= 24.99) {
			var RsStatus = "Peso normal";
			document.getElementById('StatusIMC').innerHTML = RsStatus;
		}	
		else if (RsIMC >= 25 && RsIMC <= 29.99) {
			var RsStatus = "Acima do peso";
			document.getElementById('StatusIMC').innerHTML = RsStatus;
		}
		else if (RsIMC >= 30 && RsIMC <= 34.99) {
			var RsStatus = "Obesidade I";
			document.getElementById('StatusIMC').innerHTML = RsStatus;
		}	
		else if (RsIMC >= 35 && RsIMC <= 39.99) {
			var RsStatus = "Obesidade II (severa)";
			document.getElementById('StatusIMC').innerHTML = RsStatus;
		}
		else if (RsIMC >= 40) {
			var RsStatus = "Obesidade III (mórbida)";
			document.getElementById('StatusIMC').innerHTML = RsStatus;
		}	
}
// Moatrar Peso Ideal

	function PesoIdealFunc() {
		var maltpp = document.getElementById('VrAltura').value;

		if (maltpp >= 1.50 && maltpp <= 1.51) {
			var RsStatus = "Entre 42kg e 56kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.51 && maltpp <= 1.52) {
			var RsStatus = "Entre 43kg e 57kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.52 && maltpp <= 1.54) {
			var RsStatus = "Entre 44kg e 59kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.54 && maltpp <= 1.56) {
			var RsStatus = "Entre 46kg e 60kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.56 && maltpp <= 1.58) {
			var RsStatus = "Entre 47kg e 62kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.58 && maltpp <= 1.60) {
			var RsStatus = "Entre 48kg e 64kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.60 && maltpp <= 1.62) {
			var RsStatus = "Entre 49kg e 65kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.62 && maltpp <= 1.64) {
			var RsStatus = "Entre 50kg e 67kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.64 && maltpp <= 1.66) {
			var RsStatus = "Entre 51kg e 68kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.66 && maltpp <= 1.68) {
			var RsStatus = "Entre 53kg e 70kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.68 && maltpp <= 1.70) {
			var RsStatus = "Entre 54kg e 72kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.70 && maltpp <= 1.72) {
			var RsStatus = "Entre 55kg e 73kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.72 && maltpp <= 1.74) {
			var RsStatus = "Entre 57kg e 75kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.74 && maltpp <= 1.76) {
			var RsStatus = "Entre 58kg e 77kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.76 && maltpp <= 1.78) {
			var RsStatus = "Entre 59kg e 79kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.78 && maltpp <= 1.80) {
			var RsStatus = "Entre 60kg e 81kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.80 && maltpp <= 1.82) {
			var RsStatus = "Entre 62kg e 82kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.82 && maltpp <= 1.84) {
			var RsStatus = "Entre 63kg e 84kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.84 && maltpp <= 1.86) {
			var RsStatus = "Entre 65kg e 86kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.86 && maltpp <= 1.88) {
			var RsStatus = "Entre 66kg e 88kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.88 && maltpp <= 1.90) {
			var RsStatus = "Entre 67kg e 90kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.90 && maltpp <= 1.92) {
			var RsStatus = "Entre 69kg e 92kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.92 && maltpp <= 1.94) {
			var RsStatus = "Entre 70kg e 94kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.94 && maltpp <= 1.96) {
			var RsStatus = "Entre 72kg e 96kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.96 && maltpp <= 1.98) {
			var RsStatus = "Entre 73kg e 98kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}
		if (maltpp > 1.98 && maltpp <= 2.00) {
			var RsStatus = "Entre 75kg e 100kg";
			document.getElementById('PesoIdeal').innerHTML = RsStatus;
		}		
	}

// Calcula o Percentual de Gordura RsIMC

	/*function PercentGordura() {

		var RrSubescapular = document.getElementById('VrSubescapular').value;
		var RrTriceps = document.getElementById('VrTriceps').value;
		var RrSuprailiaca = document.getElementById('VrSuprailiaca').value;
		var RrAbdomen = document.getElementById('VrAbdomen').value;
		var RrPeito = document.getElementById('VrPeito').value;
		var RrAxilar = document.getElementById('VrAxilar').value;
		var RrCoxa = document.getElementById('VrCoxa').value;
		var RrIdade = document.getElementById('VLIdade').value;*/

		/* Soma Musculos */
	//	var TtMusc = parseFloat(RrSubescapular) + parseFloat(RrTriceps) + parseFloat(RrSuprailiaca) + parseFloat(RrAbdomen) + parseFloat(RrPeito) + parseFloat(RrAxilar) + parseFloat(RrCoxa);

		/* Calculo Masculino */

	//	var TfemGurd = ((4.95/(1.0970 - (0.00046971 * TtMusc + 0.00000056 * (TtMusc * TtMusc)) - (0.00012828 * RrIdade)) ) - 4.50) * 100;

		/*console.log(TfemGurd);*/
	//	console.log(TtMusc);
	//	document.getElementById('PercGord').innerHTML = TfemGurd;




// }

















