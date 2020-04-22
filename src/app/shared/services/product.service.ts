import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  getData() {
    return this.db.list('/products')
  }
  getSingleObj(id) {
    return this.db.object(`/products/${id}`)
  }
  updateData(id) {
    return this.db.object(`/products/${id}`).update
  }
  deleteItem(id) {
    return this.db.object(`/products/${id}`).remove()
  }
}
