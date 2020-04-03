import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DocumentsListComponent } from './documents-list.component';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { DocumentStatus } from 'src/app/models/document.model';
import { By } from '@angular/platform-browser';

describe('DocumentsListComponent', () => {
  let component: DocumentsListComponent;
  let fixture: ComponentFixture<DocumentsListComponent>;
  let el: HTMLElement;

  const storeStub = {
    select: () => { },
    dispatch: () => { }
  };
  const matDialogStub = {
    open: () => {}
  };

  @Pipe({ name: 'filter' })
  class FilterMockPipe implements PipeTransform {
    transform(value: number): number {
      // Do stuff here, if you want
      return value;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsListComponent, FilterMockPipe ],
      providers: [
        { provide: MatDialog, useValue: matDialogStub },
        { provide: Store, useValue: storeStub },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsListComponent);
    component = fixture.componentInstance;
    component.documents$ = new Observable<DocumentStatus[]>(subscriber => {subscriber.next([]); });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call openDialog method', () => {
    fixture.detectChanges();
    spyOn<any>(component, 'openDialog');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.openDialog).toHaveBeenCalledTimes(1);
  });

});
