function setup() {
    console.log('Setting up p5.js ...');
    createCanvas(innerWidth, innerHeight);
}

function draw() {
    background('#fff');
    translate(width / 2, height / 2);
    stroke('#0f0f0f');
    strokeWeight(1.5)
    const arr = [];
    for (let x = -(innerWidth / 2); x < (innerWidth / 2); x += 1) {
        arr[arr.length] = [x, f(x)];
    }

    for (let x = 1; x < arr.length; x+=1) {
        line(...arr[x-1], ...arr[x])
    }

    line(...arr);
}

function f(x) {
    return Math.pow(x * 1.01, 3) - 12 * Math.pow(x, 2) + 9 * x + 2;
}