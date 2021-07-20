import { Component, OnInit } from '@angular/core';
// import { count, im } from '../../global-variable';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent{
// im1=im;
// count1= count;
im="assets/images/1.jpg";
count=1;

  next() {
    if (!(this.count == 6)) {
        this.im= ("assets/images/" + ++this.count+ ".jpg");
    }
}
timer:any;

slide(){

  clearInterval(this.timer);
  this.timer = setInterval(() => {
      if ( this.count == 6) {
        this.count = 0;
      }
     this.im = ("assets/images/" + ++this.count + ".jpg");
  }, 500);

}
pause(){
  clearInterval(this.timer);
}
previous(){
  if (!(this.count == 1)) {
    this.im = ("assets/images/" + --this.count + ".jpg");
  }
}
}
