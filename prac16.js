var moveDiv = document.getElementById('movediv');

window.onmousemove = function (e) {
    var x = e.pageX,
        y = e.pageY;
    moveDiv.style.top = y + 'px';
    moveDiv.style.left = x + 'px';
};