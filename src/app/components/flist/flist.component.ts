import { Component, inject, OnInit } from '@angular/core';
import { ComputerService } from '../../service/computer.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { Computer } from '../../model/computer';
import { DatePipe, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flist',
  standalone: true,
  imports: [DatePipe,RouterLink],
  templateUrl: './flist.component.html',
  styleUrl: './flist.component.css'
})
export class FlistComponent extends ProductListComponent implements OnInit{
  readonly computerService:ComputerService=inject(ComputerService);
  override ngOnInit(): void {
    super.ngOnInit()
  }
  deletepc(id:string){
    this.computerService.deleteComputer(Number(id)).subscribe();
  }
}
