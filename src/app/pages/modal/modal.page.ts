import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Interfaces/interface';
import { IonDatetime, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  // @Output() actualizar = new EventEmitter<any>();
  title: string = '';
  description: string = '';
  completed: boolean = false;
  dueDate!: Date;
  
  constructor(private task: TaskService, private modal: ModalController) {
  }

  ngOnInit() {
  }

  closeModal() {
    this.modal.dismiss();
  }


  submitForm() {
      
      const task: Task = {
        id: 0,
        title: this.title,
        description: this.description,
        completed: this.completed,
        dueDate: this.dueDate
      }
      this.task.addTodo(task);
      
      this.modal.dismiss();
      
    }
  
}

