import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_fake/services/user-service';
import { AuthService } from 'src/app/modules/auth';

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

    constructor(private user: AuthService) { }

    ngOnInit(): void {
        console.log(this.user.currentUserValue)
    }

}
