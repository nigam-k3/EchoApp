import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  @Input() dis: { img :string; title: string; description: string };
  constructor() {}

  ngOnInit(): void {}
}
