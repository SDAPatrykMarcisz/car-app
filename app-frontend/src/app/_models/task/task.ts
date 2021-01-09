import {PersonDetails, User} from "@app/_models/task/index";
import {Car} from "@app/_models/task/car";

export class Task {
  id: number;
  car: Car;
  status: string;
  mechanic: User;
  client: PersonDetails;
  taskInterview: string;
  taskDoneDescription: string;
}
