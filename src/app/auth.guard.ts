import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DatatableService } from './services/datatable.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: DatatableService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      this._router.navigate(['student/login']);
      return false;
    }
  }
}
