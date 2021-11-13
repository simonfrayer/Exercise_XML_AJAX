let text = "<bookstore><book><author>George R. R. Martin</author><title>A Game of Thrones</title><year>1996</year></book>" + "<book><author>George R. R. Martin</author><title>A Clash of Kings</title><year>1998</year></book>" + "<book><author>George R. R. Martin</author><title>A Storm of Swords</title><year>2000</year></book>" + "<book><author>George R. R. Martin</author><title>A Feast for Crows</title><year>2005</year></book>" + "<book><author>George R. R. Martin</author><title>A Dance with Dragons</title><year>2011</year></book></bookstore>";
let listItemArray = document.getElementsByTagName("li");
listItemArray[2].innerHTML = listItemArray[2].innerHTML + " " + displayBookTitle(0);
listItemArray[3].innerHTML = listItemArray[3].innerHTML + " " + displayThirdBookTitle(2);
let authorName = document.querySelector("#authorName");
authorName.innerHTML = displayAuthor(0);
let tableGot = document.querySelector("#GOT");
tableGot.innerHTML = displayTable();
let tableHP = document.querySelector("#HP");
readXML();
let happy = document.querySelector("#happy");
happyFunction();

//Write your function declarations below this line
//example of a function getting and returning the book titles from the XML "text"
function displayBookTitle(n) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(text, "text/xml");
    let x = xmlDoc.getElementsByTagName("title");
    return x[n].childNodes[0].nodeValue;
}

function displayThirdBookTitle(n) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(text, "text/xml");
    let x = xmlDoc.getElementsByTagName("title");
    return x[n].childNodes[0].nodeValue;
}

function displayAuthor(n){
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(text, "text/xml");
    let x = xmlDoc.getElementsByTagName("author");
    return x[n].childNodes[0].nodeValue;
}
function displayTable(){
    let tableText = "<tr><td class='GOT'>Author</td><td class='GOT'>Title</td><td class='GOT'>Year</td></tr>"
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(text, "text/xml");
    let x = xmlDoc.getElementsByTagName("author");
    let y = xmlDoc.getElementsByTagName("title");
    let z = xmlDoc.getElementsByTagName("year");

    for (let i = 0; i < x.length; i++) {

            tableText += "<tr><td class='GOT'>" + x[i].childNodes[0].nodeValue + "</td>";
            tableText += "<td class='GOT'>" + y[i].childNodes[0].nodeValue + "</td>";
            tableText += "<td class='GOT'>" + z[i].childNodes[0].nodeValue + "</td></tr>";
    }
    return tableText;
}

function showData(xml){
    let table = "<tr><td class='GOT'>Author</td><td class='GOT'>Title</td><td class='GOT'>Year</td></tr>";
    let xmlDoc = xml.responseXML;
    let x = xmlDoc.getElementsByTagName("author");
    let y = xmlDoc.getElementsByTagName("title");
    let z = xmlDoc.getElementsByTagName("year");

    for (let i = 0; i < x.length; i++) {

        table += "<tr><td class='GOT'>" + x[i].childNodes[0].nodeValue + "</td>";
        table += "<td class='GOT'>" + y[i].childNodes[0].nodeValue + "</td>";
        table += "<td class='GOT'>" + z[i].childNodes[0].nodeValue + "</td></tr>";
    }
    return table;
}
function readXML() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            tableHP.innerHTML =  showData(xhttp);
        }
        else{
            tableHP.innerHTML = "Error";
        }
    }
    xhttp.open("get", "myList.xml", true);
    xhttp.send();
}

function lengthData(xml){
    let table = "<tr><td>Like</td><td>Wish</td><td>Learn</td></tr>";
    let xmlDoc = xml.responseXML;
    let x = xmlDoc.getElementsByTagName("LikeList");
    let y = xmlDoc.getElementsByTagName("WishList");
    let z = xmlDoc.getElementsByTagName("LearnList");

    for (let i = 0; i < x.length; i++) {

        table += "<tr><td>" + x[i].childNodes[0].nodeValue + "</td>";
        table += "<td>" + y[i].childNodes[0].nodeValue + "</td>";
        table += "<td>" + z[i].childNodes[0].nodeValue + "</td></tr>";
    }
    return table;
}

function happyFunction() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (xhttp.readyState === 4 && xhttp.status === 200) {
            happy.innerHTML =  lengthData(xhttp);
        }
        else{
            happy.innerHTML = "Error";
        }
    }
    xhttp.open("get", "list.xml", true);
    xhttp.send();
}

