import { EnumUtil } from "./../utils/enum-util";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SettingsUtil } from "../utils/settings-util";
import { SettingsForm } from "../entities/settings";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
  oSettings!: SettingsForm;
  settingsForm = this.fb.group({
    background: this.fb.group({
      visibility: [""],
      jsonSet: [""],
      mediaType: [""],
    }),
    linkGroup: this.fb.group({
      visibility: [""],
      jsonSet: [""],
      mediaType: [""],
    }),
  });
  settingsUtil = new SettingsUtil();
  enumUtil = new EnumUtil();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.settingsUtil.getSettings();

    this.settingsForm.get("background")?.patchValue({
      visibility: this.settingsUtil.getBgVisibility(),
      jsonSet: this.settingsUtil.getBgJsonSet(),
      mediaType: this.settingsUtil.getBgMediaType(),
    });

    this.settingsForm.get("linkGroup")?.patchValue({
      visibility: this.settingsUtil.getLgVisibility(),
      jsonSet: this.settingsUtil.getLgJsonSet(),
      mediaType: this.settingsUtil.getLgMediaType(),
    });
    this.oSettings = this.settingsForm.value;
  }

  get bgJsonSet(): FormGroup {
    return this.settingsForm.get("background")?.get("jsonSet") as FormGroup;
  }

  get lgJsonSet(): FormGroup {
    return this.settingsForm.get("linkGroup")?.get("jsonSet") as FormGroup;
  }

  saveUserSettings(): boolean {
    const formValues: SettingsForm = this.settingsForm.value;

    if (
      formValues.background.mediaType != this.oSettings.background.mediaType ||
      formValues.background.jsonSet != this.oSettings.background.jsonSet
    ) {
      this.settingsUtil.removeTabBackgroundStorage();
    }

    if (
      formValues.linkGroup.mediaType != this.oSettings.linkGroup.mediaType ||
      formValues.linkGroup.jsonSet != this.oSettings.linkGroup.jsonSet
    ) {
      this.settingsUtil.removeLinkgroupStorage();
    }

    this.settingsUtil.setTabBackgroundSettings(formValues.background);
    this.settingsUtil.setLinkgroupSettings(formValues.linkGroup);
    return true;
  }
}
