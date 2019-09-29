import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {CustomerService} from './customer.service';
import {of} from 'rxjs';


describe('AppComponent', () => {
  let customerService: CustomerService;
  let customerServiceTestBed: CustomerService;
  let stateResult;
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    customerServiceTestBed = TestBed.get(CustomerService);
    customerService = fixture.debugElement.injector.get(CustomerService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test'`, () => {
    expect(app.title).toEqual('test');
  });

  it('should render title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('test app is running!');
  });

  it('show title when function of customer service', () => {
    stateResult = spyOn(customerService, 'getCustomer').and.returnValue(of(false));
    app.ngOnInit();
    fixture.detectChanges();
    expect(app.state).toBe(false);
  });

  it('show title when function of customer service. Gets service by Testbed', () => {
    stateResult = spyOn(customerServiceTestBed, 'getCustomer').and.returnValue(of(false));
    app.ngOnInit();
    fixture.detectChanges();
    expect(app.state).toBe(false);
  });

  it('check if setCustomer has been passed the correct variable', () => {
    spyOn(customerService, 'setCustomer');
    customerService.setCustomer('hallo');
    expect(customerService.setCustomer).toHaveBeenCalledWith('hallo');
  });

  it('check if setCustomer has been passed the correct variable. Gets service by Testbed', () => {
    spyOn(customerServiceTestBed, 'setCustomer');
    customerServiceTestBed.setCustomer('hallo');
    expect(customerServiceTestBed.setCustomer).toHaveBeenCalledWith('hallo');
  });
});
