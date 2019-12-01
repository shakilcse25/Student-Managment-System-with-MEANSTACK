import { Component, OnInit } from '@angular/core';
declare var $: any;
import '../../../assets/js/scripts.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $('#menu').metisMenu();
    // $('nav li').click(function() {
    //   $('nav li').removeClass('active');
    //   $(this).addClass('active');
    // });
  }

}
