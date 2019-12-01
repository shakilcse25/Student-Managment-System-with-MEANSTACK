import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  constructor() { }
  activateMenu( cl, main ) {
    $('nav li').removeClass('active');
    $('.' + cl).addClass('active');
    $('.' + main).addClass('active');
    $('nav ul li ul').removeClass('collapse in');
    $('#' + cl).addClass('collapse in');
  }
}
