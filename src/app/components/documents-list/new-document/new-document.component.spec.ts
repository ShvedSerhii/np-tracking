import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDocumentComponent } from './new-document.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';


describe('NewDocumentComponent', () => {
  let component: NewDocumentComponent;
  let fixture: ComponentFixture<NewDocumentComponent>;
  let el: HTMLElement;

  const dialogRefStub = { };
  const matDialogDataStub = { };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDocumentComponent ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefStub },
        { provide: MAT_DIALOG_DATA, useValue: matDialogDataStub }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call cancel method', () => {
    fixture.detectChanges();
    spyOn<any>(component, 'cancel');
    el = fixture.debugElement.query(By.css('.cancel')).nativeElement;
    el.click();
    expect(component.cancel).toHaveBeenCalledTimes(1);
  });
});
