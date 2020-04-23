import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant2 } from '../interface';

@Component({
  selector: 'resto-detail-app',
  templateUrl: './resto-detail.component.html',
  styleUrls: ['./resto-detail.component.scss']
})
export class RestoDetailComponent implements OnInit {

  @Input() restoDetail: Restaurant2;
  @Output() hideRestoDetaiPage = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
    console.log("resto details =====> ", JSON.stringify(this.restoDetail));
  }

  public backToListPage(): void {
    this.hideRestoDetaiPage.emit(false);
  }
}
