import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {CustomerService} from './customer.service';
import {of} from 'rxjs';


describe('AppComponent', () => {
  let customerService: CustomerService;
  let stateResult;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        CustomerService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('test app is running!');
  });

  it('show title when function of customer service', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    customerService = fixture.debugElement.injector.get(CustomerService);

    stateResult = spyOn(customerService, 'getCustomer').and.returnValue(of(false));
    fixture.detectChanges();
    expect(app.state).toBe(false);
  });

  it('check if setCustomer has been passed the correct variable', () => {
    const fixture = TestBed.createComponent(AppComponent);
    customerService = fixture.debugElement.injector.get(CustomerService);
    spyOn(customerService, 'setCustomer');
    customerService.setCustomer('hallo');
    expect(customerService.setCustomer).toHaveBeenCalledWith('hallo');
  });
});
