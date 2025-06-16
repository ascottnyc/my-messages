import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Message, MessageService } from 'src/app/message-service';


@Component({
  selector: 'app-message-history',
  imports: [DatePipe],
  templateUrl: './message-history.html',
  styleUrl: './message-history.scss'
})
export class MessageHistory {
  private http = inject(HttpClient);
  messages: Array<Message> = [];
  
  constructor(private message_service: MessageService) {}

  ngOnInit() {
    this.messages = this.message_service.get_messages();
  }
}
