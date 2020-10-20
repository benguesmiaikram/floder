// Created by Namit Jain

var contest,info,body,main,cursor,text,t1,t2,t3,d,t4,t5;
var c = 0;
var mytext = "Let\'s cook food...";
var mynewtext = " make food...";
var ind = 0;
var ind2 = 0;
var op = 0;
var links = {
    // Image link, background-size, Inner text, clicks,opacity-of-text,open/close,height
    // Some of the images are taken from flaticon 🙌, it's an awesome site for icons!
    2:["https://imgur.com/W34u79L.jpg","cover","The winners will be announced at 6th October 2020.<br><br>There will be three winners:<ul><li>The 1st winner will get 2 huge like storms and 2 challenge gifts from the judges.</li><li>The 2nd winner will get 2 like storms.</li><li>The 3rd winner will get 1 like storm.</li></ul>(Attention: <br>there can be some runner-up gifts too!)",0,0,"n","62%"],
    1:["https://imgur.com/eOE40kT.jpg","contain","You will get a duration of 16 days for this contest! We hope you utilise these days in giving your best for the contest!<br>The contest will start from 20 September 2020 to 5 October 2020.<br>Please make sure that the code you make is NEW and NOT COPIED!<br><br>Post your codes in the comments section of this code (don't dm codes, they will not be considered) <br><br>Status:<br>"+getDate(),0,0,"n","70%"],
    0:["https://imgur.com/Hca85HU.jpg","contain","Hey guys, here's another contest for you all to show your creativity and skills.<br><br>Topic: Food Dishes<br><br>Contest judges are:<br> Justin and Namit Jain<br><br>Rules:<ol><li>You cannot use images.</li><li>All you have to do is make a dish.</li><li>Any food website code will not be considered.</li></ol>",0,0,"n","70%"],
    3:["https://imgur.com/wx02z6a.jpg","cover","This page is for giving you guys some ideas! (No discrimination will be there if you do something apart from the ideas below)<br><br>You can make:<ul><li>Cakes and muffins.</li><li>Fast food (eg: burger, pizza, noodles).</li><li>Indian food (eg: rotis & sabji).</li><li>Some drinks along with the food.</li><li>Some small toppings on the food.</li><li>Background enhancements (eg: table, plate, spoon, straws).</li></ul>",0,0,"n","72%"]
};

const calc = (a) => (a+1)*70 + 10;

window.onload = function() {
    setTimeout(function() {
        let loader = document.getElementById("loader");
        loader.style.top = "50%";
        loader.style.left = "50%";
        loader.style.height = "0";
        loader.style.width = "0";
        loader.style.opacity = "0";
        setTimeout(function() {
            loader.style.display = "none";
        },500);
        text = document.getElementById("text");
        cusor = document.getElementById("cursor");
        main = document.getElementById("main");
        main.style.display = "block";
        contest = document.getElementById("contest");
        info = document.getElementById("info");
        body = document.getElementsByTagName("body")[0];
       
        for (let i = 0; i < 4; i++) {
            MakeDiv(i);
        }
       
        setTimeout(function() {
            t1 = setInterval(Typing,100);
        },1000);
       
        t4 = setInterval(TextOpacity,100);
        t5 = setInterval(textOp,50);
       
        showInfo();
        showInfo();
    },5000);
};


function MakeDiv(i) {
    main.innerHTML += `<div class = 'pages' id = 'd${i}' onclick = 'f(${i})'><div style = 'background:url("${links[i][0]}");background-size:${links[i][1]};height:100%;width:100%;border-radius:50%;'></div><div style = "position:absolute;top:0;left:0;height:100%;width:100%;border-radius:50%;background:-webkit-radial-gradient(30% 20%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 70%);"></div></div>`;
    let di = document.getElementById("d"+i);
}

