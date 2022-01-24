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
  topics: MeetingTopics[];
}

export interface MeetingTopics {
  id: number;
  notes: string;
  decisions: string;
  designation: MeetingDesignation[];
}

export interface MeetingDesignation {
  id: number;
  task: string;
  designationTo: string;
  dueDate: Date;
}
