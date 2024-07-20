import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListComponent } from './modules/cadastro-escola/pages/list/list.component';
import { ListClassComponent } from './modules/cadastro-escola/pages/list-class/list-class.component';

export const routes: Routes = [
{
    path:'',
    component : ListComponent
},
{
  path:'escolas',
  component : ListComponent
},
{
 path:'class/:escola',
 component: ListClassComponent
}

];
