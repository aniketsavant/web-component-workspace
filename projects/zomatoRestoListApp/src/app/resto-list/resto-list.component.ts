import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestoListServiceService } from '../services/resto-list-service.service';
import { RestaurantList, Restaurant, RequestPayloadForRestoList } from '../../interface';
@Component({
  selector: 'resto-list-app',
  templateUrl: './resto-list.component.html',
  styleUrls: ['./resto-list.component.scss']
})
export class RestoListComponent implements OnInit {

  // @Input() listCount : string | number;
  // @Input() latitude : string ;
  // @Input() longitude : string ;
  // @Input() collectionId : string | number ;

  @Input() listCount : string  = '10';
  @Input() latitude : string = '18.5204° N';
  @Input() longitude : string = '73.8567° E';
  @Input() collectionId : string = '75';
  @Output() selectedRestoDetails = new EventEmitter(); 
  
  public restoListData: Restaurant[];

  constructor(private restoListServiceService: RestoListServiceService) { }

  ngOnInit(): void {
    this.getRestoList();
  }

  public getRestoList(): void {
    this.restoListServiceService.getRestoList(this.getReqPayload()).subscribe((res: RestaurantList) =>{
        this.restoListData = res.restaurants;
        console.log(this.restoListData);
    })
  }

  public getReqPayload(): RequestPayloadForRestoList {
    const reqPayload: RequestPayloadForRestoList = {
      listCount: this.listCount,
      latitude: this.latitude,
      longitude: this.longitude,
      collectionId: this.collectionId
    };
    return reqPayload;;
  }

  public onRestoNameClick(restoListData): void {
    this.selectedRestoDetails.emit(restoListData);
  }

}
