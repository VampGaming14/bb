class Drop{
    constructor(x,y){
     var engine={
         friction:0.1
    }  
}
//this.body=Body.circle()    
  

    update(){
      
        if(this.rain.position.y > height){
         Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
        }
    }
};