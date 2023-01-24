// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

// P_2_0_03
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * drawing with a changing shape by draging the mouse.
 *
 * MOUSE
 * position x          : length
 * position y          : thickness and number of lines
 * drag                : draw
 *
 * KEYS
 * 1-3                 : stroke color
 * del, backspace      : erase
 * s                   : save png
 */
'use strict';

var strokeColor;
var numberOfSides;

function setup() {
  createCanvas(720, 720);
  colorMode(HSB, 360, 100, 100, 100);
  noFill();
  strokeWeight(2);
  strokeColor = color(0, 10);
  numberOfSides = 3;
  frameRate(60);
  //angleMode(DEGREES);
}

function draw() {
  //strokeColor = color(random(0,255), random(0,255), random(0,255), random(0,255));
  if (mouseIsPressed && mouseButton == LEFT) {
    push();
    translate(mouseX + cos(frameCount)*100, mouseY + sin(frameCount)*100);
    rotate(frameCount/10000);

    //circleResolution = int(map(mouseY + 100, 0, height, 2, 10));
    var radius = mouseX - width / 2;
    var angle = TAU / numberOfSides;

    stroke(strokeColor);
    
    beginShape();
    for (var i = 0; i <= numberOfSides; i++) {
      var x = cos(angle * i) * radius;
      var y = sin(angle * i) * radius;
      vertex(x, y);
    }
    endShape();    
    pop();
  }
  //angleMode(DEGREES);
  //rotate(2);
}

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(0, 0, 100);
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  //if (key == '1') strokeColor = color(0, 10);
  if (key == '2') numberOfSides = 2;
  if (key == '3') numberOfSides = 3;
  if (key == '4') numberOfSides = 4;
  if (key == '5') numberOfSides = 5;
  if (key == '6') numberOfSides = 6;
  if (key == '7') numberOfSides = 7;
  if (key == '8') numberOfSides = 8;
  if (key == '9') numberOfSides = 9;
  
}
