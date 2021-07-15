class Cannon{
constructor(x,y,w,h,angle){
this.x=x
this.y=y
this.w=w
this.h=h
this.angle=angle
}
show(){
fill("grey")
push()
translate(this.x,this.y)
rotate(this.angle)
rect(-10,-10,this.w,this.h)
arc(this.x-40,this.y,140,200,PI,TWO_PI)

}



}