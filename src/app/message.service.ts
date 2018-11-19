import { Injectable } from '@angular/core';
import { Message } from './model/message';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: Message[] = [];
  constructor() { }



  addError(message: string): void {
    var messageId = this.messages.length > 0 ? Math.max(...this.messages.map(error => error.id)) + 1 : 1;
    this.messages.push({id:messageId,message:message,type:0});

  }

  addNotification(message: string): void {
    var messageId = this.messages.length > 0 ? Math.max(...this.messages.map(error => error.id)) + 1 : 1;
    this.messages.push({id:messageId,message:message,type:1});
  }

  dismiss(id: number): void {
    this.messages = this.messages.filter(error => error.id != id);
  }

  clear(): void {
    this.messages = [];
  }


}
