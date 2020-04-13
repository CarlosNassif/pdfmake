import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PDFMAKERPage } from './pdf-maker.page';

describe('PDFMAKERPage', () => {
  let component: PDFMAKERPage;
  let fixture: ComponentFixture<PDFMAKERPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDFMAKERPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PDFMAKERPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
