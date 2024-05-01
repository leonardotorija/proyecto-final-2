var counter=1;
setInterval(function(){
	document.getElementById('radio' + counter).checked=true;
	counter++;
	if(counter > 4){
		counter = 1;
	}
},5000);
window.addEventListener("load", function() {
	document.getElementById('Rubicon').addEventListener("click",function() {
		alert("agregado");
	})
});
window.addEventListener("load", function() {
	document.getElementById('blac').addEventListener("click",function() {
		alert("agregado");
	})
});
window.addEventListener("load", function() {
	document.getElementById('bla').addEventListener("click",function() {
		alert("agregado");
	})
})