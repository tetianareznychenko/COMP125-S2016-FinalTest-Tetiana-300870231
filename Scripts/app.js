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
    var rollButton = new createjs.Bitmap ("C:\Users\Zver\Desktop\COMP125-S2016-FinalTest-Tetiana-300870231\Assets\images\rollButton.png"); 
    var diceLabelOne = new createjs.Bitmap ("C:\Users\Zver\Desktop\COMP125-S2016-FinalTest-Tetiana-300870231\Assets\images\blank.png"); 
    var diceLabelTwo = new createjs.Bitmap ("C:\Users\Zver\Desktop\COMP125-S2016-FinalTest-Tetiana-300870231\Assets\images\blank.png"); 
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

        diceLabelOne.x = checkBounds(diceLabelOne.x, core.CANVAS_WIDTH);
        diceLabelOne.y = checkBounds(diceLabelOne.y, core.CANVAS_HEIGHT);
        diceLabelTwo.x = checkBounds(diceLabelOne.x, core.CANVAS_WIDTH);
        diceLabelTwo.y = checkBounds(diceLabelOne.y, core.CANVAS_HEIGHT);
    }
        
    //Display Random picture
    function randomImg(){
    var randomNumberOne = Math.floor(Math.random() * 7) + 1;
    var randomNumberTwo = Math.floor(Math.random() * 7) + 1;
    diceLabelOne = "img_" + randomNumberOne + ".png";
    diceLabelTwo = "img_" + randomNumberTwo + ".png";
    console.log(diceLabelOne);
    console.log(diceLabelTwo);
    
 }

    function rollButton_clicked() {
    rollButton = randomImg(); 
    console.log(rollButton);
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