import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VracComponent } from './vrac.component';

describe('VracComponent', () => {
  let component: VracComponent;
  let fixture: ComponentFixture<VracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
