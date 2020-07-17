import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + JSON.stringify(VERSION)
  age : number = 37
  imageUrl : string = "https://picsum.photos/seed/picsum/200/300"
  imageHeight: string = "100"
  imageWidth: string = "50"
  states = [
      {
        "id": 1,
        "name": "TG"
      },
      {
        "id": 2,
        "name": "AP"
      }
    ]

  SaveUsers(){
    console.log('i am clicked !!')
  }

  OnChange(event : any){
    console.log("Some change happened")
    console.log(event.target.value);
  }

  GetGender(gender : any){
    if(gender == 1){
      console.log('selected male')
    }
    else{
      console.log('selected Female')
    }
    console.log(gender)
  }

}
