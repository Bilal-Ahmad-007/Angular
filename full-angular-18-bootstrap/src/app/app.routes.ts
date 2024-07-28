import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ControlFlowComponent } from './components/directive/control-flow/control-flow.component';
import { NgStyleClassComponent } from './components/directive/ng-style-class/ng-style-class.component';
import { TemplateFormComponent } from './components/form/template-form/template-form.component';
import { ReactiveFormComponent } from './components/form/reactive-form/reactive-form.component';
export const routes: Routes = [
{
    path:'',
    redirectTo:"home",
   
    pathMatch:'full'
},

{
    path:'home',
    component:HomeComponent
},
{
    path:'data-binding',
    component:DataBindingComponent
},
{
    path:'pipes',
    component:PipesComponent
  
},
{
    path:'control-flow',
    component:ControlFlowComponent
  
},
{
    path:'ng-style-class',
    component:NgStyleClassComponent
  
},
{
    path:'template-form',
    component:TemplateFormComponent
  
},
{
    path:'reactive-form',
    component:ReactiveFormComponent
  
},
{
    path:'**',
    redirectTo:"home",
   
   
},

];
