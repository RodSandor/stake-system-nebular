import { Time } from "@angular/common";

export interface Meeting {
  id: number;
  type: string;
  presidedBy: string;
  date: Date;
  format: string;
  directedBy: string;
  startedAt: Time;
  endedAt: Time;
  registeredBy: string;
  topics: MeetingTopic[];
}

export interface MeetingTopic {
  id: number;
  notes: string;
  decisions: string;
  tasks: MeetingTask[];
}

export interface MeetingTask {
  id: number;
  task: string;
  designatedTo: string;
  dueDate: Date;
}
