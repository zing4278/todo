import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @ViewChild('f', {static: false}) TaskForm: NgForm;
  @ViewChild('L', {static: false}) ListForm: NgForm;
  constructor() { }

  ngOnInit() {

  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  //
  isShown: boolean = false; // hidden by default
  toggleShow() {
    this.isShown = !this.isShown;
  }
  /* An empty array that is responsible to add a division */
  list = [];

  task = [];
  newList = [];
  newTask = { id: 0, heading: '', task: [] };

 /* A two-way binding performed which pushes text on division */;

  nTask;
  newListName;

  // this one using for new list with clone structure
  addAnotherList() {

    if (this.newListName == '') {
      var error = 'Name is mandatory';
      console.log(error)
    }
    else {
      this.newList.push({ id: this.newList.length+1, heading: this.newListName, task: [] });
      console.log(this.newList);
      this.newListName = '';
      this.ListForm = this.ListForm.value.nList;
      this.isShown = !this.isShown;
    }
  }
  // this one using for create new task in created new list working fine
  addTask(list, nTask) {
    if (nTask == '') {
      var error = 'Name is mandatory';
      console.log(error)
    }
    else {
      list.task.push(nTask);
      nTask = '';

      this.TaskForm.reset();
    }
  }

  deleteInproTask(list, task ) {
    // console.log(list.task);
    let i = list.task.findIndex( x => x == task)
    list.task.splice(i ,1)
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer == event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }


}
