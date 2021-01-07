import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "@app/_services/task.service";
import {Task} from '@app/_models/task/task';
import {User} from "@app/_models";
import {TaskStatuses} from "@app/_models/task/task-status";

@Component(
  {
    selector: 'add-task',
    templateUrl: 'add-task.component.html',
    styleUrls: ['add-task.component.scss']
  }
)
export class AddTaskComponent implements OnInit {
  userDataForm: FormGroup;
  carDataForm: FormGroup;
  interviewForm: FormGroup;
  descriptionForm: FormGroup;
  statusForm: FormGroup;

  submitted: boolean;
  error: string;

  taskStatuses = TaskStatuses;

  constructor(
    private modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.initForms();
  }

  close() {
    this.modal.close();
  }

  get form() {
    return this.userDataForm.controls;
  }

  private initForms() {
    this.userDataForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        personalId: ['', Validators.required],
        phoneNumber: ['', Validators.required]
      }
    );

    this.carDataForm = this.formBuilder.group({
        registerNumber: ['', Validators.required],
        model: ['', Validators.required],
        mark: ['', Validators.required],
        vinNumber: ['', Validators.required]
      }
    );

    this.interviewForm = this.formBuilder.group({
        interviewTaskDescription: ['', Validators.required]
      }
    );

    this.descriptionForm = this.formBuilder.group({
        doneTaskDescription: ['', Validators.required]
      }
    );

    this.statusForm = this.formBuilder.group({
      status: ['', Validators.required]
    })
  }

  addTask() {
    let user: User = JSON.parse(localStorage.getItem('currentUser'));
    console.log(user);
    let requestBody:Task = {
      status: this.statusForm.get("status").value,
      mechanic: user.username,
      registerNumber: this.carDataForm.get("registerNumber").value,
      model: this.carDataForm.get("model").value,
      mark: this.carDataForm.get("mark").value
    }
    this.taskService.addNew(requestBody);
    this.modal.close();
  }
}
