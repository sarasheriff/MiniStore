import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { CategoryServicesService } from 'src/app/shared/services/category-services.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  itemCatId;
  product;
  cat;
  singleCat;
  categoryInfo;
  selectedproductData;
  productData;
  specificProductData

  constructor(private activatedRout: ActivatedRoute,private modalService:NgbModal,
    private service: ProductService,private catService:CategoryServicesService) { }

  ngOnInit(): void {
    this.activatedRout.params.subscribe(params => {
      this.itemCatId = params.id
      this.cat = this.catService.getData().valueChanges().subscribe(res => {
        this.categoryInfo = res;
        this.singleCat=this.specificCatFun(this.itemCatId)
       

      })
      // to get specific product data
      this.product=this.service.getData().valueChanges().subscribe(res=>{
        this.productData = res
        this.selectedproductData = this.specificProduct(this.itemCatId);
        // console.log(this.selectedproductData)
      })

    })
  }
// specific category function
  specificCatFun(id){
    for(let item of this.categoryInfo){
      if(item.id == id){
        return item
      }
    }
  }
  // specific product function
  specificProduct(id){
    this.specificProductData=[] //to clear array 
    for(let data of this.productData){
   
        if(data.idCat == id)
        this.specificProductData.push(data)
  
    }
    return this.specificProductData
  }

    // delet data function
    deleteItem(id, modal) {
      this.modalService.open(modal).result.then(result => {
        this.service.deleteItem(id)
      },reson=>{
        console.log(reson)
      })
  
    }
}
