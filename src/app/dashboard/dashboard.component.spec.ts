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
import { LoginComponent } from './login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material';

describe('DashboardComponent', () => {
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
      declarations: [DashboardComponent],
      providers: [Authentication]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
  })

  it('Display Welcome User', async(() => {
    let fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    fixture.componentInstance.auth.checkAuth('Salman','Salman');
    fixture.componentInstance.userName = fixture.componentInstance.auth.userInfo;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let userName = fixture.debugElement.query(By.css('#userDisp'));
      let userNameEle = userName.nativeElement;      
      expect(userNameEle.textContent).toContain('Salman');
    });
  }));

  it('Display Prime Number', async(() => {
    let fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    fixture.componentInstance.auth.checkAuth('Salman','Salman');
    fixture.componentInstance.userName = fixture.componentInstance.auth.userInfo;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let primeNo = fixture.debugElement.query(By.css('#prime'));
       let primeNoEle = primeNo.nativeElement;    
      expect(primeNoEle.textContent).not.toEqual('');
    });
  }));



})
