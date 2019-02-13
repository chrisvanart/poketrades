import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../user.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]});


  }

  get f() { return this.registerForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.userService.register(this.f.username.value,this.f.password.value).pipe(first()).subscribe(
        data => {
                  this.messageService.addNotification("Registratie gelukt, je kan nu inloggen");
                  this.router.navigate(['/home']);
                },
        error => {this.messageService.addError(error);
                    this.loading = false;
                  });
  }

}
