let moreButton = document.getElementById("morebutton");
let tldrButton = document.getElementById("tldrbutton");
let certificatesButton = document.getElementById("certificatesButton");
let introSection = document.getElementsByClassName("intro")[0];
let introSectionBreaks = document.getElementsByClassName("introbr");
let fullSection = document.getElementsByClassName("full")[0];
let fullSectionBreaks = document.getElementsByClassName("fullbr");
let tldrSection = document.getElementsByClassName("tldr")[0];
let tldrSectionBreaks = document.getElementsByClassName("tldrbr");
let profilePic = document.getElementsByClassName("profile")[0]


const expand = (event) => {
    moreButton.style.display = "none";
    document.getElementById("aboutme").style.gridArea = "1 / 1 / 2 / 3";
    document.getElementById("aboutme").innerHTML = "About Me";
    fullSection.style.fontSize = "1.2rem";
    fullSection.style.opacity = "1";
    document.getElementsByClassName("bio")[0].style.gridArea = "2 / 1 / 3 / 3";
    tldrButton.style.display = "block";
    profilePic.style.display = "none";
    introSection.style.fontSize = "0px";
    introSection.style.opacity = "0";
    tldrSection.style.fontSize = "0px";
    tldrSection.style.opacity = "0";
    for (x of introSectionBreaks){
        x.style.display = "none";
    }
    for (x of tldrSectionBreaks){
        x.style.display = "none";
    }
    for (x of fullSectionBreaks){
        x.style.display = "inline-block";
    }
}

const minimise = (event) => {
    moreButton.style.display = "block";
    profilePic.style.display = "block";
    tldrSection.style.fontSize = "1.2rem";
    tldrSection.style.opacity = "1";
    document.getElementById("aboutme").style.gridArea = "1 / 2 / 2 / 3";
    document.getElementById("aboutme").innerHTML = "TLDR";
    document.getElementsByClassName("bio")[0].style.gridArea = "2 / 2 / 3 / 3";
    tldrButton.style.display = "none";
    fullSection.style.fontSize = "0px";
    fullSection.style.opacity = "0";
    for (x of fullSectionBreaks){
        x.style.display = "none";
    }
    for (x of tldrSectionBreaks){
        x.style.display = "inline-block";
    }
}

const error = () => window.alert("Certificates page not yet created.");

moreButton.addEventListener("click", expand);
tldrButton.addEventListener("click", minimise);
certificatesButton.addEventListener("click", error);