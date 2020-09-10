import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemComponent } from './item/item.component'
import { HttpClientModule} from '@angular/common/http';
import { ChatpageComponent } from './chatpage/chatpage.component'

@NgModule({
  declarations: [AppComponent, ListComponent, CardComponent, HomepageComponent, ItemComponent, ChatpageComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
