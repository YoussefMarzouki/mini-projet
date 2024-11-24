import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Computer } from '../../model/computer';
import { ComputerService } from '../../service/computer.service';
import { Comment } from '../../model/comment';
import { StarPipe } from '../../pipe/star.pipe';
import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { CommentComponent } from "../comment/comment.component";


@Component({
  selector: 'app-product-selected',
  standalone: true,
  imports: [RouterLink, StarPipe, DatePipe],
  templateUrl: './product-selected.component.html',
  styleUrl: './product-selected.component.css'
})
export class ProductSelectedComponent implements OnInit{
  pc!:Computer;
  commentaires:string[]=[];
  idcomp!:number;
  readonly computerservice:ComputerService=inject(ComputerService);
  
  activatedroute:ActivatedRoute=inject(ActivatedRoute)

  ngOnInit(): void {
      this.idcomp=this.activatedroute.snapshot.params["id"];
      this.displayComputer();
      //this.convert();
      console.log(this.pc.comments);
  }
  displayComputer(){
    this.computerservice.getComputerById(this.idcomp).subscribe(data =>{ 
      this.pc=data
    });
  }
 /* convert(){
    this.pc.comments.forEach(com=>{
      this.commentaires.push(`${com.writer} rated it : ${com.rating } <br/> ${com.description} `)
    })
  }*/
}
