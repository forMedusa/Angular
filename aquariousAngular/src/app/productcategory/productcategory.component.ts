import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  // styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent {
  constructor(private service:ApiserviceService){}
  ngOnInit(): void {
    this.getData()
  }
  productCateg:any
  imageString="https://gsapi.gulliyan.com/img-path/";

  getData(){
    this.service.getAllData().subscribe(res => {
      this.productCateg = res.data.allAdvert.rows
      console.log(res);
      console.log(this.productCateg[0].advert_image)
    })
  }

  getImageUrl(imagePath:string){
    return this.imageString+imagePath;
  }

}
