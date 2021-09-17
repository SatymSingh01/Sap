import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productlist: any;
  name: any;
  filteredString: string = '';
  p: number = 34;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getproduct()
    .subscribe(res=>{
      this.productlist = res;
    })
  }
  Search(){
    if(this.name==" "){
      this.ngOnInit();
    }else{
      this.productlist= this.productlist.filter((res1: { name: any; }) =>{
        return res1.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }
  key:string = 'id';
  reverse: boolean = false;
  sort(key: any){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
