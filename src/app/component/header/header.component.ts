import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public name : any;
public productlist : any;
constructor() { }

  ngOnInit(): void {
   
  }
  Search(){
    if(this.name==""){
      this.ngOnInit();
    }else{
      this.productlist= this.productlist.filter((res: { name: string; })=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

}
