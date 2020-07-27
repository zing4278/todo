import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NewListComponent } from 'src/app/components/new-list/new-list.component';
import { PopupComponent } from './components/popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';

  ngOnInit() {

  }



  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  inprogress = [
    'inprogress 1',
    'inprogress 2',
    'inprogress 3',
    'inprogress 4'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  /* An empty array that is responsible to add a division */
  items = [];

  /* A two-way binding performed which pushes text on division */
  newTask;
  newTaskInpro;
  newTaskDone;

  /* When input is empty, it will not create a new division */
  addToList() {
    if (this.newTask == '') {
      var error = 'Name is mandatory';
      console.log(error)
    }
    else {
      this.todo.push(this.newTask);
      this.newTask = '';
    }
  }

  addInprog() {
    if (this.newTaskInpro == '') {
      var error = 'Name is mandatory';
      console.log(error)
    }
    else {
      this.inprogress.push(this.newTaskInpro);
      this.newTaskInpro = '';
    }
  }

  addDone() {
    if (this.newTaskDone == '') {
      var error = 'Name is mandatory';
      console.log(error)
    }
    else {
      this.done.push(this.newTaskDone);
      this.newTaskDone = '';
    }
  }

  /* This function takes to input the task, that has to be deleted*/
  deleteTask(index) {
    this.todo.splice(index, 1);
  }

  deleteInproTask(index) {
    this.inprogress.splice(index, 1);
  }
  deletedoneTask(index) {
    this.done.splice(index, 1);
  }

  vibrate() {
    alert('Task moved the other list')
  }

  createNewList() {
    alert('Open the popup')
  }

}
