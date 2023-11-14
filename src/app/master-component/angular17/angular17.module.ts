import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular17Component } from './angular17.component';
import { RouterModule } from '@angular/router';
import { ForExampleComponent } from './for-example/for-example.component';

@NgModule({
  declarations: [Angular17Component, ForExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Angular17Component,
      },
    ]),
  ],
})
export class Angular17Module {}
