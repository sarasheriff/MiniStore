import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 product
  id;
  constructor(private modalService:NgbModal,private service:ProductService) { 
    this.product = this.service.getData().valueChanges()
  }
  ngOnInit(): void {}

  // delet data function
  deleteItem(id, modal) {
    this.modalService.open(modal).result.then(result => {
      this.service.deleteItem(id)
    },reson=>{
      console.log(reson)
    })

  }
}
