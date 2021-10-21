
function setup() 
{
  createCanvas(400, 400);

  box1 = new Box(20,50,80,40,3);
  box2 = new Box(80,70,45,80,1);
}

function draw() 
{
  background(220);
  box1.show()
  box1.move()

  box2.show()
  box2.move()

}

