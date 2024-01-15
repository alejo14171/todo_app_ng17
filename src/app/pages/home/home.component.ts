import { Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear servicios',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Hacer Deploy',
      completed: false
    }
  ]);

  chengeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
    input.value = "";
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]); //crea un nuevo estado
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }

  updateTask(index: number) {
    // this.tasks.update(
    //   (tasks) => {
        
    //   }
    // )
  }

}
