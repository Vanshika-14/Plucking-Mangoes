class Ground {
   constructor(x, y, w, h){
      var options ={
         isStatic: true,
      }
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      World.add(world, this.body);
   }
   display(){
      var pos = this.body.position
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("#3D281B");
      rect(0, 0, this.w, this.h);
      pop();
   }
}