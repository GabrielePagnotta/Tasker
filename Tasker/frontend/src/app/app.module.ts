import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './Static-Components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from "@angular/material/list";
import { HttpClientModule } from "@angular/common/http";
import { TasksComponent } from './Pages/tasks/tasks.component';
import { TableComponent } from './Static-Components/table/table.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { TasksArchiveComponent } from './Pages/tasks-archive/tasks-archive.component';
import { HomeComponent } from './Pages/home/home.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { OreComponent } from './Pages/ore/ore.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TasksComponent,
    SignupComponent,
    TasksArchiveComponent,
    HomeComponent,
    OreComponent,

  ],
  imports: [
    TableComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatTableModule,
    MatDialogModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
