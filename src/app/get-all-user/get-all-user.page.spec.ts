import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetAllUserPage } from './get-all-user.page';

describe('GetAllUserPage', () => {
  let component: GetAllUserPage;
  let fixture: ComponentFixture<GetAllUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetAllUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
