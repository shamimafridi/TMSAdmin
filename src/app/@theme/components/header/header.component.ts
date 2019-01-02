import { NbAuthService, NbAuthToken } from "@nebular/auth";
import { Component, Input, OnInit } from "@angular/core";

import { NbMenuService, NbSidebarService } from "@nebular/theme";
import { UserService } from "../../../@core/data/users.service";
import { AnalyticsService } from "../../../@core/utils/analytics.service";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-header",
  styleUrls: ["./header.component.scss"],
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  @Input()
  position = "normal";

  user: any;

  userMenu = [{ title: "Profile" }, { title: "Log out" }];

  constructor(
    private router: Router,
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private analyticsService: AnalyticsService,
    private authService: NbAuthService
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any) => {
      this.authService.onTokenChange().subscribe((token: NbAuthToken) => {
        if (token.isValid()) {
          let userToken = token.getPayload();
          this.user = userToken; // here we receive a payload from the token and assigne it to our `user` variable
          localStorage.setItem("userInfo", JSON.stringify(this.user));
        }else{
         this.router.navigate(['/auth/login']);
        }
      });
    });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, "settings-sidebar");
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent("startSearch");
  }
}
interface IUserToken {
  username: String;
}
