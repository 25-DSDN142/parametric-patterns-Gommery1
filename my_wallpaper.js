//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
 // pWallpaper.output_mode(DEVELOP_GLYPH);
 pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(255); // background colour white
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  
  var Ellipsesize = 80;
  
  var InnerSize = 60;

  var Mediumsize = 40; 

  var Smallsize = 20;

var cornercircles = 30;





noStroke();

//body




fill(8, 7, 7, 100) //background illusion black
ellipse(100, 100, Mediumsize, Mediumsize); // centre
ellipse(140, 100, Mediumsize, Mediumsize); // right of centre
ellipse(180, 100, Mediumsize, Mediumsize); // most right of centre
ellipse(100, 140, Mediumsize, Mediumsize); // below centre
ellipse(140, 140, Mediumsize, Mediumsize); // below, right of centre
ellipse(180, 140, Mediumsize, Mediumsize); // below far right of centre
ellipse(100, 180, Mediumsize, Mediumsize); // bottom below centre
ellipse(140, 180, Mediumsize, Mediumsize); // right of below centre
ellipse(180, 180, Mediumsize, Mediumsize); // far right of below centre

ellipse(60, 100, Mediumsize, Mediumsize); // left of centre
ellipse(20, 100, Mediumsize, Mediumsize); // far left of centre
ellipse(60, 140, Mediumsize, Mediumsize); // below centre left
ellipse(20, 140, Mediumsize, Mediumsize); // below centre far left
ellipse(60, 180, Mediumsize, Mediumsize); // far bottom left of centre
ellipse(20, 180, Mediumsize, Mediumsize); // far bottom and far left of centre


ellipse(60, 60, Mediumsize, Mediumsize); // above left of centre
ellipse(20, 60, Mediumsize, Mediumsize); // above far left of centre
ellipse(60, 20, Mediumsize, Mediumsize); // far above centre left
ellipse(20, 20, Mediumsize, Mediumsize); // far above centre far left


ellipse(100, 60, Mediumsize, Mediumsize); // above centre
ellipse(140, 60, Mediumsize, Mediumsize); // above right of centre
ellipse(180, 60, Mediumsize, Mediumsize); // above most right of centre
ellipse(100, 20, Mediumsize, Mediumsize); // far above centre
ellipse(140, 20, Mediumsize, Mediumsize); // far above right of centre
ellipse(180, 20, Mediumsize, Mediumsize); // far above and far right of centre

// WHITE INSIDE ELLIPSES 
fill(255, 100);
ellipse(100, 100, Smallsize, Smallsize); // centre
ellipse(140, 100, Smallsize, Smallsize); // right of centre
ellipse(180, 100, Smallsize, Smallsize); // most right of centre
ellipse(100, 140, Smallsize, Smallsize); // below centre
ellipse(140, 140, Smallsize, Smallsize); // below, right of centre
ellipse(180, 140, Smallsize, Smallsize); // below far right of centre
ellipse(100, 180, Smallsize, Smallsize); // bottom below centre
ellipse(140, 180, Smallsize, Smallsize); // right of below centre
ellipse(180, 180, Smallsize, Smallsize); // far right of below centre

ellipse(60, 100, Smallsize, Smallsize); // left of centre
ellipse(20, 100, Smallsize, Smallsize); // far left of centre
ellipse(60, 140, Smallsize, Smallsize); // below centre left
ellipse(20, 140, Smallsize, Smallsize); // below centre far left
ellipse(60, 180, Smallsize, Smallsize); // far bottom left of centre
ellipse(20, 180, Smallsize, Smallsize); // far bottom and far left of centre


ellipse(60, 60, Smallsize, Smallsize); // above left of centre
ellipse(20, 60, Smallsize, Smallsize); // above far left of centre
ellipse(60, 20, Smallsize, Smallsize); // far above centre left
ellipse(20, 20, Smallsize, Smallsize); // far above centre far left


ellipse(100, 60, Smallsize, Smallsize); // above centre
ellipse(140, 60, Smallsize, Smallsize); // above right of centre
ellipse(180, 60, Smallsize, Smallsize); // above most right of centre
ellipse(100, 20, Smallsize, Smallsize); // far above centre
ellipse(140, 20, Smallsize, Smallsize); // far above right of centre
ellipse(180, 20, Smallsize, Smallsize); // far above and far right of centre

// end of background illusion

fill(8, 7, 7); //Black big circles
ellipse(50, 50, Ellipsesize, Ellipsesize);
ellipse(150, 50, Ellipsesize, Ellipsesize);
ellipse(50, 150, Ellipsesize, Ellipsesize);
ellipse(150, 150, Ellipsesize, Ellipsesize);

