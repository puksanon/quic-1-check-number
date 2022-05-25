import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputContentComponent } from './components/input-content/input-content.component';
import { OptionContentComponent } from './components/option-content/option-content.component';
import { AnswerContentComponent } from './components/answer-content/answer-content.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputContentComponent,
    OptionContentComponent,
    AnswerContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
