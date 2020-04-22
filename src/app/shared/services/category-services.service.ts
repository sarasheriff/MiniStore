import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryServicesService {

  constructor(private db: AngularFireDatabase) { }
  getData() {
    return this.db.list('/categories')
  }
  getSingleObj(id) {
    return this.db.object(`/categories/${id}`)
  }
  updateData(id) {
    return this.db.object(`/categories/${id}`).update
  }
  deleteItem(id) {
    return this.db.object(`/categories/${id}`).remove()
  }
}




