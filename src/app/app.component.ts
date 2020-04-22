import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CategoryServicesService } from './shared/services/category-services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cats$
  constructor(private db:AngularFireDatabase,private serviceCat:CategoryServicesService){
    this.cats$ = this.serviceCat.getData().valueChanges() //get  data of category
  }
}
