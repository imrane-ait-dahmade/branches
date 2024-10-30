document.getElementById('prenom').addEventListener('change',(event) => voir(event));

function voir(event){
    let pe = event.target;
    let pev = pe.value;
    let parent = pe.parentElement;
    
     if(pev.length < 6){
        const tags = parent.getElementsByTagName('p');

if(tags.length ==0){
    const para =document.createElement('p');
    para.innerText='Error';
parent.appendChild(para);
console.log(parent);
}  
     }
     else{
        const tags = parent.getElementsByTagName('p'); 
        for(i=0;i<tags.length;i++){
            tags[i].remove();
        }
     }

}

document.getElementById('nom').addEventListener('change',(event)=> ouvrir(event));
function ouvrir(event){
   let ne = event.target;
   let nev = ne.value;
   let nomparent = ne.parentElement;
   const pattern = /^[a-zA-Z]+ ?[a-zA-Z]+$/i;
   if(nev.match(pattern)){
    const tags_n = document.getElementsByTagName('p');
    for(i=0;i<tags_n.length;i++){
        tags_n[i].remove();
    }
   }
   else{
    const tags_n = document.getElementsByTagName('p');
    if(tags_n.length == 0){
        const para_n = document.createElement('p');
        para_n.innerText ='Error';
        nomparent.appendChild(para_n);
    }
   }
}
 document.getElementById('email').addEventListener('change',(event)=> close(event));
 function close(event){
    let eme=event.target;
    let emev = eme.value;
    let emeparent = eme.parentElement;
    const pattern_eme = /^[a-zA-Z]+ ?[a-zA-Z]+$/i;
    if(emev.match(pattern_eme)){
        const tags_eme = document.getElementsByTagName('p');
        for(i=0;i<tags_eme;i++){
            tags_eme[i].remove();
        }
    }
    else{
        const tags_eme = document.getElementsByTagName('p');
        if(tags_eme.length == 0){
            const para_eme = document.createElement('p');
            para_eme.innerText = 'Error';
            emeparent.appendChild(para_eme);
        }
    }
 }






