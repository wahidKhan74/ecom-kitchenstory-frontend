import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public  products :any;
  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    // load get all products
    this.getAllProducts();
  }

  public getAllProducts(){
    this.apiservice.getAllProducts().subscribe( data => {
    console.log(data);
      this.products = data;
    });
  }

  create(){
    this.router.navigateByUrl('/create');
  }
}
