import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Computer } from '../../model/computer';
import { ComputerService } from '../../service/computer.service';

@Component({
  selector: 'app-fform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './fform.component.html',
  styleUrl: './fform.component.css'
})
export class FformComponent implements OnInit{
  pcf!:FormGroup;
  pc!:Computer;
  id!:number
  formBuilder:FormBuilder=inject(FormBuilder);
  computerService:ComputerService=inject(ComputerService);
  activatedroute:ActivatedRoute=inject(ActivatedRoute);
  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    this.getpc()
    this.displayform();
  }
  getpc(){
    this.computerService.getComputerById(this.id).subscribe(
      data=>{
        this.pc=data;
        console.log(this.pc)
    });
  }
  displayform(){
    this.pcf=this.formBuilder.nonNullable.group(
      {
        id:[this.id],
        name:[this.pc?.name,[Validators.required,Validators.pattern('[A-Za-z]{5}')]],
        price:[this.pc?.price,[Validators.required,Validators.min(1000)]],
        available:[this.pc?.availability],
        date:[this.pc?.date],
        categ:[this.pc?.categ]
      }
    )
  }

}
