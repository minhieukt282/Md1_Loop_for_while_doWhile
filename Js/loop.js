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

function bangCuuChuong() {
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

function tinhGiaiThua() {
    let number = parseInt(document.getElementById("number").value);
    let Sum = 1;
    let index = 1;
    while (index <= number) {
        Sum = Sum * index;
        index++;
    }
    document.getElementById("result").innerHTML = +number + "! = " + Sum;
}

function hinhChuNhat() {
    let n = parseInt(document.getElementById("number").value);
    let screen = " ";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == 1 || i == n || j == 1 || j == n) {
                screen = screen + "*";
            } else screen += "_"
        }
        screen = screen + "<br>";
    }
    document.getElementById("result").innerHTML = screen;
}

function screenLaiKep() {
    window.location = "laiKep.html";
}

function screenMain() {
    window.location = "Loop.html";
}

function laiKep() {
    let money = parseFloat(document.getElementById("money").value);
    let i = parseFloat(document.getElementById("i").value);
    let year = parseFloat(document.getElementById("year").value);
    let count = parseFloat(document.getElementById("count").value);
    let total = money * Math.pow((1 + (i / 100) / count), (year * count));
    document.getElementById("total").innerHTML = total;
}

function hinhTamGiac() {
    let number = parseInt(document.getElementById("number").value);
    let screen = " ";
    // *
    // **
    // ***
    for (let i = 0; i < number; i++) {
        for (let j = number - i - 1; j < number; j++) {
            screen = screen + "*";
        }
        for (let j = 0; j < number - i - 1; j++) {
            screen = screen + "&nbsp&nbsp";
        }
        screen += "<br>"
    }
    screen += "<br>"
    // ***
    // **
    // *
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number - i; j++) {
            screen = screen + "*";
        }

        for (let j = number - i; j < number; j++) {
            screen = screen + "&nbsp&nbsp";
        }
        screen += "<br>"
    }
    screen += "<br>"
    //      *
    //     **
    //    ***
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number - i - 1; j++) {
            screen = screen + "&nbsp&nbsp";
        }

        for (let j = number - i - 1; j < number; j++) {
            screen = screen + "*";
        }
        screen += "<br>"
    }
    screen += "<br>"
    //    ***
    //     **
    //      *
    for (let i = 0; i < number; i++) {
        for (let j = number - i; j < number; j++) {
            screen = screen + "&nbsp&nbsp";
        }
        for (let j = 0; j < number - i; j++) {
            screen = screen + "*";
        }
        screen += "<br>"
    }


    document.getElementById("result").innerHTML = screen;
}

function traiTim() {
    let number = parseInt(document.getElementById("number").value);
    let screen = " ";
    let up = Math.round(number / 3);
    let down = number - up;
    let size = Math.round(down/2); //nua hinh tam giac





    // 2 dong **********
    for (let i = 0; i < 2; i++) {
        for (let j=0; j <= 2*down-1; j++) {
            screen = screen + "#";
        }
        screen += "<br>"
    }
    //tam giac nguoc
    for (let i = 0; i < down; i++) {
        for (let j = size - i; j < size; j++) {
            screen = screen + "&nbsp&nbsp";
        }
        for (let j = size; j < number - i; j++) {
            screen = screen + "*";
        }
        for (let j = size; j < number - i; j++) {
            screen = screen + "*";
        }
        for (let j = number - i; j < number; j++) {
            screen = screen + "&nbsp&nbsp";
        }
        screen += "<br>"
    }
    document.getElementById("result").innerHTML = screen;

}