import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { MDBBootstrapModule,NavbarModule, WavesModule,CollapseModule } from 'angular-bootstrap-md';

import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { HomeComponent } from './home/home.component';

const AppRoutes : Routes = [
  {path:'home', component:HomeComponent},
  {path:'profile' , component: ProfileComponent },
  {path: 'portfolio', component: PortfolioComponent },
  {path: 'contact-us', component: ContactUsComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: '**', redirectTo:'/home', pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    ProfileComponent,
    PortfolioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
