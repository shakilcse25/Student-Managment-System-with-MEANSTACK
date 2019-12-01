import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DatatableService } from '../../../services/datatable.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  course: any;
  myid: any;

  // tslint:disable-next-line:max-line-length
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<ConfirmationComponent>, private api: DatatableService) { }



  onNoClick(): void {
    this.dialogRef.close();
  }

  yesClick() {
    this.api.deleteCourse(this.myid).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }



}
