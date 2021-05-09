import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './components/general/general.component';
import { RulesComponent } from './components/rules/rules.component';
import { VaccinesComponent } from './components/vaccines/vaccines.component';
import { WhattodoComponent } from './components/whattodo/whattodo.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

const routes: Routes = [  
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'algemeen',
    component: GeneralComponent
  },
  {
    path:'regels',
    component: RulesComponent
  },
  {
    path: 'vaccinaties',
    component: VaccinesComponent
  },
  {
    path:'wat-te-doen',
    component: WhattodoComponent
  },
  {
    path: 'testen',
    component: TestComponent
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
