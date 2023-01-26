import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit{
  constructor(
    private router: Router,
    private dataTransferService: DataTransferService
    ){}

  data = this.dataTransferService.getData();
  
  errorHidden = true;
  resultHidden = true;

  activity = "";
  type = "";
  participants = "";
  price = "";
  accessibility = "";
  link = "";  
  linkHidden = true;

  ngOnInit(){
    console.log("works" + this.data);
    if(this.data.hasOwnProperty('error')){
      this.errorHidden = false;
    }else{
      this.activity = this.data.activity;
      this.type = this.data.type;
      this.participants = this.data.participants;
      this.price = String (this.data.price * 100);
      this.accessibility = String (this.data.accessibility * 100);
      if(this.data.link !== ""){
        this.link = this.data.link;
        this.linkHidden = false;  
      }
      this.resultHidden = false;
    }
  }

}
