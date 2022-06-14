// JavaScript source code
function heartbeat() {
    let id = null;
    const elem = document.getElementById("heart");
    let height = 20 + 'px';
    let width = 20 + 'px'
    clearInterval(id);
    id = setInterval(size, 2);

    function size() {
        while (height == 20 + 'px' && width == 20 + 'px') {
            elem.style.height = (height - 5) + 'px';
            elem.style.width = (width - 5) + 'px';

        if (height == 15 + 'px' && width == 15 + 'px') {
            elem.style.height = (height + 5) + 'px';
            elem.style.width = (width + 5) + 'px';
    }
}