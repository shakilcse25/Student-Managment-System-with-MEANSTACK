import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DatatableService } from '../../services/datatable.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActiveService } from '../../services/active/active.service';
declare var $: any;

export interface Sample {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit, OnDestroy {
  dataSource: any;
  displayedColumns = ['dept_id', 'basic_info.name', 'dept', 'result.cgpa', 'Action'];
  student: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  // data delete without page reload
  navigationSubscription;
  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private userService: DatatableService, private activ: ActiveService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.userService.getUser().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      },
      err => {
        console.log(err);
      });
  }



  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this.activ.activateMenu('student', 'result');


    // $('#dataTable').DataTable({
    //   responsive: true
    // });
    this.userService.getUser().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      },
      err => {
        console.log(err);
      });

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
