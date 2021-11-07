/**
* @description : Create a flower shape group of dot using phyllotaxis principle
*                Ref : http://algorithmicbotany.org/papers/abop/abop-ch4.pdf
*
* @author cxts  <couchaux.thomas@gmail.com>
* @github https://github.com/cxTs
* @date 26/05/2020
* @required Draw.js, misc.js, Vector.js
* @return {VOID} Draw a flower
*
**/

// Creating random color on 4 variable r, g, b, a
let red = Math.floor(Math.random() * Math.floor(256));
let green = Math.floor(Math.random() * Math.floor(256));
let blue = Math.floor(Math.random() * Math.floor(256));
let alpha = 1;

// assign fillStyle with the created color
ctx.fillStyle = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
ctx.strokeStyle = "#000";
ctx.lineWidth = "2";

// variable name from the math formula to make it simplier to turn into an algo
let angle = 137.5 * (Math.PI / 180);
let n = 0;
let c = 5;
let r;
let x = 0;
let y = 0;
let v = new Vector(width / 2, height / 2);
let phi = 0;
let t = 0;

/**
* @description : called by window.requestAniamtionFrame(), draw the entire animation on canvas
* @param NONE
* @return {VOID}
*
**/
function draw() {
    if(n != 0 && n % 10 == 0 && Math.floor(r) % 3 == 0) changeColor();
    phi = n * angle;
    r = c * Math.sqrt(n);
    x = (Math.cos(phi) * r) + (width / 2);
    y = (Math.sin(phi) * r) + (height / 2);
    v.move(x, y);
    v.display(ctx, 4, true, true);
    if(n < 2600) { // limit the number of Vehicle created
        n++;
        window.requestAnimationFrame(draw);
    }
};
window.requestAnimationFrame(draw);



/**
* @description : create a random color and change the value of the Context fillStyle property
*                the next drawing on the canvas using filling method will use this new color
*
* @param {VOIR}
* @return {VOID} : Context.fillStyle value is changed
*
**/
function changeColor() {
    red = Math.floor(Math.random() * Math.floor(256));
    green = Math.floor(Math.random() * Math.floor(256));
    blue = Math.floor(Math.random() * Math.floor(256));
    ctx.fillStyle = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
}
