import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { MeetingTopic } from './../../../../core/models/meeting';

@Component({
  selector: 'app-agenda-topic-edit',
  templateUrl: './agenda-topic-edit.component.html',
  styleUrls: ['./agenda-topic-edit.component.scss']
})
export class AgendaTopicEditComponent implements OnInit {
  topicForm: FormGroup;
  topics: MeetingTopic;

  get tasksCtrls() {
    return (this.topicForm.get('tasks') as FormArray).controls;
  }

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  onAddTask() {
    (<FormArray>this.topicForm.get('tasks')).push(
      new FormGroup({
        task: new FormControl(null, Validators.required),
        designatedTo: new FormControl(null, Validators.required),
        dueDate: new FormControl(null, [Validators.required])
      })
    )
  }

  onDeleteTask(index: number) {
    (<FormArray>this.topicForm.get('tasks')).removeAt(index);
  }

  private initForm () {
    let initNotes = '';
    let initDecisions = '';
    let initTasks = new FormArray([]);

    if (this.topics != null) {
      initNotes = this.topics.notes;
      initDecisions = this.topics.decisions;
      if (this.topics['tasks']) {
        for (let task of this.topics.tasks) {
          initTasks.push(
            new FormGroup({
              task: new FormControl(task.task, Validators.required),
              designatedTo: new FormControl(task.designatedTo, Validators.required),
              dueDate: new FormControl(task.dueDate, [Validators.required])
            })
          )
        }
      }
    }

    this.topicForm = new FormGroup({
      notes: new FormControl(initNotes, Validators.required),
      decisions: new FormControl(initDecisions),
      tasks: initTasks
    })
  }

}
