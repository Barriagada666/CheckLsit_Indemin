import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalModificarPage } from './modal-modificar.page';

describe('ModalModificarPage', () => {
  let component: ModalModificarPage;
  let fixture: ComponentFixture<ModalModificarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
