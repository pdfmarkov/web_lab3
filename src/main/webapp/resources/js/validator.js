let x = 1;
let y;
let r = 1;

function pressX(id){
    (x === parseInt(id.trim().substr(8))) ? document.getElementById(id).checked = true : x = parseInt(id.trim().substr(8));
    for(let i=-3 ;i<=5; i++) if (id !== 'form:bcb'+i) document.getElementById('form:bcb'+i).checked = false;
    console.log('X = ' + x);
    document.getElementById('form:x').value = x;
}

function getY(){
    y =  document.getElementById('form:y').value;
}

function getR(){
    r =  document.getElementById('form:r').value;
}

function draw() {
    let entries = getEntries();
    if (entries === null) entries = [];
    entries.forEach(e => drawPoint(e.x,e.y,e.r,e.status));
}


function getEntries() {
    let res = [];
    let entries = document.getElementById("entries_table_data").childNodes;
    for (let i = 0; i < entries.length; i++) {
        let values = entries[i].childNodes;
        if (values.length === 1) {
            continue;
        }
        res.push({
            x: values[1].innerText,
            y: values[2].innerText,
            r: values[3].innerText,
            result: values[4].innerText
        })
    }
    return res;
}

function show_coords(event) {
        let rect = event.currentTarget.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        let basis = 100 / $('#form\\:r').val();
        let cx = ((x - 150) / basis);
        let cy = ((150 - y) / basis);
        console.log("X coords: " + x + ", Y coords: " + y + ",R: " + basis);
        console.log("X coords: " + cx + ", Y coords: " + cy);
        $('#form\\:x').val(cx);
        $('#form\\:y').val(cy);
        //drawPoint(cx, cy, $('#form\\:r').val(), true ) // ВРЕМЕННО
        send();
}

function drawPoint(x_value, y_value, r, flag) {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    let x = x_value * 100 / r + 150;
    let y = 150 - y_value * 100 / r;
    if (flag) context.fillStyle = "green";
    if (!flag) context.fillStyle = "red";
    context.beginPath();
    context.arc(x, y, 2, 0, Math.PI * 2, false);
    context.fill();
    context.stroke();
}