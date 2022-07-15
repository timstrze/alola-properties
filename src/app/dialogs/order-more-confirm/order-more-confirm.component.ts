import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-order-more-confirm',
  templateUrl: './order-more-confirm.component.html',
  styleUrls: ['./order-more-confirm.component.scss']
})
export class OrderMoreConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private http: HttpClient) {}

  ngOnInit(): void {
    console.log(this.data);
    this.http.get('https://us-central1-alola-properties.cloudfunctions.net/helloWorld').subscribe();

  }

}
