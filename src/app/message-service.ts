import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Message {
  _id: string,
  phone: string,
  message: string,
  user: string,
  timestamp: Date
}

export interface NewMessage {
  phone: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: Array<Message> = [];

  constructor(private http: HttpClient) {
    this.http.get<any>('http://localhost:3000/messages').subscribe(response => {
      this.messages = response;
    });
  }
  public get_messages(): Array<Message> {
    return this.messages;
  }
  public post_message(newMessage: NewMessage) {
    let message = {phone: newMessage.phone, message: newMessage.message, user: 'fake', timestamp: new Date()};
    this.http.post<Message>('http://localhost:3000/messages', {message: message}).subscribe(result => {
      this.messages.push(result);
    });
  }
}
