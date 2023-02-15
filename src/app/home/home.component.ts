import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IUsers } from './model/IUsers';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  users: IUsers[] = [];

  constructor(private userService: UserService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) =>{
      this.users = res;
      this.ref.checkNoChanges
    })
    
  }

}
