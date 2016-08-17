/// <reference path="objects/label.ts"/>
/// <reference path="objects/button.ts"/>

/**
 * FileName: app.js
 *
 * @author Tetiana Reznychenko
 * @date August 17, 2016
 *
 * StudentID: 300870231
 *
 * @description This web app will display a random result of two dies set side by side within the webpage. Each time the
 * player presses the Roll button the dice result displayed will change.
 */

// IIFE - Immediately Invoked Function Expression
var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    var rollButton = new createjs.Bitmap ("../Assets/images/rollButton.png"); 
    var diceLabelOne = new createjs.Bitmap ("../Assets/images/blank.png"); 
    var diceLabelTwo = new createjs.Bitmap ("../Assets/images/blank.png"); 
    var yDirection = 1;
    var xDirection = 1;
    var dy = 1;
    var dx = 1;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }

    /**
     * Utility Method to set the bounds of an object
     *
     * @param {number} axis
     * @param {number} boundary
     * @returns {number}
     */
    function checkBounds(axis, boundary) {
        if (axis >= boundary) {
            axis = boundary;
        }
        if (axis <= 0) {
            axis = 0;
        }
        return axis;
    }


    /**
     * Event method that triggers every frame
     *
     * @method gameLoop
     */    
    function gameLoop() {

        stage.update(); // refresh the stage container
    }
    
    //Create an array of images
    var dicePictures = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png'];     
    
    //Display Random picture
    function randomImg(){
    var randomNumberOne = Math.floor(Math.random() * 7) + 1;
    var randomNumberTwo = Math.floor(Math.random() * 7) + 1;
    diceLabelOne = "img_" + randomNumberOne + ".png";
    diceLabelTwo = "img_" + randomNumberTwo + ".png";
    
 }

    function rollButton_clicked() {
    rollButton = randomImg(); 
    }


    function main() {
    
    //Add labels to canvas
    stage.addChild(diceLabelOne);
    stage.addChild(diceLabelTwo);
    stage.addChild(rollButton);


    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map