import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentosComponent } from './documentos/documentos.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'documentos', component: DocumentosComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
