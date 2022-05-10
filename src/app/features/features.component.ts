import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  @Input() data: {
    marketing: { name: string; desc: string }[];
    digital: { name: string; desc: string }[];
    seo: { name: string; desc: string }[];
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
