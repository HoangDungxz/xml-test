
var x = 0;


var cau_1_class=document.getElementsByClassName("cau_1");
var cau_2_class=document.getElementsByClassName("cau_2");
var cau_3_class=document.getElementsByClassName("cau_3");
var cau_4_class=document.getElementsByClassName("cau_4");
var cau_5_class=document.getElementsByClassName("cau_5");


var traloi_1 = document.getElementsByClassName("traloi1");
var traloi_2 = document.getElementsByClassName("traloi2");
var traloi_3 = document.getElementsByClassName("traloi3");
var traloi_4 = document.getElementsByClassName("traloi4");
var traloi_5 = document.getElementsByClassName("traloi5");

var quest_all  = document.getElementsByClassName("quest_all");

var cau = [cau_1_class[x],cau_2_class[x],cau_3_class[x],cau_4_class[x],cau_5_class[x]]

var traloi=[traloi_1[x], traloi_2[x], traloi_3[x],traloi_4[x],traloi_5[x]]

var cautraloi=[dapan_1,dapan_2,dapan_3,dapan_4,dapan_5]


var kq = $("#kq");


for(i=0;i<5;i++){
	if(cau[i].textContent==""){
		cau[i].style.visibility='hidden';
	}
	else{
		cau[i].style.visibility='visible';
	}
}








function cau1(caua){
	if (dapan_1.value == 0) {
		caua.style.background="#CCFFFF"
		dapan_1.value = 1
	}
	else {
		caua.style.background="#eee"
		dapan_1.value = 0
	}
}
function cau2(caub){
	if (dapan_2.value == 0) {
		caub.style.background="#CCFFFF"
		dapan_2.value = 1
	}
	else{
		caub.style.background="#eee"
		dapan_2.value = 0
	}
}
function cau3(cauc){
	if (dapan_3.value == 0) {
		cauc.style.background="#CCFFFF"
		dapan_3.value = 1
	}
	else{
		cauc.style.background="#eee"
		dapan_3.value = 0
	}
}
function cau4(caud){
	if (dapan_4.value == 0) {
		caud.style.background="#CCFFFF"
		dapan_4.value = 1
	}
	else{
		caud.style.background="#eee"
		dapan_4.value = 0
	}
}
function cau5(caue){
	if (dapan_5.value == 0) {
		caue.style.background="#CCFFFF"
		dapan_5.value= 1
	}
	else{
		caue.style.background="#eee"
		dapan_5.value= 0
	}
}


for(j=0;j<quest_all.length-1;j++){
	kq.append("<h4 class='col-md-6 col-xs-3 col-sm-3 his' onclick='history(quest_all["+j+"])' style='color: #ccc'>Câu  "+(j+1) +"</h4>");
}
var his = document.getElementsByClassName("his");
var z=0;
quest_all[0].style.display="block";

var diemso=0;
var check=0;
var check1=0;
var check2=0;
ok.onclick = function(){
	var cau = [cau_1_class[x], cau_2_class[x], cau_3_class[x], cau_4_class[x], cau_5_class[x]]
	var traloi=[traloi_1[x], traloi_2[x], traloi_3[x], traloi_4[x], traloi_5[x]]
	var cautraloi=[dapan_1,dapan_2,dapan_3,dapan_4,dapan_5]

	check = 0	
	if( x<quest_all.length-1){
		for(i=0;i<5;i++){	
			if(traloi[i].value==1){
				cau[i].style.background="#33CC66"
			}
			if(traloi[i].value==cautraloi[i].value && traloi[i].value==1){
				check = check + 1
			}
		}

		check1= parseInt(traloi[0].value)+parseInt(traloi[1].value)+parseInt(traloi[2].value)+parseInt(traloi[3].value)+parseInt(traloi[4].value)
		check2= parseInt(dapan_1.value)+parseInt(dapan_2.value)+parseInt(dapan_3.value)+parseInt(dapan_4.value)+parseInt(dapan_5.value)
	}
	if(check > 0 && check1 == check2&&check1==check){
		diemso = diemso + 1;
		diem_check.style.background="#33CC66";
		if(x<quest_all.length-1){
			his[z].style.color='green';
			his[z].style.fontWeight='bold';
		}
	}
	else{
		diem_check.style.background="#FF3333";
		if(x<quest_all.length-1){
			his[z].style.color='red';
			his[z].style.textDecoration='line-through';
			his[z].style.fontStyle='italic';

		}
	}
	dung.innerHTML=diemso;
	

	if(x==quest_all.length-1){
		x = quest_all.length-1;
	}
	else{
		x = x +1;

	}
	if(z==quest_all.length-1){
		z = quest_all.length-1;
	}else{
		z=z+1;

	}
	
	next.style.visibility= "visible";

}
next.onclick =function(){
	
	for( e=0; e < quest_all.length ; e++){
		quest_all[e].style.display='none';
	}
	quest_all[z].style.display="block";
	next.style.visibility= "hidden";

	dapan_1.value="0"
	dapan_2.value="0"
	dapan_3.value="0"
	dapan_4.value="0"
	dapan_5.value="0"


	var cau = [cau_1_class[x],cau_2_class[x],cau_3_class[x],cau_4_class[x],cau_5_class[x]]
	var traloi=[traloi_1[x], traloi_2[x], traloi_3[x],traloi_4[x],traloi_5[x]]
	var cautraloi=[dapan_1,dapan_2,dapan_3,dapan_4,dapan_5]
	if( x<quest_all.length-1){
		for(i=0;i<5;i++){
			if(cau[i].textContent==""){
				cau[i].style.visibility='hidden';
			}
			else{
				cau[i].style.visibility='visible';
			}
		}
	}
}
function refreshPage(){
	window.location.reload();
} 

function history(element){
	for( e=0; e < quest_all.length ; e++){
		quest_all[e].style.display='none';
	}
	element.style.display='block';
	next.style.visibility= "visible";
}
