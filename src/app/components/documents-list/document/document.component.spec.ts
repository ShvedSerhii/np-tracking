import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DocumentComponent } from './document.component';
import { By } from '@angular/platform-browser';

describe('DocumentComponent', () => {
  let component: DocumentComponent;
  let fixture: ComponentFixture<DocumentComponent>;
  let el: HTMLElement;

  const storeStub = { 
    select: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentComponent ],
      providers: [
        { provide: Store, useValue: storeStub },
      ],  
      schemas: [NO_ERRORS_SCHEMA] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentComponent);
    component = fixture.componentInstance;
    component.document = {Number: '', ScheduledDeliveryDate: ''}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should call deleteDocument method', () => {
    fixture.detectChanges();
    spyOn<any>(component, 'deleteDocument');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.deleteDocument).toHaveBeenCalledTimes(1);
  });
});
