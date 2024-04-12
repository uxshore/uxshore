
// faq1
let faq1 = document.getElementById("faq1");
let faqbtn1 = document.getElementById("faqbtn1");

function Faq1() {
    faq1.className = "faqvisible";
    faqbtn1.textContent = "Hide Answer";
    faqbtn1.setAttribute("onclick", "hide1()");
}

function hide1() {
    faq1.className = "faqhidden";
    faqbtn1.textContent = "View Answer";
    faqbtn1.setAttribute("onclick", "Faq1()");
}


// faq2
let faq2 = document.getElementById("faq2");
let faqbtn2 = document.getElementById("faqbtn2");

function Faq2() {
    faq2.className = "faqvisible";
    faqbtn2.textContent = "Hide Answer";
    faqbtn2.setAttribute("onclick", "hide2()");
}

function hide2() {
    faq2.className = "faqhidden";
    faqbtn2.textContent = "View Answer";
    faqbtn2.setAttribute("onclick", "Faq2()");
}


// faq3
let faq3 = document.getElementById("faq3");
let faqbtn3 = document.getElementById("faqbtn3");

function Faq3() {
    faq3.className = "faqvisible";
    faqbtn3.textContent = "Hide Answer";
    faqbtn3.setAttribute("onclick", "hide3()");
}

function hide3() {
    faq3.className = "faqhidden";
    faqbtn3.textContent = "View Answer";
    faqbtn3.setAttribute("onclick", "Faq3()");
}