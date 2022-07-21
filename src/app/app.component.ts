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
  numOfTeams: number | '' = '';
  teams: string[][] = [];

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

  onNumOfTeamsInput(numOfTeams: string) {
    this.numOfTeams = Number(numOfTeams);
  }

  generateTeams() {
    this.teams = [];

    const copyOfMembers = [...this.members];

    if (!this.numOfTeams || this.numOfTeams <= 0) {
      this.errorMessage = 'Number of teams cannot be zero';
      return;
    } else if (this.members.length < this.numOfTeams) {
      this.errorMessage = 'Not enough members to create teams';
      return;
    } else {
      this.errorMessage = '';
    }

    while (copyOfMembers.length) {
      for (let i = 0; i < this.numOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * copyOfMembers.length);
        const member = copyOfMembers.splice(randomIndex, 1)[0];

        if (!member) {
          break;
        }

        if (!this.teams[i]) {
          this.teams[i] = [member];
        } else {
          this.teams[i].push(member);
        }
      }
    }
    this.numOfTeams = '';
    console.log('teams->' + this.teams);
  }

  clear() {
    this.members = [];
    this.teams = [];
    this.numOfTeams = '';
    this.errorMessage = '';
  }
}
