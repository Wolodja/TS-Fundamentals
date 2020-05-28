function doLet() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally :" + i);
}

doLet();

function doVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally :" + i);
}

doVar();