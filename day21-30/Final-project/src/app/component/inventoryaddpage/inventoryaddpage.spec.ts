import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inventoryaddpage } from './inventoryaddpage';

describe('Inventoryaddpage', () => {
  let component: Inventoryaddpage;
  let fixture: ComponentFixture<Inventoryaddpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inventoryaddpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inventoryaddpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
