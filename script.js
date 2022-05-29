let form  = document.querySelector('form');
let inp = document.querySelector('input');
let ul = document.querySelector("ul");


form.addEventListener('submit' , elaveEt);
document.addEventListener('DOMContentLoaded', localGetir);


function elaveEt(e){
    e.preventDefault();
    
if(inp.value == ""){
    alert("bos olmaz")
}else{
    ekran (inp.value);
    localYaz(inp.value);
    inp.value = "";
}
  
}

function localYaz(not){
    let notlar;
    if( localStorage.getItem('notlar') === null ){
        notlar = [];
    }else{
        notlar = JSON.parse(localStorage.getItem('notlar'));
    }
    notlar.push(not);

    localStorage.setItem('notlar', JSON.stringify(notlar));
}

function localGetir(){
    notlar = JSON.parse(localStorage.getItem('notlar'))
    notlar.forEach(element => {
        ekran(element);
    });
}

function ekran (not){
    let YeniLi = document.createElement('li');
    YeniLi.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    YeniLi.textContent = not;
    ul.appendChild(YeniLi);

    let yeniBtn = document.createElement('button');
    yeniBtn.classList.add('btn', 'btn-danger', 'btn-sm');
    yeniBtn.textContent = "Delete";
    YeniLi.appendChild(yeniBtn);
    yeniBtn.addEventListener('click', ()=>{
     let silinen =  YeniLi.textContent.substr(0,YeniLi.textContent.length - yeniBtn.textContent.length);
        yeniBtn.parentElement.remove();
        localSil(silinen)
    })
 
}

function localSil(delet){
  let notlar =  JSON.parse(localStorage.getItem('notlar'));
    let ind  = notlar.indexOf(delet);
    notlar.splice(ind,1);
    localStorage.setItem('notlar', JSON.stringify(notlar));
}
