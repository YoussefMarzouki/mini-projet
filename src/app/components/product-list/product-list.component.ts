import { Component, inject, OnInit } from '@angular/core';
import { Computer } from '../../model/computer';
import { ComputerService } from '../../service/computer.service';
import { RouterLink} from '@angular/router';
import { PcComponent } from "../pc/pc.component";


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [PcComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  computers!:Computer[];

  readonly computerservice:ComputerService =inject(ComputerService);
  ngOnInit(): void {
    this.displaycomputer();
  }
  displaycomputer(){
    this.computerservice.getComputers().subscribe(data => {
      this.computers = data
    })
  }
  searchPC(text:string) {
    if(text!=""){
      this.computerservice.getComputers().subscribe(data=>{
        this.computers=data.filter((computer:Computer)=>computer.name.toLowerCase().includes(text.toLowerCase()));
      })
    }
    else{
      this.displaycomputer();
    }
  }
  filterPrice(price:string){
    this.computerservice.getComputers().subscribe(data=>{
      this.computers=data.filter((computer:Computer)=>computer.price<=Number(price));
    })
  }
  filterCateg(index:number) {
    let categs=['Laptop','Gaming'];
    this.computerservice.getComputers().subscribe(data=>{
      this.computers=data.filter((computer:Computer)=>computer.categ===categs[index]);
    })
  }
  filterStock(available:boolean){
    this.computerservice.getComputers().subscribe(data=>{
      this.computers=data.filter((computer:Computer)=>computer.availability===available);
    })
  }
  currentPrice(price:string){
   let current=document.getElementById("price-current");
   current!.innerHTML=price+"DT";
  }
}
