import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UperHeaderComponent } from './uper-header.component';

describe('UperHeaderComponent', () => {
  let component: UperHeaderComponent;
  let fixture: ComponentFixture<UperHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UperHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UperHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
