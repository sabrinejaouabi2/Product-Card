import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
//FormControl("ando 3 paramaitre => 1: default , 2 :validator ") 
  //yaaml groupe lel form te3k 
myForm = new FormGroup({
  //najm naaml groupe a5er 
  usergroupe : new FormArray([
    new FormControl(null),
     new FormControl(null)
  ]
  
  )
})


constructor(){}
ngOnInit(): void {
  
}
OnSubmit(){
  console.log(this.myForm);
  
}
}
