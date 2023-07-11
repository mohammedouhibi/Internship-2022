import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitComponent } from './voit.component';

describe('VoitComponent', () => {
  let component: VoitComponent;
  let fixture: ComponentFixture<VoitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
