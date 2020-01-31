import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StateComponent } from './components/state/state.component';
import { StateNewComponent } from './components/state/state-new/state-new.component';
import { StateListComponent } from './components/state/state-list/state-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StateComponent,
    StateNewComponent,
    StateListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
