import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { HeaderComponent } from './header.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let el: HTMLElement;

  const storeStub = { 
    select: () => { }
  };
  const authServiceStub = {
    getToken: () => { } 
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        { provide: Store, useValue: storeStub },
        { provide: AuthService, useValue: authServiceStub },
      ],  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call logout method', () => {
    fixture.detectChanges();
    spyOn<any>(component, 'logout');
    el = fixture.debugElement.query(By.css('.logout')).nativeElement;
    el.click();
    expect(component.logout).toHaveBeenCalledTimes(0); 
  });
});
