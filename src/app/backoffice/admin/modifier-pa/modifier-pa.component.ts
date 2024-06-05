import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modifier-pa',
  templateUrl: './modifier-pa.component.html',
  styleUrls: ['./modifier-pa.component.css']
})
export class ModifierPAComponent {
  constructor(private authService:AuthService){}
  update(ac:string,nu1:string,nu2:string){
    if(ac==this.authService.validPassword && nu1==nu2){
      this.authService.validPassword=nu1;
      console.log('update success')
    }
  }
}
