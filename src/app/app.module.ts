import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Grid1Component } from './components/grid-1/grid-1.component';
import { Grid2Component } from './components/grid-2/grid-2.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './components/home/home.component';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { Deber4Component } from './components/deber-4/deber-4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { Deber5Component } from './components/deber-5/deber-5.component';
import { ExamenComponent } from './components/examen/examen.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { MenubarModule } from 'primeng/menubar';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    Grid1Component,
    Grid2Component,
    CardsComponent,
    HomeComponent,
    Deber4Component,
    Deber5Component,
    ExamenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule, 
    ButtonModule,
    ToolbarModule, 
    AvatarModule,
    FormsModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    CarouselModule,
    TagModule,
    TableModule,
    ToastModule,
    DialogModule,
    RatingModule,
    MenubarModule,
    DropdownModule,
    PanelModule,
    BrowserAnimationsModule 
    
      
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
