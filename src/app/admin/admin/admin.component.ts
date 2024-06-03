import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{Router} from '@angular/router' 


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
     constructor(private router:Router){

   }
   logOut(){
    localStorage.removeItem('adminId')
    this.router.navigate(['/adminlogin'])

   }
}
