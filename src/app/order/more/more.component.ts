import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {ThemePalette} from '@angular/material/core';
import {FormBuilder} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {OrderMoreConfirmComponent} from '../../dialogs/order-more-confirm/order-more-confirm.component';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  selections = this.formBuilder.group({
    chips: false,
    cookies: false,
    fruitbars: false,
    juices: false,
    oatmeal: false,
    toothbrushes: false,
    toothpastes: false,
    mens_razors: false,
    womens_razors: false,
    womens_pads: false,
    water: false,
    toilet_paper: false,
    paper_towels: false,
  });

  constructor(private formBuilder: FormBuilder,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(OrderMoreConfirmComponent, {
      data: {
        selections: this.selections.value
      },
    });
  }

}
