import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sample-name',
  templateUrl: './sample-name.component.html',
  styleUrls: ['./sample-name.component.css']
})
export class SampleNameComponent implements OnInit, OnChanges {
  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
}
