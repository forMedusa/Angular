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
  productCateg={
    link:'',
    image:''
  }
  imageString="https://gsapi.gulliyan.com/img-path/";

  getData(){
    this.service.getAllData().subscribe(res => {
      this.productCateg.link = res.data.allAdvert.rows[0].link
      this.productCateg.image = res.data.allAdvert.rows[0].advert_image
      console.log(res);
      console.log(this.productCateg);
    })
  }

  getImageUrl(imagePath:string){
    return this.imageString+imagePath;
  }

}
