window.onscroll=function(){scrollfunction()};
function scrollfunction(){
	if(document.body.scrollTop>10 || document.documentElement.scrollTop>10){
		document.getElementById("topBtn").style.display="block";
	}
	else{
		document.getElementById("topBtn").style.display="none";
	}
}
function toTop(){
	document.documentElement.scrollTop=0;
}