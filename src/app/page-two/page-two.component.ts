import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-page-two',
  imports: [
  ],
  templateUrl: './page-two.component.html',
  styleUrl: './page-two.component.css'
})
export class PageTwoComponent {
  @Input() userTest!: User;
  user!: User;
  constructor(private users: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    const userId = this.route.snapshot.params['id'];
    this.user = this.users.getUserById(userId);
  }
}
