import { TaskService } from 'src/app/services/task.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from 'src/app/Interfaces/interface';

@Component({
  selector: 'app-modal-modificar',
  templateUrl: './modal-modificar.page.html',
  styleUrls: ['./modal-modificar.page.scss'],
})
export class ModalModificarPage implements OnInit {
  @Input() task!: Task;

  constructor(private modalController: ModalController,
    private taskService: TaskService) {}
 
  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

  saveTask() {
    if (this.task.id) {
      this.taskService.updateTodo(this.task);
    } else {
      this.taskService.addTodo(this.task);
    }
    this.modalController.dismiss();
  
  }

}
