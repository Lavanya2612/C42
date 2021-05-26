class Drops{
    constructor(x,y,r){
var options={
    'friction': 0.1,
    'isStatic' : true
}

this.x=x
this.y = y  
this.r = r 
this.rain = Bodies.circle(x,y,5,options)
World . add(world,this.rain)

    }



display(){
    var pos = this.body.position
    fill('blue')
    ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,50,50)
}

update(){
    if(this.rain.position.y > height){

  Matter . Body. setPosition(this.rain, {x:Random(0,400), y:random (0,400)})
    }
}
}