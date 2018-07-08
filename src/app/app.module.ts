import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleComponent } from './book/article.component';
import { SiteComponent } from './site-reach/site-reach.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { LoginComponent } from './login/login.component';
import {L} from '@angular/core/src/render3';
const appRoutes: Routes = [
  {
    path: 'books',
    component: ArticleComponent,
    data: { title: 'Article List' }
  },
  {
    path: 'sites',
    component: SiteComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
  { path: '',
    redirectTo: '/sites',///books == for "original book normal"
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    SiteComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
