function calculateX() {

    const a = parseFloat(document.getElementById("a").value);

    let x;

    if (a>100) {
        x=0;
    } else if (a<61) {
        x=a;
    } else {
        x = Math.pow(a, 4);
    }

    document.getElementById("result").value="x=" + x;
}
const elementA = document.getElementById("a");


const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', calculateX);



