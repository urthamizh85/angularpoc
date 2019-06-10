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
    fixture.componentInstance.auth.setAuth("Salman","Salman")
  })

  it('Login invalid credential', async(() => {
    let fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let userName = fixture.debugElement.query(By.css('input[name="userName"]'));
      let password = fixture.debugElement.query(By.css('input[name="password"]'));
      let userNameEle = userName.nativeElement;
      let passwordEle = password.nativeElement;
      userNameEle.value = 'test';
      userNameEle.dispatchEvent(new Event('input'));
      passwordEle.value = 'test';
      passwordEle.dispatchEvent(new Event('input'));
      fixture.componentInstance.onsubmit()
      expect(fixture.componentInstance.incorrect).toBe(true)
    });
  }));

  it('Login locked with invalid credential', async(() => {
    let fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let userName = fixture.debugElement.query(By.css('input[name="userName"]'));
      let password = fixture.debugElement.query(By.css('input[name="password"]'));
      let userNameEle = userName.nativeElement;
      let passwordEle = password.nativeElement;
      userNameEle.value = 'test';
      userNameEle.dispatchEvent(new Event('input'));
      passwordEle.value = 'test';
      passwordEle.dispatchEvent(new Event('input'));
      fixture.componentInstance.onsubmit();
      fixture.componentInstance.onsubmit();
      fixture.componentInstance.onsubmit();
      expect(fixture.componentInstance.loginCount).toBe(3)
    });
  }));

   it('Login Succcess', async(() => {
    let fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    spyOn(fixture.componentInstance.route,"navigate")
    fixture.whenStable().then(() => {
      let userName = fixture.debugElement.query(By.css('input[name="userName"]'));
      let password = fixture.debugElement.query(By.css('input[name="password"]'));
      let userNameEle = userName.nativeElement;
      let passwordEle = password.nativeElement;
      userNameEle.value = 'Salman';
      userNameEle.dispatchEvent(new Event('input'));
      passwordEle.value = 'Salman';
      passwordEle.dispatchEvent(new Event('input'));
      fixture.componentInstance.onsubmit();
      expect(fixture.componentInstance.incorrect).toBe(false)
    });
  }));


})
