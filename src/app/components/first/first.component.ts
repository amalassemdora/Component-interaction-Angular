import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
Fname="Amal";
Lname="Amal";

clickDef(){
  this.Lname=this.Fname;
}

}
