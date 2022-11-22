const enddate = `1 January 2023 12:00 AM`;
document.getElementById("end-date").innerText = enddate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(enddate);
    const now = new Date();
    const diff = (end - now) / 1000;
    if (diff < 0) {
        return;
    };

    //  console.log(diff)
    // convert to days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // console.log(Math.floor(diff / 3600 / 24))
    inputs[1].value = Math.floor(diff / 3600) % 24;    /*hours*/
    inputs[2].value = Math.floor(diff / 60) % 60;       /*minute*/
    inputs[3].value = Math.floor(diff) % 60;             /*seconds*/

};

clock();

setInterval(() => {
    clock();
}, 1000);
