import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemComponent } from './item/item.component';
import { ChatpageComponent } from './chatpage/chatpage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'todos:/todoId', component: ItemComponent},
  {path: 'todos:/', component: ChatpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
