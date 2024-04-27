import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {FormsModule} from "@angular/forms";

import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {RequestResultsComponent} from "./medSystem/pages/request-results/request-results.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {AppointmentsComponent} from "./medSystem/pages/appointments/appointments.component";
import {BaseService} from "./shared/services/base.service";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import {TreatmentsComponent} from "./medSystem/pages/treatments/treatments.component";
import {CdkDragPlaceholder} from "@angular/cdk/drag-drop";
import {MatOption, MatSelect} from "@angular/material/select";


@NgModule({
  declarations: [
    AppComponent,
    RequestResultsComponent,
    AppointmentsComponent,
    PageNotFoundComponent,
    TreatmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    HttpClientModule,
    CdkDragPlaceholder,
    MatSelect,
    MatOption
  ],
  providers: [
    BaseService,provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
