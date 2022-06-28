// JavaScript source code
function heartbeat() {

    //Set id to null
    let id = null;

    //Get element for image
    const elem = document.getElementById("heart");

    //Default height and width
    elem.style.height = "20px";
    elem.style.width = "20px";
    //Clear interval if any is present
    clearInterval(id);
    //Set interval delay
    id = setInterval(function () {
        shrink(elem);
        grow(elem);
    }, 2000);

    function shrink(elem) {
        //Changes height and width of image
        if (elem.style.height == "20px" && elem.style.width == "20px") {
            elem.style.height = "15px";
            elem.style.width = "15px";
        }
    }

}

function grow(elem) {
    if (elem.style.height == "15px" && elem.style.width == "15px") {
        elem.style.height = '20px';
        elem.style.width = '20px';
}