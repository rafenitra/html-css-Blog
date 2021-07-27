var filtre1 = document.getElementById('filtre1');
var filtre2 = document.getElementById('filtre2');
var filtre3 = document.getElementById('filtre3');
var sary1 = document.getElementById('sary1');
var sary2 = document.getElementById('sary2');
var sary3 = document.getElementById('sary3');

sary1.addEventListener("mouseover",
    function() {
        filtre1.style.display = "flex";
    }
);
filtre1.addEventListener("mouseout",
    () => {
        filtre1.style.display = "none";
    }
);
sary2.addEventListener("mouseover",
    function() {
        filtre2.style.display = "flex";
    }
);
filtre2.addEventListener("mouseout",
    () => {
        filtre2.style.display = "none";
    }
);
sary3.addEventListener("mouseover",
    function() {
        filtre3.style.display = "flex";
    }
);
filtre3.addEventListener("mouseout",
    () => {
        filtre3.style.display = "none";
    }
);