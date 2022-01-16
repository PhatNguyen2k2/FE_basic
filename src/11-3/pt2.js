function eQuation2(){
    let a = document.getElementById("number_a").value;
    let b = document.getElementById("number_b").value;
    let c = document.getElementById("number_c").value;
	if(parseInt(a) == 0) {
         
        if(parseInt(b) == 0) {
            if (parseInt(c) == 0) {
                document.getElementById("result").innerHTML = "countless solutions";     
            } else {
                document.getElementById("result").innerHTML = " solutions"; 
            }
        } else {
            let x = parseInt(-c) / parseInt(b);
            document.getElementById("result").innerHTML = "x = " + x; 
        }
    } else {
        var delta = parseInt(b)*parseInt(b) - 4*parseInt(a)*parseInt(c);
        if(delta > 0) {
            var x1 = (parseInt(-b)+Math.sqrt(delta))/(2*parseInt(a));
            var x2 = (parseInt(-b)-Math.sqrt(delta))/(2*parseInt(a));
            document.getElementById("result").innerHTML = "x1 = " + x1 + "\nx2 = " + x2; 
        } else if ( delta == 0) {
        	var sum = parseInt(-b)/2*parseInt(a);
            document.getElementById("result").innerHTML = "Double x = " + sum;
        } else {
            document.getElementById("result").innerHTML = "countless solutions"; 
        }
    }
}