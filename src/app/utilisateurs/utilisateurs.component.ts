import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-utilisateurs',
  imports: [],
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class utilisateursComponent {
  constructor(private userService: UserService, private router: Router) { }
  users!: User[];

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  viewTask(pUser: User){
    this.router.navigateByUrl(`utilisateurs/${pUser.id}`);
  }
}
