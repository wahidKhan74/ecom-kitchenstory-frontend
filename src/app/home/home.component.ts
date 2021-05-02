import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   
  constructor(private route: ActivatedRoute, private apiService:ApiService) { }
  public cusine: string ;
  product:any;
 

  
ngOnInit(): void {
  this.route.params.subscribe(params=>{ 
     console.log(params);
    this.cusine= params.cusine;
    this.apiService.getAllProductsByCusine(this.cusine).subscribe(data=>{
      console.log(data);
      this.product = data;
    })
  });


  }
}
