import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';

import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';

import { HttpClientModule } from '@angular/common/http';

import { EntryService } from './entry.service';

import { ReactiveFormsModule,FormsModule  } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    TableComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
