import { Component, Input} from '@angular/core';
import { StarPipe } from "../../pipe/star.pipe";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [StarPipe],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() comment!:{
    rate:number,
    description:string,
    writer:string
  }
}
