import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTableComponent } from './tech-table.component';

describe('TechTableComponent', () => {
  let component: TechTableComponent;
  let fixture: ComponentFixture<TechTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
