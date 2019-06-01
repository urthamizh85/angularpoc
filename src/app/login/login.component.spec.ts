import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Authentication } from '../services/authentication';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component'
import {
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material';

describe('LoginComponent', () => {
  let fixture: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        RouterTestingModule
      ],
      declarations: [LoginComponent],
      providers: [Authentication]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
  })

  it('Login onsubmit', async(() => {
    let fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    spyOn(fixture.componentInstance, 'onsubmit');
    fixture.whenStable().then(() => {
      let username = fixture.debugElement.query(By.css('input[name="user"]'));
      let pwd = fixture.debugElement.query(By.css('input[name="pwd"]'));
      let usrel = username.nativeElement;
      let pwdel = pwd.nativeElement;
      usrel.value = 'Salman';
      usrel.dispatchEvent(new Event('input'));
      pwdel.value = 'Salman';
      pwdel.dispatchEvent(new Event('input'));
      fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
      expect(fixture.componentInstance.onsubmit).toHaveBeenCalled();
    });
  }));


})
