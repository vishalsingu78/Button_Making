var uservalues=document.querySelectorAll("input");
var outputbox=document.getElementById("custombtn");
console.log(uservalues);

function applying(){
var bgcol=uservalues[0].value;
var fntcol=uservalues[1].value;
var fntsize=uservalues[2].value;
var fntwight=uservalues[3].value;
var padding=uservalues[4].value;
var borderrds=uservalues[5].value;
outputbox.style.backgroundColor=bgcol;
outputbox.style.color=fntcol;
outputbox.style.fontSize=fntsize;
outputbox.style.fontWeight=fntwight;
outputbox.style.padding=padding;
outputbox.style.borderRadius=borderrds;
// console.log(bgcol,fntcol,fntsize,fntwight,padding,borderrds,bordercol);
}
