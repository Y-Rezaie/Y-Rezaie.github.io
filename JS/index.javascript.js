//set a time out
function preload_time_out() {
    var myVar;
    myVar = setTimeout(showPage, 1500);
}
//set the time out for pre-loader
function showPage() {
    document.getElementById("container-loader").style.display = "none";
    document.getElementById("container").style.display = "block";
}
//check the browser
browser = {};
if (/(Edge\/[0-9]{2})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(Edge\/[0-9]{2})/i)[0].split("/")[0];
    browser.version = parseInt(navigator.userAgent.match(/(Edge\/[0-9]{2})/i)[0].split("/")[1]);
} else if (/(chrome\/[0-9]{2})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(chrome\/[0-9]{2})/i)[0].split("/")[0];
    browser.version = parseInt(navigator.userAgent.match(/(chrome\/[0-9]{2})/i)[0].split("/")[1]);
} else if (/(firefox\/[0-9]{2})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(firefox\/[0-9]{2})/i)[0].split("/")[0];
    browser.version = parseInt(navigator.userAgent.match(/(firefox\/[0-9]{2})/i)[0].split("/")[1]);
} else if (/(MSIE\ [0-9]{1})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(MSIE\ [0-9]{1})/i)[0].split(" ")[0];
    browser.version = parseInt(navigator.userAgent.match(/(MSIE\ [0-9]+)/i)[0].split(" ")[1]);
} else if (/(Opera\/[0-9]{1})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(Opera\/[0-9]{1})/i)[0].split("/")[0];
    browser.version = parseInt(navigator.userAgent.match(/(Opera\/[0-9]{1})/i)[0].split("/")[1]);
} else if (/(Trident\/[7]{1})/i.test(navigator.userAgent)) {
    browser.agent = "MSIE";
    browser.version = 11;
} else {
    browser.agent = "none";
    browser.version = false;
}
//check the os
if (/(Windows\ NT\ [0-9]{1}\.[0-9]{1})/.test(navigator.userAgent)) {
    browser.os = "Windows";

    switch (parseFloat(navigator.userAgent.match(/(Windows\ NT\ [0-9]{1}\.[0-9]{1})/)[0].split(" ")[2])) {
        case 6.0:
            browser.osversion = "Vista";
            break;
        case 6.1:
            browser.osversion = "7";
            break;
        case 6.2:
            browser.osversion = "8";
            break;
        default:
            browser.osversion = false;
    }
} else if (/(OS\ X\ [0-9]{2}\.[0-9]{1})/.test(navigator.userAgent)) {
    browser.os = "OS X";
    browser.osversion = navigator.userAgent.match(/(OS\ X\ [0-9]{2}\.[0-9]{1})/)[0].split(" ")[2];
} else if (/(Linux)/.test(navigator.userAgent)) {
    browser.os = "Linux";
    browser.osversion = false;
}

//block IE 9 and earlier
if (browser.agent === "MSIE" && browser.version <= 9) {
    document.getElementById("IE-ns").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
}
function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("navbar-content").style.marginLeft = "60px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("header").style.width = "1000px";
    document.getElementById("nav-top").style.width = "923px";
    document.getElementById("nav-top").style.marginLeft = "115px";
    document.getElementById("slogan").style.fontSize = "45px";
    document.getElementById("slogan").style.marginTop = "-98px";
    //document.body.style.backgroundColor = "rgba(51, 51, 51, 0.726)";
    const menuIconTip = document.getElementById("menu-icon-tip");
    menuIconTip.classList.add('active');
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("navbar-content").style.marginLeft = "-200px";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("header").style.width = "1200px";
    document.getElementById("nav-top").style.width = "1123px";
    document.getElementById("nav-top").style.marginLeft = "140px";
    document.getElementById("slogan").style.fontSize = "55px";
    document.getElementById("slogan").style.marginTop = "-110px";
    //document.body.style.backgroundColor = "rgb(51, 51, 51)";
    const menuIconTip = document.getElementById("menu-icon-tip");
    menuIconTip.classList.remove('active');
}
   /* $(function() {
        $('a[href]').attr('target', '_blank');
    }); */
