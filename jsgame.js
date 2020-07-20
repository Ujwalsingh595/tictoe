
let sign="x";
let dis=document.getElementById("player");
function printx(number){
    let x=document.getElementById("r"+number);
    console.log(x);
    if(x.innerHTML==""){
    x.innerHTML=sign;
    checksign();
    dis.innerHTML="<center>"+sign + " its your turn"+"</center>"
    winner()
    }
}
function checksign(){
    if(sign=="x")sign="o";
    else sign="x";
}

function getbox(no){
    return document.getElementById("r"+no).innerHTML;

}
function checkmove(a,b,c,m){
    if(getbox(a)==m&&getbox(b)==m&&getbox(c)==m)
    return true;
    else return false;
}
function winner(){
    if(checkmove(1,2,3,sign)||checkmove(4,5,6,sign)||checkmove(7,8,9,sign)
    ||checkmove(1,4,7,sign)||checkmove(2,5,8,sign)||checkmove(3,6,9,sign)
    ||checkmove(1,5,9,sign)||checkmove(7,5,3,sign)){
        dis.innerHTML="<center>"+sign + " won"+"</center>"
        for(let i=1;i<=9;i++){
            document.getElementById("r"+i).innerHTML="";
        }
    }
    
}