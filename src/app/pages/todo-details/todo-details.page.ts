import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Interfaces/interface';
import { ModalController } from '@ionic/angular';
import { ModalModificarPage } from '../modal-modificar/modal-modificar.page';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {
  tasks: Task | undefined;
  // Task = { id: null, title: '', description: '', completed: false, dueDate: null };
  isEditing = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private modalController: ModalController
  ) {}
 
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      
      this.obtenerDetallesTarea(id);
    });
  }
  obtenerDetallesTarea(id: number) {
    console.log(id);
    // Llama al método del servicio para obtener los detalles de la tarea por su id
    this.tasks = this.taskService.getTodoById(id);
    console.log('tasks->',this.tasks);
    // Realiza las acciones necesarias con la tarea obtenida
  }

  async openModal(task?: Task) {
    const modal = await this.modalController.create({
      component: ModalModificarPage,
      componentProps: { task },
    });

    modal.onDidDismiss().then((result) => {
      if (result?.data) {
        if (task?.id) {
          this.taskService.updateTodo(result.data);
        } else {
          this.taskService.addTodo(result.data);
        }
      }
    });

    await modal.present();
  }
 
}
