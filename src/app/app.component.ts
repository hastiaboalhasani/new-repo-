import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  Directive,
} from "@angular/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive"
// import { log } from "console";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>;

  constructor() {}
  onToggle(isHighlighted: boolean){
    console.log(isHighlighted);
  }
  ngAfterViewInit() {}

  onCourseSelected(course: Course) {}
}
