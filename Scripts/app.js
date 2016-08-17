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
    var rollButton;
    var diceLabelOne; 
    var diceLabelTwo;
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
        stage.update();
    }
    function main() {
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map