import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newMemberName: string = '';
  members: string[] = [];
  errorMessage: string = '';

  addMember() {
    if (this.newMemberName.length > 0) {
      this.members.push(this.newMemberName);
      this.newMemberName = '';
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Name cannot be empty';
    }
  }

  onInput(member: string) {
    this.newMemberName = member;
  }
}
