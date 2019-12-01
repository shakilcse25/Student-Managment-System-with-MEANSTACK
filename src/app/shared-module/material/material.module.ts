import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatRadioModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatDialogModule
  ],
  exports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatDialogModule
  ]
})
export class Material { }
