import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const session_id = 'evFY78OxgpMi66s2-DHVaAvRm1ZnN0-Zx_Tyb5kzZY220TTi';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
expo class AppComponent {
  title = 'ai-angular';

  updateAndReturnTitle(value: string) {
    this.title = value;
    
    return value;
  }
}
