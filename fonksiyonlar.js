function merhabade() {
    console.log("Merhabalar !");
}

merhabade();

function gulegulede() {
    return "Güle Güle Hoşçakal !";
}

console.log(gulegulede());

var degiskenicifonksiyon = function() {
    console.log("Ben bir değişken içi fonksiyon örneğiyim !");
}

degiskenicifonksiyon();

function faktoryel(n) {
    if(n==0)
        return n=1;
    return n*faktoryel(n-1);
}

console.log(faktoryel(6));

function topla(x,y) {
    return x+y;
}

console.log(topla(10,20));