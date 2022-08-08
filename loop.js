function forLoop() {

    let sout;
    sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>"
    for (i = 1; i <= 10; i++) {
        for (j = 1; j <= 10; j++) {
            sout = sout + "<td>" + i * j + "</td>";
        }
        sout = sout + "</tr>";
    }
    sout = sout + "</table>";
    document.getElementById("result").innerHTML = sout;
}

function cuuChuong() {
    let sout;
    sout = "<table border='1' width='1000' cellspacing='0' cellpadding='3'>"
    for (i = 1; i <= 9; i++) {

        for (j = 2; j <= 9; j++) {
            sout = sout + "<td>" + j + "x" + i + "= " + i * j + "</td>";
        }
        sout = sout + "</tr>";
    }
    sout = sout + "</table>";
    document.getElementById("result").innerHTML = sout;
}