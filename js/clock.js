setInterval(() => {
    let d = new Date();
    let hh = d.getHours()
    let mm = d.getMinutes();
    let ss = d.getSeconds();

    console.log(hh, mm, ss)
}, 1000)