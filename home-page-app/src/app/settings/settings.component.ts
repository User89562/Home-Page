import { EnumUtil } from './../utils/enum-util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SettingsUtil } from '../utils/settings-util';
import { SettingsForm } from '../entities/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm = this.fb.group({
    background: this.fb.group({
      visibility: [''],
      imageSet: [''],
      mediaType: ['']
    }),
    linkGroup: this.fb.group({
      visibility: [''],
      imageSet: [''],
      mediaType: ['']
    }),
  });
  settingsUtil = new SettingsUtil();
  enumUtil = new EnumUtil();

  
  constructor(private fb: FormBuilder,) {}

  ngOnInit() {
    this.settingsUtil.getSettings();

    this.settingsForm.get('background')?.patchValue({
      visibility: this.settingsUtil.getBgVisibility(),
      imageSet: this.settingsUtil.getBgImageSet(),
      mediaType: this.settingsUtil.getBgMediaType(),
    });
  

    this.settingsForm.get('linkGroup')?.patchValue({
      visibility: this.settingsUtil.getLgVisibility(),
      imageSet: this.settingsUtil.getLgImageSet(),
      mediaType: this.settingsUtil.getLgMediaType()
    });
  }

  get bgImageSet(): FormGroup {
    return this.settingsForm.get('background')?.get('imageSet') as FormGroup;
  }

  get lgImageSet(): FormGroup {
    return this.settingsForm.get('linkGroup')?.get('imageSet') as FormGroup;
  }

  saveSettings(): boolean {
   const formValues: SettingsForm = this.settingsForm.value;
   this.settingsUtil.setBackgroundStorage(formValues.background);
   this.settingsUtil.setLinkgroupStorage(formValues.linkGroup);
   return true;
  }

}
