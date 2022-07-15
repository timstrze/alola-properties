import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoreComponent} from './order/more/more.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: 'order-more', component: MoreComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
