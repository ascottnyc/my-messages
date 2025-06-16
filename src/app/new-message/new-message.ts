import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { MessageService } from 'src/app/message-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-message',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './new-message.html',
  styleUrl: './new-message.scss'
})
export class NewMessage {
  newMessageForm = new FormGroup({
    phone: new FormControl(''),
    message: new FormControl(''),
  });
  constructor(private message_service: MessageService) {}

  submit() {
    this.message_service.post_message({ phone: this.newMessageForm.value.phone!, message: this.newMessageForm.value.message! });
    this.clear();
  }

  clear() {
    this.newMessageForm.setValue({
      phone: '',
      message: ''
    });
  }
}
