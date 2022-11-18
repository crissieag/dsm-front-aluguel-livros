import { Component, OnInit } from "@angular/core";
import {
	faUsers,
	faCalendar,
	faBookOpenReader,
	faBook,
	faBookmark,
  faLandmark
} from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
	faUsers = faUsers;
	faCalendar = faCalendar;
	faBookOpenReader = faBookOpenReader;
	faBook = faBook;
	faBookmark = faBookmark;
  faLandmark = faLandmark;
	constructor() {}

	ngOnInit(): void {}
}
