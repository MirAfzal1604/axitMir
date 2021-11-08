var cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function(move) {
    var x = move.clientX;
    var y = move.clientY;
    cursor.style.left = x + "px"
    cursor.style.top = y + "px";
});