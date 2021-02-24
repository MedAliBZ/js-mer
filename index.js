let tab=[1,2,3,4,5,6,7,8,9];
let matrice=document.getElementById("matrice");

function createData(value){
    let data=document.createElement("td");
    data.innerHTML=value;
    return data;
}

matrice.appendChild(document.createElement("tr")).appendChild(createData("[x]"));
for(let i=0;i<5;i++){
    matrice.appendChild(document.createElement("tr"))
}

let rows=document.getElementsByTagName("tr");

let index=0;

while(index<6){
    if(index>0){
        rows[index].appendChild(createData(index))
        for(let j=0;j<9;j++)
            rows[index].appendChild(createData(tab[j]*index))
    }
    else{
        for(let j=0;j<9;j++)
            rows[index].appendChild(createData(tab[j]))
    }
    index++;
}

