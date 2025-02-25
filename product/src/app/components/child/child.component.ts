import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { StarPipe} from '../../pipes/star.pipe';
import { JsonPipe } from '@angular/common';
import { Product } from '../../entity/product';

@Component({
  selector: 'app-child',
  imports: [StarPipe,JsonPipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message! : string;
  @Output() notifyParent = new EventEmitter<string>();
  @Input() selectedProduct?:Product;
  sendMessage(){
    this.notifyParent.emit('Message from Child!');
  }

}
