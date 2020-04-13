import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PDFMAKERPageRoutingModule } from './pdf-maker-routing.module';

import { PDFMAKERPage } from './pdf-maker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PDFMAKERPageRoutingModule
  ],
  declarations: [PDFMAKERPage]
})
export class PDFMAKERPageModule {}
