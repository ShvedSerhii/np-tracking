import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { RegisterComponent } from './register.component';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let el: HTMLElement;

  const storeStub = { 
    select: () => { }
  };
  const routerStub = { };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [
        { provide: Store, useValue: storeStub },
        { provide: Router, useValue: routerStub }, 
      ],  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call registration method', () => {
    fixture.detectChanges();
    spyOn<any>(component, 'registration');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.registration).toHaveBeenCalledTimes(0);
  });
});
