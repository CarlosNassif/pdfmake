import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PDFMAKERPage } from './pdf-maker.page';

const routes: Routes = [
  {
    path: '',
    component: PDFMAKERPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PDFMAKERPageRoutingModule {}
