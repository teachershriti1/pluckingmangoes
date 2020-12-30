class Mango{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            //restitution:0.8,
            //friction:0.3,
            //density:0.5
        }
        this.image=loadImage("mango.png")
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
       
        World.add(world,this.body)
        //console.log(this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        image(this.image,0,0,this.width,this.height)
        pop()
    }

}