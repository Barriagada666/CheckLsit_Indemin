import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoDetailsPage } from './todo-details.page';

describe('TodoDetailsPage', () => {
  let component: TodoDetailsPage;
  let fixture: ComponentFixture<TodoDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodoDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
