import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "@app/_services/task.service";
import {Task} from '@app/_models/task/task';
import {TaskStatuses} from "@app/_models/task/task-status";
import {interval} from "rxjs";
import {takeWhile} from "rxjs/operators";
import {AuthenticationService} from "@app/_services";
import {SearchCarComponent} from "@app/search/search-car/search-car.component";
import {Car} from "@app/_models/task/car";
import {PersonDetails} from "@app/_models/task";
import {SearchUserComponent} from "@app/search/search-user/search-user.component";

@Component(
  {
    selector: 'add-task',
    templateUrl: 'edit-task.component.html',
    styleUrls: ['edit-task.component.scss']
  }
)
export class EditTaskComponent implements OnInit {
  taskToEdit: Task = null;

  userDataForm: FormGroup;
  carDataForm: FormGroup;
  interviewForm: FormGroup;
  descriptionForm: FormGroup;
  statusForm: FormGroup;

  submitted: boolean;
  error: string;

  taskStatuses = TaskStatuses;

  loading: boolean = true;
  statusSelected: string;

  constructor(
    private modal: NgbActiveModal,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.initForms();
    this.loading = false;
  }

  loadTaskToEdit(task: Task) {
    console.log(task);
    this.loading = true;
    let checking = true;

    interval(100).pipe(takeWhile(() => checking)).subscribe(_ => {
      if (this.carDataForm) {
        this.taskToEdit = task;
        this.fillUsingExistingTask(task);
        checking = false;
        this.loading = false;
      }
    });
  }

  openCarSearch() {
    let ngbModalRef = this.getSearchModal(SearchCarComponent);
    ngbModalRef.result.then(car => {
      this.updateCarDataForm(car);
    });

  }

  openUserSearch() {
    let ngbModalRef = this.getSearchModal(SearchUserComponent);
    ngbModalRef.result.then(user => {
      this.updateUserDataForm(user);
    });
  }

  close() {
    this.modal.close();
  }

  get userForm() {
    return this.userDataForm.controls;
  }

  get carForm() {
    return this.carDataForm.controls;
  }

  isAnyFormInvalid(): boolean {
    return this.userDataForm.invalid || this.carDataForm.invalid || this.interviewForm.invalid || this.descriptionForm.invalid || !this.statusSelected;
  }


  save() {
    this.submitted = true;

    if(this.isAnyFormInvalid()){
      console.log("i znowu...")
      return;
    }
    console.log("poszli dalej");
    let requestBody: Task = {
      id: this.taskToEdit ? this.taskToEdit.id: null,
      status: this.statusSelected,
      mechanic: this.authService.currentUserValue,
      client: {
        id: parseInt(this.userDataForm.get("id").value),
        firstName: this.userDataForm.get("firstName").value,
        lastName: this.userDataForm.get("lastName").value,
        personalId: this.userDataForm.get("personalId").value,
        contact: {
          phoneNumber: this.userDataForm.get("phoneNumber").value
        }
      },
      car: {
        id: parseInt(this.carDataForm.get("id").value),
        registerNumber: this.carDataForm.get("registerNumber").value,
        model: this.carDataForm.get("model").value,
        mark: this.carDataForm.get("mark").value,
      },
      taskInterview: this.interviewForm.get("interviewTaskDescription").value,
      taskDoneDescription: this.descriptionForm.get("taskDoneDescription").value
    };
    console.log(requestBody);
    this.modal.close({
      operation: 'createOrUpdate',
      data: requestBody
    });
  }

  delete() {
    this.modal.close({
      operation: 'delete',
      data: this.taskToEdit.id
    });
  }


  private fillUsingExistingTask(task: Task) {
    this.updateCarDataForm(task.car);
    this.updateUserDataForm(task.client);
    this.statusSelected = task.status;
    this.interviewForm.get("interviewTaskDescription").setValue(task.taskInterview);
    this.descriptionForm.get("taskDoneDescription").setValue(task.taskDoneDescription);
  }

  private updateCarDataForm(car: Car) {
    this.carDataForm.get("registerNumber").setValue(car?.registerNumber);
    this.carDataForm.get("model").setValue(car?.model);
    this.carDataForm.get("mark").setValue(car?.mark);
  }

  private updateUserDataForm(client: PersonDetails) {
    this.userDataForm.get("id").setValue(client?.id);
    this.userDataForm.get("firstName").setValue(client?.firstName);
    this.userDataForm.get("lastName").setValue(client?.lastName);
    this.userDataForm.get("personalId").setValue(client?.personalId);
    this.userDataForm.get("phoneNumber").setValue(client?.contact?.phoneNumber);
  }

  private initForms() {
    this.userDataForm = this.formBuilder.group({
        id: '',
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        personalId: ['', Validators.required],
        phoneNumber: ['', Validators.required]
      }
    );

    this.carDataForm = this.formBuilder.group({
        id: '',
        registerNumber: ['', Validators.required],
        model: ['', Validators.required],
        mark: ['', Validators.required],
        vinNumber: '',
      }
    );

    this.interviewForm = this.formBuilder.group({
        interviewTaskDescription: ''
      }
    );

    this.descriptionForm = this.formBuilder.group({
        taskDoneDescription: ''
      }
    );

    this.statusForm = this.formBuilder.group({
      status: [null, Validators.required]
    })
  }

  private getSearchModal(component: any) {
    let ngbModalRef = this.modalService.open(component, {
      windowClass: 'add-task-window',
      backdrop: 'static',
      keyboard: false,
      centered: true,
      size: "lg"
    });
    return ngbModalRef;
  }


  setStatus(value: any) {
    this.statusSelected = value.status;
  }

}
