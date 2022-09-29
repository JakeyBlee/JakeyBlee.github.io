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
let skillsSec = document.getElementsByClassName("skills")[0];
let phaseOneButton = document.getElementById("phaseonebutton");
let phaseTwoButton = document.getElementById("phasetwobutton")

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
    tldrButton.style.gridArea = "3 / 1 / 4 / 3";
    skillsSec.style.gridArea = "4 / 1 / 5 / 3";
    for (x of introSectionBreaks){
        x.style.display = "none";
    }
    for (x of tldrSectionBreaks){
        x.style.display = "none";
    }
    for (x of fullSectionBreaks){
        x.style.display = "inline-block";
    }
    if (window.matchMedia("(max-width: 1000px)").matches){
        document.getElementById("aboutme").style.gridArea = "1 / 1 / 2 / 2";
        document.getElementsByClassName("bio")[0].style.gridArea = "2 / 1 / 3 / 2";
        tldrButton.style.gridArea = "3 / 1 / 4 / 2";
        skillsSec.style.gridArea = "4 / 1 / 5 / 2";
        fullSection.style.fontSize = "1rem";
    }
}

const minimise = (event) => {
    moreButton.style.display = "block";
    profilePic.style.display = "block";
    profilePic.style.gridArea = "1 / 1 / 4 / 2";
    tldrSection.style.fontSize = "1.2rem";
    tldrSection.style.opacity = "1";
    document.getElementById("aboutme").style.gridArea = "1 / 2 / 2 / 3";
    document.getElementById("aboutme").innerHTML = "TLDR";
    document.getElementsByClassName("bio")[0].style.gridArea = "2 / 2 / 3 / 3";
    tldrButton.style.display = "none";
    fullSection.style.fontSize = "0px";
    fullSection.style.opacity = "0";
    moreButton.style.gridArea = "3 / 2 / 4 / 3";
    skillsSec.style.gridArea = "4 / 1 / 5 / 3";
    for (x of fullSectionBreaks){
        x.style.display = "none";
    }
    for (x of tldrSectionBreaks){
        x.style.display = "inline-block";
    }
    if (window.matchMedia("(max-width: 1000px)").matches){
        document.getElementById("aboutme").style.gridArea = "1 / 1 / 2 / 2";
        document.getElementsByClassName("bio")[0].style.gridArea = "2 / 1 / 3 / 2";
        moreButton.style.gridArea = "3 / 1 / 4 / 2";
        skillsSec.style.gridArea = "4 / 1 / 5 / 2";
        profilePic.style.display = "none";
    }
    if (window.matchMedia("(max-width: 600px)").matches){
    tldrSection.style.fontSize = "1rem";
    }
}

const showphaseone = () => {
    document.getElementsByClassName("phaseOne")[0].style.display = "flex";
    document.getElementsByClassName("phaseTwo")[0].style.display = "none";
    document.getElementsByClassName("phaseOne")[1].style.display = "flex";
    document.getElementsByClassName("phaseTwo")[1].style.display = "none";
}

const showphasetwo = () => {
    document.getElementsByClassName("phaseTwo")[0].style.display = "flex";
    document.getElementsByClassName("phaseOne")[0].style.display = "none";
    document.getElementsByClassName("phaseTwo")[1].style.display = "flex";
    document.getElementsByClassName("phaseOne")[1].style.display = "none";
}

const error = () => window.alert("Certificates page not yet created.");

moreButton.addEventListener("click", expand);
tldrButton.addEventListener("click", minimise);
certificatesButton.addEventListener("click", error);
phaseOneButton.addEventListener("click", showphaseone);
phaseTwoButton.addEventListener("click", showphasetwo);