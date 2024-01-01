import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HelloWorldPage implements OnInit {
  inputText?: string;
  constructor() { }

  ngOnInit(): void {
    this.inputText = 'Hello, Hybrid development World!';
  }

  updateInputText($event: Event) {
    this.inputText = ($event.target as HTMLInputElement).value;
  }
}
