let saida = document.getElementById("saida");
saida.innerHTML = "Funciona";
let oct = 010;
let bin = 0b10; 
let hexa = 0x10;
let dia, nota;
dia = 10;
nota = 9.74;

saida.innerHTML="nota: "+nota;
saida.innerHTML+="<br>nota formatada: "+nota.toFixed(1);
saida.innerHTML+="<br>dia: "+dia;
saida.innerHTML+="<br>oct: "+oct;
saida.innerHTML+="<br>bin: "+bin;
saida.innerHTML+="<br>hexa: "+hexa;