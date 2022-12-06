"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = keyPressed;

let Player1 = {
    x: width / 2 - 100,
    y: height - 50,
    w: 200,
    score: 0
};

let Player2 = {
    x: width / 2,
    y: 50,
    w: 200,
    score: 0
};

let Ball = {
    x: 10,
    y: height / 2,
    size: 10,
    xSpeed: 5,
    ySpeed: 5
};

let n = width / 50;

setup();
draw();

function setup() {

}

function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "white";
    context.fillRect(Player1.x, Player1.y, Player1.w, 25);
    context.fillRect(Player2.x, Player2.y, Player2.w, 25);

    for (let i = 0; i < n; i++) {
        context.fillRect(i * 100, height / 2 + 12, 50, 25);
    }
    Ball.x += Ball.xSpeed;
    Ball.y += Ball.ySpeed;

    if (Ball.x + Player2.w / 2 < width && Ball.x - Player2.w / 2 > 0) {
        Player2.x = Ball.x - Player2.w / 2;
    }

    if (Ball.x >= Player1.x && Ball.x <= Player1.x + Player1.w) {
        console.log("YES1");
        if (Ball.y + Ball.size >= Player1.y) {
            Ball.ySpeed *= -1;
        }
    }

    if (Ball.x >= Player2.x && Ball.x <= Player2.x + Player2.w) {
        console.log("YES2");
        if (Ball.y - Ball.size <= Player2.y + 25) {
            Ball.ySpeed *= -1;
        }
    }

    if (Ball.x + Ball.size >= width || Ball.x - Ball.size <= 0) {
        Ball.xSpeed *= -1;
    }

    if (Ball.y > height) {
        Player2.score++;
        resetBall();
    }
    if (Ball.y > height) {
        Player2.score++;
        resetBall();
    }

    Utils.fillCircle(Ball.x, Ball.y, Ball.size);

    context.font = "bold 100px Arial";
    context.fillText(Player2.score, 50, height / 2 - 100);
    context.fillText(Player1.score, 50, height / 2 + 200);

    requestAnimationFrame(draw);

}

function resetBall() {
    Ball.x = 10;
    Ball.y = height / 2;
    Ball.xSpeed = 5;
    Ball.ySpeed = 5;
}
/**
 * 
 * @param {KeyboardEvent} e 
 */
function keyPressed(e) {
    //if (e.key == "ArrowRight") {
    if (e.pageX + Player1.w / 2 < width && e.pageX - Player1.w / 2 > 0) {
        //Player1.x += 20;
        Player1.x = e.pageX - Player1.w / 2;
    }
    //}
    //} else if (e.key == "ArrowLeft") {

    //  }
}