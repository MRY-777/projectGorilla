(function() {
    "use strict";
    
    window.onload = function(){
        alert("ゴリラの始まり");
        const btn = document.getElementById("rotatebutton");
        btn.onclick = rotateGorilla;
        //btn.addEventListener("click", rotateGorilla);
    };
    function rotateGorilla(){
        alert("ゴリラ回転");
    }
})();