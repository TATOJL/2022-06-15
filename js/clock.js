// setInterval(() => {
//     let d = new Date();
//     let hh = d.getHours()
//     let mm = d.getMinutes();
//     let ss = d.getSeconds();

//     hh = hh.toString().padStart(2, 0);
//     mm = mm.toString().padStart(2, 0);
//     ss = ss.toString().padStart(2, 0);

//     console.log(hh, mm, ss)
// }, 1000)


function run() {
    let d = new Date();
    let hh = d.getHours()
    let mm = d.getMinutes();
    let ss = d.getSeconds();

    hh = hh.toString().padStart(2, 0);
    mm = mm.toString().padStart(2, 0);
    ss = ss.toString().padStart(2, 0);

    let time = hh + mm + ss;
    time = time.split('');
    // let time = (hh + mm + ss).split('');
    let clock = document.querySelector('.clock');
    console.log(time);

    [0, 1, 3, 4, 6, 7].map((children_index, time_index) => {
        // clock.children[children_index].innerHTML = time.charAt(time_index);
        clock.children[children_index].innerHTML = time[time_index];
    });
}

run();
setInterval(run, 1000);