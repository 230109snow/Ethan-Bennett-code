import { Component } from '@angular/core';
import { BoredApiService } from '../bored-api.service';
import { Router } from '@angular/router';
import { ViewChild} from '@angular/core'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private boredapi : BoredApiService, private router: Router){}
  
  inputNum : number = 0;

  validation = {
    required: true,
    min : 0,
    max : 100
  }

  findByOptions = ["type", "price", "participants", "accessibility"];
  typeOptions = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];
  findByChosenOption = '';
  chosenOption = '';

  range : number = 0;

  typeHidden = true;
  priceHidden = true;
  participantsHidden = true;
  accessibilityHidden = true;

  getActivity(form : any) : void{
    if(form.valid){
      console.log(this.range);
      
      this.boredapi.getActivity(this.findByChosenOption + "=" + this.range).subscribe((data: any) => {
        console.log(data);
      })
    }
  }

  getActivityByType(form : any) : void{
    if(form.valid){
      console.log(form.value);

      this.boredapi.getActivity(this.findByChosenOption + "=" + form.value).subscribe((data: any) => {
        console.log(data);
      })
    }
  }

  getActivityWithPercent(form : any) : void{
    if(form.valid){

      let fixedNum = (this.range / 100);
      console.log(fixedNum);

      this.boredapi.getActivity(this.findByChosenOption + "=" + fixedNum).subscribe((data: any) => {
        console.log(data);
      })
    }
  }

  showElement(){
    console.log(this.findByChosenOption)
    this.range = 0;

    if(this.findByChosenOption === "type"){
      this.typeHidden = false;
      
      this.priceHidden = true;
      this.participantsHidden = true;
      this.accessibilityHidden = true;
    }else if(this.findByChosenOption === "price"){
      this.priceHidden = false;

      this.typeHidden = true;
      this.participantsHidden = true;
      this.accessibilityHidden = true;
    }else if(this.findByChosenOption === "participants"){
      this.participantsHidden = false;

      this.typeHidden = true;
      this.priceHidden = true;
      this.accessibilityHidden = true;
    }else if(this.findByChosenOption === "accessibility"){
      this.accessibilityHidden = false;

      this.typeHidden = true;
      this.priceHidden = true;
      this.participantsHidden = true;
    }
  }


}
