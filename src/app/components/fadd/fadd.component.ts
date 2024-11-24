import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Computer } from '../../model/computer';
import { ComputerService } from '../../service/computer.service';

@Component({
  selector: 'app-fadd',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './fadd.component.html',
  styleUrl: './fadd.component.css'
})
export class FaddComponent implements OnInit{
 comp!:FormGroup
 formbuilder:FormBuilder=inject(FormBuilder);
 pc!:Computer[]
 newpc!:Computer;
 computerService:ComputerService=inject(ComputerService);
 ngOnInit(): void {
     this.computerService.getComputers().subscribe(
      data=>this.pc=data
     )
     this.comp=this.formbuilder.nonNullable.group({
      id:[this.pc.length],
      src:[''],
      name:[''],
      price:[1000],
      available:[true],
      date:[],
      categ:[],
     })
 }
 affectpc(){
  this.newpc.id=this.comp.controls['id'].value;
  this.newpc.photo=this.comp.controls['src'].value;
  this.newpc.name=this.comp.controls['name'].value;
  this.newpc.price=this.comp.controls['price'].value;
  this.newpc.availability=this.comp.controls['available'].value;
  this.newpc.categ=this.comp.controls['categ'].value;
  this.newpc.date=this.comp.controls['date'].value;
 }
 addpc(){
  this.affectpc()
  this.computerService.addComputer(this.newpc).subscribe();
 }
}
