import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryListComponent } from './groceries/grocery-list.component';
import { GroceryListService } from './groceries/grocery-list.service';
// import { InputFormComponent } from './inputForm/input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    // InputFormComponent,
    GroceryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GroceryListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
