function buttonclick(vvv){
document.getElementById("Screen").value=document.getElementById("Screen").value+vvv;

  
}
function Clear(){
    document.getElementById("Screen").value=""
}
function clickEqual(){
    var text=document.getElementById("Screen").value=document.getElementById("Screen").value;
    var Result=eval(text);
    document.getElementById("Screen").value=document.getElementById("Screen").value=Result
}