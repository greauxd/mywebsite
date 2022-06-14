// JavaScript source code
function heartbeat() {
    let id = null;
    const elem = document.getElementById("heart");
    let height = 5 + 'px';
    let width = 5 + 'px'
    clearInterval(id);
    id = setInterval(size, 2);

    function size() {
        if (height != 10 + 'px' && width != 10 + 'px') {
            elem.style.height = (height + 5) + 'px';
            elem.style.width = (width + 5) + 'px';

        if (height == 10 + 'px' && width == 10 + 'px') {
            elem.style.height = (height - 5) + 'px';
            elem.style.width = (width - 5) + 'px';
    }
}