fill(255); // white inner ellipse
ellipse(50, 50, InnerSize, InnerSize);
ellipse(150, 50, InnerSize, InnerSize);
ellipse(50, 150, InnerSize, InnerSize);
ellipse(150, 150, InnerSize, InnerSize);

fill(8, 7, 7); // medium circles
ellipse(50, 50, Mediumsize, Mediumsize);
ellipse(150, 50, Mediumsize, Mediumsize);
ellipse(50, 150, Mediumsize, Mediumsize);
ellipse(150, 150, Mediumsize, Mediumsize);

fill(255); // white inner ellipse
ellipse(50, 50, Smallsize, Smallsize);
ellipse(150, 50, Smallsize, Smallsize);
ellipse(50, 150, Smallsize, Smallsize);
ellipse(150, 150, Smallsize, Smallsize);


fill(8, 7, 7); // BIG CENTRE CIRCLE BLACK
ellipse(100, 100, 150, 150);

fill(255);
ellipse(100,100, 125, 125);

fill(8, 7, 7); // 
ellipse(100, 100, 100, 100);

fill(255);
ellipse(100, 100, 75, 75);

fill(8, 7, 7);
triangle(85, 85, 115, 85, 100, 70); //up triangle
triangle(85, 115, 115, 115, 100, 130); // down triangle 
triangle(85, 85, 85, 115, 70, 100); // left triangle 
triangle(115, 85, 115, 115, 130, 100); // right triangle

triangle(0, 0, 30, 0, 0, 30); // top left corner triangle
triangle(200, 0, 170, 0, 200, 30); // to right corner triangle
triangle(0, 200, 0, 170, 30, 200); // bottom left
triangle(200, 200, 170, 200, 200, 170); // bottom right

// CORNER CIRCLES 
fill(255);
ellipse(200, 200, cornercircles, cornercircles);
ellipse(0, 0, cornercircles, cornercircles);
ellipse(200, 0, cornercircles, cornercircles);
ellipse(0, 200, cornercircles, cornercircles);

fill(8, 7, 7);
// triangles on sides and bottom and top that will connect to make diamonds
triangle(200, 110, 200, 130, 190, 120); // horizontel bottom right triangle
triangle(0, 110, 0, 130, 10, 120); // horizontel bottom left triangle
triangle(200, 70, 200, 90, 190, 80); // horizontel above right triangle
triangle(0, 70, 0, 90, 10, 80); // horizontel above left triangle

triangle(70, 0, 90, 0, 80, 10); // top left
triangle(110, 0, 130, 0, 120, 10); // top right
triangle(70, 200, 90, 200, 80, 190); // bottom left
triangle(110, 200, 130, 200, 120, 190) // bottom right

fill(255);
//ELIPSES INSIDE DIAMONDS MADE BY PATTERN                             DONT BRING BACK
//ellipse(200, 120, 5, 5); // horizontel right bottom
//ellipse(0, 120, 5, 5); // horizentel left bottom
//ellipse(200, 80, 5, 5); // right side top
//ellipse(0, 80, 5, 5); // left side top


fill(8, 7 ,7);
// Inner triangle square inside other triangle square
triangle(90, 100, 100, 90, 90, 90); // top left
triangle(100, 90, 110, 100, 110, 90); // top right
triangle(90, 100, 100, 110, 90, 110); // bottom left
triangle(100, 110, 110, 100, 110, 110); // bottom right

// EVEN SMALLER TRIANGLE SQUARE INSIDE
triangle(95, 100, 105, 100, 100, 95); // top 
triangle(95, 100, 105, 100, 100, 105); //bottom
triangle(100, 95, 100, 105, 95, 100); // left
triangle (100, 95, 100, 105, 105, 100);

// Final core centre ellipse
fill(255);
ellipse(100, 100, 2, 2);

// ellipses that go in corner white circles that connect in pattern
fill(8, 7, 7);
ellipse(0, 0, Smallsize, Smallsize);
ellipse(200, 200, Smallsize, Smallsize);
ellipse(0, 200, Smallsize, Smallsize);
ellipse(200, 0, Smallsize, Smallsize);

//even smaller white circles that connect in pattern inside black circles
fill(255);
ellipse(0, 0, 10, 10);
ellipse(200, 200, 10, 10);
ellipse(0, 200, 10, 10);
ellipse(200, 0, 10, 10);

// IF statment for transparent triangles
if (Ellipsesize > 70) {
  fill(0 , 50); // black transparent
  triangle(100, 0, 0, 100, 200, 100);
}

if(Ellipsesize > 70) {
fill(0, 50);
triangle(100, 200, 0, 100, 200, 100);

}


}


