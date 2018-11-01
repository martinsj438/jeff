var x = 1;

function MudaImagem(){
	ApagaDivs();
	ApagaBola();
	if(x<5){
		document.getElementById('d'+x).style.display = "block";
		document.getElementById('b'+x).style.background = "red";
		x++
	}else{
		ApagaDivs();
		document.getElementById('d1').style.display = "block";
		document.getElementById('b1').style.background = "red";
		x = 2;
	}
}

function ApagaDivs(){	
	document.getElementById('d1').style.display = "none";
	document.getElementById('d2').style.display = "none";
	document.getElementById('d3').style.display = "none";
	document.getElementById('d4').style.display = "none";
}

function ApagaBola(){	
	document.getElementById('b1').style.background = "#ccc";
	document.getElementById('b2').style.background = "#ccc";
	document.getElementById('b3').style.background = "#ccc";
	document.getElementById('b4').style.background = "#ccc";
}