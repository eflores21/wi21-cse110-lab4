function datime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(datime, 1000);