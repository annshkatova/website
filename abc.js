function calculateX() {
    const A = parseFloat(document.getElementById("A").value);
      let x;

       if (A>100){
        x=0;
    } else if (A<61) {
    x=A;
    } else {
    x = Math.pow(A, 4);
    }

    document.getElementById("result").innerText="Результат x= " + x";
};
