import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ AppRoutingModule, routingComponents } from './app-routing.module';
import { BeautyComponent } from './beauty/beauty.component';
import {CartComponent} from 'src/app/cart/cart.component'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BeautyService } from './beauty.service';
import { BooksService } from './books.service';
import { BooksComponent } from './books/books.component';
import { FashionService } from './fashion.service';
import { FashionComponent } from './fashion/fashion.component';
import { FoodService } from './food.service';
import { FoodComponent } from './food/food.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent, 
    BeautyComponent,
    BooksComponent,
    FashionComponent,
    FoodComponent,
    CartComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
   HttpClientModule,
   FormsModule,
   RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
