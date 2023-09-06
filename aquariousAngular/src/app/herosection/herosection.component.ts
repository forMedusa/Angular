import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  // styleUrls: ['./herosection.component.css']
})
export class HerosectionComponent implements OnInit {
  constructor(private service:ApiserviceService){}
  ngOnInit(): void {
    this.getData()
  }
  heroSectionData:any
  imageString="https://gsapi.gulliyan.com/img-path/";
  getData(){
    this.service.getAllData().subscribe(res => {
      this.heroSectionData = res.data.homePageBanner.rows
      console.log(res);
      console.log(this.heroSectionData)
      console.log(this.heroSectionData[0].images)
      console.log(this.heroSectionData[0].heading)
    })
  }
  getImageUrl(imagePath:string){
    return this.imageString+imagePath;
  }
}
