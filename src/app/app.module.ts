import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import { GreatWallOfChinaComponent } from './great-wall-of-china/great-wall-of-china.component';
import { ChristStatueComponent } from './christ-statue/christ-statue.component';
import { MachuPicchuComponent } from './machu-picchu/machu-picchu.component';
import { TheRomanComponent } from './the-roman/the-roman.component';
import { TajmahalComponent } from './tajmahal/tajmahal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    GreatWallOfChinaComponent,
    ChristStatueComponent,
    MachuPicchuComponent,
    TheRomanComponent,
    TajmahalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
