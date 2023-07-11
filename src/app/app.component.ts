import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'crudBasic';

  //Adatok
  adatok : any[] = [
    {
      'name':  'Anti',
      'email' : 'anti@gmail.com',
      'age' : 29,
    },
    {
      'name':  'Geza',
      'email' : 'geza@gmail.com',
      'age' : 30,
    },
    {
      'name':  'Agi',
      'email' : 'agi@gmail.com',
      'age' : 22,
    }
  ];

  //Változók
  //Hozzáad / Frissites gomb változtatása
  frissitesGomb :boolean = false;
  
  //Beérkező adatok inputokbol
  nameInput: string = "";
  emailInput: string = "";
  numberInput: number | undefined;

  //Frissitendő Index
  valtoztatIndex : any;

  //Fuggvenyek
  hozzadEvent()
  {
    this.adatok.push({
      'name':this.nameInput,
      'email':this.emailInput,
      'age':this.numberInput
    });

    console.log(this.nameInput, this.emailInput);
    
  this.nameInput = "";
  this.emailInput = "";
  this.numberInput = undefined;
  }

  torlesEvent(event : number)
  {
    this.adatok.splice(event,1);
  }

  valtoztatEvent(event : number)
  {
    this.nameInput = this.adatok[event].name;
    this.emailInput = this.adatok[event].email;
    this.numberInput = this.adatok[event].age;

    this.valtoztatIndex = event;

    this.frissitesGomb = true;
  }

  frissitesEvent()
  {
    this.adatok[this.valtoztatIndex] = {
      'name':this.nameInput,
      'email':this.emailInput,
      'age':this.numberInput
    };
    
    this.nameInput = "";
    this.emailInput = "";
    this.numberInput = undefined;
  }
}
