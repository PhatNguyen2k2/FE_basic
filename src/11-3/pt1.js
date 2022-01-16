function eQuation1(){
    let a = document.getElementById("number_a").value;
    let b = document.getElementById("number_b").value;
    let c = document.getElementById("number_c").value;
    let x = (parseInt(c)-parseInt(b))/parseInt(a);
    document.getElementById("result").innerHTML = "Solution of the equation of degree 1" + " = " + x;
}