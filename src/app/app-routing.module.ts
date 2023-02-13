import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/components/login/login.component';
import { RegisterComponent } from './Auth/components/register/register.component';
import { AddCategoryComponent } from './Categories/components/add-category/add-category.component';
import { CategoriesComponent } from './Categories/components/categories/categories.component';
import { EditCategoryComponent } from './Categories/components/edit-category/edit-category.component';
import { AuthGuard } from './Guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './Posts/components/add-post/add-post.component';
import { PostsComponent } from './Posts/components/posts/posts.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'category/add',
    component: AddCategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'category/:id/edit',
    component: EditCategoryComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'posts',
    canActivate: [AuthGuard],
    component: PostsComponent,
    children: [
      {
        path: 'add',
        component: AddPostComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
