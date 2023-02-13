import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './Categories/components/categories/categories.component';
import { AddCategoryComponent } from './Categories/components/add-category/add-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCategoryComponent } from './Categories/components/edit-category/edit-category.component';
import { PostsComponent } from './Posts/components/posts/posts.component';
import { PostDetailsComponent } from './Posts/components/post-details/post-details.component';
import { AddPostComponent } from './Posts/components/add-post/add-post.component';
import { LoginComponent } from './Auth/components/login/login.component';
import { RegisterComponent } from './Auth/components/register/register.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CategoriesComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    PostsComponent,
    PostDetailsComponent,
    AddPostComponent,
    LoginComponent,
    RegisterComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
