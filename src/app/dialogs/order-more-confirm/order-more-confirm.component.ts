import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-order-more-confirm',
  templateUrl: './order-more-confirm.component.html',
  styleUrls: ['./order-more-confirm.component.scss']
})
export class OrderMoreConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log(this.data);
  }

}
