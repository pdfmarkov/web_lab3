let x = 1;
let y;
let z = 1;

function pressX(id){
    (x === parseInt(id.trim().substr(8))) ? document.getElementById(id).checked = true : x = parseInt(id.trim().substr(8));
    for(let i=-3 ;i<=5; i++) if (id !== 'form:bcb'+i) document.getElementById('form:bcb'+i).checked = false;
    console.log('X = ' + x);
    document.getElementById('form:x').value = x;
}
function checkR(){
    let check = false;
    for(let i=-3 ;i<=5; i++) if (document.getElementById('form:bcb'+i).checked === true) check = true;
}
function getY(){
    y =  document.getElementById('form:y').value;
}

function getR(){
    r =  document.getElementById('form:r').value;
}

