import { Component } from '@angular/core';
import { StarPipe} from '../../pipes/star.pipe';
import { ReversePipe } from '../../pipes/reverse.pipe';
ReversePipe
@Component({
  selector: 'app-demo',
  imports: [StarPipe,ReversePipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  title = 'This is Demo';
}
