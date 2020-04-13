import { Component, OnInit } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
const htmlToPdfmake = require('html-to-pdfmake');

@Component({
  selector: 'app-pdf-maker',
  templateUrl: './pdf-maker.page.html',
  styleUrls: ['./pdf-maker.page.scss']
})
/** This page uses pdfMake and htmlToPdfmake as core libraries to convert html to PDF file.
 *  At the moment (27/03/2020) we can generate and download a single html as PDF.
 *  Notice that few html styles only works if directly applied on its reference tag (in
 *    this example <p> could only be justified if its text-aligment style was declared as:
 *    <p style="text-alignment:justify;">).
 *  Also notice that html styles must be in its file, not in '.scss' file.
 */
export class PDFMAKERPage implements OnInit {
  pdfObject = null;
  zipObject: ArrayBuffer[] = [];
  createButtonDisable: boolean = false;

  constructor() {}

  ngOnInit() {}

  /** Convert html to docDefinition content using htmlToPdfmake and then create an pdfObject
   *    using pdfMake.createPdf(docDefinition).
   */
  async createPDF() {
    this.createButtonDisable = true;
    const html = await htmlToPdfmake(
      document.getElementById('printable').innerHTML
    );
    console.log('html:', html);
    let docDefinition = {
      header: 'teste',
      content: [html],
      footer: (currentPage) => {
        return {
          margin: 10,
          columns: [
            {
              text: currentPage.toString()
            }
          ]
        };
      }
    };
    this.pdfObject = pdfMake.createPdf(docDefinition);
    this.pdfObject.getBase64(pdf => {
      window.open(
        ('data:application/pdf;base64,' + pdf) as 'teste'
      ).document.title = `ESSE EH UM PDF`;
      this.zipObject.push(pdf);
      console.log(typeof pdf);
    });

    console.log(this.zipObject);

    setTimeout(() => {
      this.createButtonDisable = false;
    }, 1000);
  }

  /** Download pdfObject by pdfMake.prototype.download(~file_name~) */
  downloadPdf() {
    this.pdfObject.download('teste.pdf');
  }

  downloadPdfZip() {
    const blob = new Blob(this.zipObject, { type: 'application/zip' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}
