import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryServicesService } from 'src/app/shared/services/category-services.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  cats$
  id;
  constructor(private modalService:NgbModal,private service:CategoryServicesService) { 
    this.cats$ = this.service.getData().valueChanges()
  }

  ngOnInit(): void {
    //get key in firebase 
    this.id = this.service.getData().push({
    }).key
  }

// delet data function
  deleteItem(id, modal) {
    this.modalService.open(modal).result.then(result => {
      this.service.deleteItem(id)
  
    },reson=>{
      console.log(reson)
      console.log(id)
    })

  }
  





  
  // update(input:HTMLInputElement,id){
  //   this.db.object(`/categories/${id}`).update({
  //     name:input.value
  //   })
  // }
}
