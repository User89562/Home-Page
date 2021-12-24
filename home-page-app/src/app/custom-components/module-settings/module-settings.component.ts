import { SettingsComponent } from "./../../settings/settings.component";
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NavigationStart, Router } from "@angular/router";
import { Subscription, filter } from "rxjs";

@Component({
  selector: "app-module-settings",
  templateUrl: "./module-settings.component.html",
  styleUrls: ["./module-settings.component.scss"],
})
export class ModuleSettingsComponent implements OnInit, AfterViewInit {
  routerSubscription!: Subscription;
  saved = false;
  cancel = false;
  //save settings method from settings component using viewchild
  @ViewChild(SettingsComponent) settingsComponent!: SettingsComponent;

  ngOnInit() {
    this.routerSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        filter(() => !!this.dialogRef)
      )
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  constructor(
    private cdr: ChangeDetectorRef,
    public dialogRef: MatDialogRef<ModuleSettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private router: Router
  ) {}

  public ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  onClick(): void {
    this.dialogRef.close();
  }

  saveSettings(): void {
    this.settingsComponent.saveUserSettings();
    //this.dialogRef.close();
  }
}
