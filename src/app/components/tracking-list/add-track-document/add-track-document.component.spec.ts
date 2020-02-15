import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrackDocumentComponent } from './add-track-document.component';

describe('AddTrackDocumentComponent', () => {
  let component: AddTrackDocumentComponent;
  let fixture: ComponentFixture<AddTrackDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrackDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrackDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
