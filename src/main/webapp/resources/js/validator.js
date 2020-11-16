let x = 1;
let y;
let r = 1;

drawPlate(parseFloat($('#form\\:r').val()));
draw(parseFloat($('#form\\:r').val()));

function redraw(event, ui){
    r =  $('#form\\:r').val();
    drawPlate(r);
    draw(r);
}

function pressX(id){
    (x === parseInt(id.trim().substr(8))) ? document.getElementById(id).checked = true : x = parseInt(id.trim().substr(8));
    for(let i=-3 ;i<=5; i++) if (id !== 'form:bcb'+i) document.getElementById('form:bcb'+i).checked = false;
    console.log('X = ' + x);
    document.getElementById('form:x').value = x;
}

function draw(r) {
    let entries = getEntries();
    if (entries === null) entries = [];
    entries.forEach(e => drawPoint(e.x,e.y,parseFloat(r),check(e.x,e.y,parseFloat(r))));
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
        let validationError = 'Y Value must be a number between -3 and 3';
        let rect = event.currentTarget.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        let r = $('#form\\:r').val();
        let basis = 100 / parseFloat($('#form\\:r').val());
        let cx = ((x - 150) / basis);
        let cy = ((150 - y) / basis);
        x = document.getElementById('form:x').value;
        y = document.getElementById('form:y').value;
        console.log("X coords: " + x + ", Y coords: " + y + ",R: " + basis);
        console.log("X coords: " + cx + ", Y coords: " + cy);
        $('#form\\:x').val(cx);
        $('#form\\:y').val(cy);
        send();
        document.getElementById('form:x').value = x;
        document.getElementById('form:y').value = y;
        drawPlate(r);
        draw(r);
        (cy>=-3 && cy<=3) ? drawPoint(cx, cy, r, check(cx,cy,parseFloat(r)) ) : alert(validationError);
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

function check(x,y,r){
    if (x >= 0) {
        if (y >= 0) {
            return -2 * x + r >= y;
        } else {
            return x <= r  && y >= -r/2;
        }
    } else {
        if (y > 0) {
            return false;
        } else {
            return x * x + y * y <= (r/2) * (r/2);
        }
    }
}

