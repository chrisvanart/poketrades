import { Injectable } from '@angular/core';
import { Message } from './model/message';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public errors: Message[] = [];
  constructor() { }



  addError(message: string): void {
    var messageId = this.errors.length > 0 ? Math.max(...this.errors.map(error => error.id)) + 1 : 1;
    this.errors.push({id:messageId,message:message});

  }

  dismiss(id: number): void {
    this.errors = this.errors.filter(error => error.id != id);
  }


}
