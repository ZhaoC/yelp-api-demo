import { Component, OnInit, Inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { YelpHelper } from '../../util/YelpHelper';
import { LocationHelper } from '../../util/LocationHelper';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'yelp-list',
  templateUrl: './yelp-list.component.html',
  styleUrls: ['./yelp-list.component.css']
})
export class YelpListComponent implements OnInit {

  restaurants = [];
  groceryStores = [];
  concatStore = []; //merge of to type

  // set for spniner visability
  isVisible = true;

  id:string;
  name:string;
  clickedStore = {};
  
  constructor(private http: HttpClient, public dialog: MatDialog) { }

  async ngOnInit() {
      this.restaurants = await YelpHelper.getYelpSiteData(this.http, "restaurants"); //get restaurants content for current location 
      this.groceryStores = await YelpHelper.getYelpSiteData(this.http, "groceryStores"); //get grocery stores content for current location

      this.isVisible = false; //set spinner visibility after data load properly

      this.concatStore = this.restaurants.concat(this.groceryStores);
  }

  openDialog(id): void {
    console.log('concatStore',this.concatStore);
    // set clicked store
    this.clickedStore = this.concatStore.filter( (item)=>{
      return item['id'] === id;
    })[0];
    // console.log('clickedStore name',this.clickedStore['name']);

    let dialogRef = this.dialog.open(YelpListModal, {
      width: '65%',
      data: {clickedStore: this.clickedStore}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.restaurant = result;
    });
  }

}

@Component({
  selector: 'yelp-list-modal',
  templateUrl: 'yelp-list-modal.html',
})
export class YelpListModal {

  constructor(
    public dialogRef: MatDialogRef<YelpListModal>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
