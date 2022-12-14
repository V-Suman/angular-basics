import { Component } from '@angular/core';

import { ExternalfacingService } from './externalfacing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic-external-api';
  errorMessage:String = ''
  actualUsers:any

  constructor(private externalService: ExternalfacingService){}

  fetchUsers(){
    this.externalService.getUsers().subscribe(
      (response)=>{
        this.actualUsers = response
        this.setUsers(this.actualUsers) //unclean version of subscribing
      }
    )
  }

  setUsers(x:any){
    console.log(x) //setter function to set data. Nothing special
  }

  fetchUsersDiff(){
    this.externalService.getUsers().subscribe({
      next: data => {this.setUsers(data),console.log("Hola")}, //clean version of subscribing
      error: error => console.log(error),
      complete: () => console.info('done')
    })
  }
}
