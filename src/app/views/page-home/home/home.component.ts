import { Component, OnInit } from '@angular/core';
import { CategoryServicesService } from 'src/app/shared/services/category-services.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
cats$
catObj
products
productArr
randomProduct=[]
uniqRandomProduct
  constructor(private Catservice:CategoryServicesService,private productSer:ProductService) {
    //get category data
    this.cats$ = this.Catservice.getSingleObj(1).valueChanges().subscribe(res=>{
      this.catObj=res
    }) 

    //get product data
    this.products=this.productSer.getData().valueChanges().subscribe(res=>{
      this.productArr=res
      // get random item
      for(let i=0;i<10;i++){
        this.randomProduct.push(this.productArr[Math.floor(Math.random() * this.productArr.length)])
      }
      // to remove duplicated item
     this.uniqRandomProduct = [...new Set(this.randomProduct)];
    }) 
   }

  ngOnInit(): void {
  }
  
}
