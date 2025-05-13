function alpha(ch){
    ch=ch.toUpperCase();
    test=true;
    for(i=0;i<ch.length;i++){
        if(ch[i]<"A" ||ch[i]>"Z"){
            test=false;
        }
    }
    return test;
}
function cpatchaa(n){
    if(n==9){
        return true;
    }
    return false;
}

function verif(){
nom=document.getElementById("nom").value;
prenom=document.getElementById("prenom").value;
mail=document.getElementById("email").value;
message=document.getElementById("message").value;
cpatcha=document.getElementById("cpatcha").value;
r1=document.getElementById("r1").checked;

    
if((nom=="") ||alpha(nom)==false){
    alert("verifier votre nom");
    return false;
}
if(prenom=="" ||alpha(prenom)==false)
{
    alert("verifier votre prenom");
    return false;
}
if(message==""){
    alert("verifier votre message")
    return false;
}
if(r1==false){
    alert("verifier si vos email  soit stocké pour apporter une réponse")
    return false;
}
p=mail.indexOf("@");
    if (p == -1 || p === 0 || p === mail.length - 1) {
    alert("Veuillez vérifier votre adresse e-mail");
   return false;
    }
    if(cpatcha==""||cpatchaa(cpatcha)==false){
        alert("verfier si vous etes un robit ou non ")
        return false;

    }
 
}