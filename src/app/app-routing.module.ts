import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './modules/general/home/home.component';
import { Routes, RouterModule } from '@angular/router'
import { ContactComponent } from './modules/general/contact/contact.component';
import { SigninComponent } from './modules/general/signin/signin.component';
import { AboutComponent } from './modules/general/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SigninComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
