import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modifier-ua',
  templateUrl: './modifier-ua.component.html',
  styleUrls: ['./modifier-ua.component.css']
})
export class ModifierUAComponent {
  constructor(private authService:AuthService){}
  update(ac:string,nu1:string,nu2:string){
    if(ac==this.authService.validUsername && nu1==nu2){
      this.authService.validUsername=nu1;
      console.log('update success')
    }
  }

}
