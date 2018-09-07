import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule}  from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { DataentryComponent } from './components/dataentry/dataentry.component';
import { SaleRentDetailsComponent } from './components/sale-rent-details/sale-rent-details.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { AgentDetailsComponent } from './components/agent-details/agent-details.component';
import { PublicationLoginComponent } from './components/publication-login/publication-login.component';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { FooterComponent } from './components/footer/footer.component';
import { ViewPropertiesComponent } from './components/view-properties/view-properties.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    DataentryComponent,
    SaleRentDetailsComponent,
    PropertyDetailsComponent,
    AgentDetailsComponent,
    PublicationLoginComponent,
    FooterComponent,
    ViewPropertiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    BsDatepickerModule.forRoot()
    
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
