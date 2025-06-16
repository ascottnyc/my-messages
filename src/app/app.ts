import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewMessage } from 'src/app/new-message/new-message';
import { MessageHistory } from 'src/app/message-history/message-history';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewMessage, MessageHistory],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'my-messages';
}
