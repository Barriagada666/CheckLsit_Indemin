import { Component, OnInit, inject } from '@angular/core';
import { ModalController, RefresherCustomEvent } from '@ionic/angular';


import { DataService, Message } from '../../services/data.service';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Interfaces/interface';
import { ModalPage } from '../modal/modal.page';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  tasks: Task[];
  dp = 0;

  constructor(private taskService: TaskService,
    private modalController: ModalController, private router: Router) {
      this.tasks = [];

      this.dp = (window.devicePixelRatio);
    }

  ngOnInit() {
    this.obtenerTodos();
  }

  async presentModal() {
    const modal = await this.modalController.create({
    component: ModalPage,
    cssClass: 'ion-modal',
    componentProps: { value: 123 }
    });
  
    await modal.present();
   this.obtenerTodos();
  }

  updateTodoStatus(task: Task){
    this.taskService.updateTodoMark(task);
  }
  obtenerTodos() {
    this.tasks = this.taskService.getTodos();
   
  }

  verDetalle(task: Task){
    this.router.navigate(['/todo-details', task.id]);
  }

  delete(task: Task){
    this.taskService.deleteTodo(task.id);
  }
}