function f(i) {
    links[i][3]++;
    d = document.getElementById("d"+i);
    if (links[i][3]%2) {
        d.style.left = "75px";
        d.style.top = "60px";
        d.style.height = links[i][6];
        d.style.padding = "20px";
        d.style.width = "65%";
        d.style.background = "url('https://imgur.com/18wzKJC.jpg')";
        d.style.filter = "brightness(120%)";
        d.style.backgroundSize = "100% 100%";
        d.innerHTML = links[i][2];
        setTimeout(function() {
            links[i][5] = "y";
        },200);
        d.style.borderRadius = "0";
        d.style.border = "1px solid rgba(255,255,255,0.5)";
        for (let j = 0; j < Math.max(...Object.keys(links))+1;j++) {
            if (j != i) {
                links[j][5] = "n";
                let dj = document.getElementById("d"+j);
                dj.style.border = "2px solid black";
                if (links[j][3]%2) {
                    closing(j);
                    links[j][3]++;
                }
            }
        }
    }
    else {
        links[i][5] = "n";
        closing(i);
    }
}

function TextOpacity() {
    for (let i = 0; i < Math.max(...(Object.keys(links)))+1; i++) {
        if (links[i][5] == "n") {
            links[i][4] = 0;
        }
        else {
            if (links[i][4] < 1) {
                links[i][4]+=0.05;
            }
        }
    }
}

function textOp() {
    for (let i = 0; i < Math.max(...(Object.keys(links)))+1; i++) {
        document.getElementById("d"+i).style.color = `rgba(0,0,0,${links[i][4]})`;
    }
}

function closing(i) {
    let d = document.getElementById("d"+i);
    d.style.left = "13px";
    d.style.top = calc(i) + "px";
    d.style.height = "45px";
    d.style.width = "45px";
    d.style.padding = "0";
    d.style.background = "white";
    d.innerHTML = "";
    setTimeout(function() {d.innerHTML = `<div style = 'background:url("${links[i][0]}");background-size:${links[i][1]};height:100%;width:100%;border-radius:50%'></div><div style = "position:absolute;top:0;left:0;height:100%;width:100%;border-radius:50%;background:-webkit-radial-gradient(30% 20%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 70%);"></div></div>`;}, 500);
    d.style.borderRadius = "50%";
    d.style.border = "2px solid black";
}

function showInfo() {
    c++;
    info = document.getElementById("info");
    if (c%2) {
        info.innerHTML = "❌";
        for (let i = 0; i < Math.max(...(Object.keys(links)))+1; i++) {
            let a = i;
            i = calc(i);
            let el = document.getElementById(`d${a}`);
            el.style.display = "block";
            el.style.top = i + "px";
            i = a;
        }
    }
    else {
        info.innerHTML = "i";
        for (let i = 0; i < Math.max(...(Object.keys(links)))+1; i++) {
            let a = i;
            i = calc(i);
            closing(a);
            links[a][5] = "n";
            if (links[a][3]%2) {
                links[a][3]++;
            }
            let el = document.getElementById(`d${a}`);
            el.style.top = 10 + "px";
            i = a;
        }           
    }
}

function Typing() {
    if (ind < mytext.length) {
        document.getElementById("text").innerHTML += mytext[ind];
        ind++;
    }
    else {
        clearInterval(t1);
        setTimeout(function() {
            t2 = setInterval(BackSpace, 100);
        },200);
    }
}

function BackSpace() {
    var text = document.getElementById("text");
    if (text.innerHTML.slice(text.innerHTML.length-2,text.innerHTML.length) != "s ") {
        text.innerHTML = text.innerHTML.slice(0,text.innerHTML.length-1);
    }
    else {
        clearInterval(t2);
        setTimeout(function() {
            t3 = setInterval(MakeFood, 100);
        },200);
    }
}

function MakeFood() {
    var text = document.getElementById("text");
    if (ind2 < mynewtext.length) {
        text.innerHTML += mynewtext[ind2];
        ind2++;
    }
    else {
        clearInterval(t3);
    }
}

function getDate() {
    var date = new Date().toString().split(" ");
    var month = {
        "Sep":8,
        "Oct":9
    }[date[1]]
    if (month===undefined) {return "Expired!";}
    if (month == 9 && date[2] > 5) {return "Expired!";}
    if (month == 8) {
        if (date[2] < 20) {return "Time left: Not started yet!";}
        return "Time left: "+(35-parseInt(date[2]))+" days";
    }
    return "Time left: "+(5-parseInt(date[2])) + (5-parseInt(date[2])!=1?" days":" day");
}
