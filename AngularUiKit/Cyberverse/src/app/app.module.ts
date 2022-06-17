import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './pages/store/product-page/product-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { SystemRequirementSystemComponent } from './pages/system/system-requirement-system/system-requirement-system.component';
import { EnterpriseSystemComponent } from './pages/system/enterprise-system/enterprise-system.component';
import { BuyProductPageComponent } from './pages/store/buy-product-page/buy-product-page.component';
import { LibraryClientPageComponent } from './pages/store/library-client-page/library-client-page.component';
import { CategorySystemComponent } from './pages/system/category-system/category-system.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    CategorySystemComponent,
    EnterpriseSystemComponent,
    SystemRequirementSystemComponent,
    BuyProductPageComponent,
    LibraryClientPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
