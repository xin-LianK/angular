/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MangementComponent } from './mangement.component';

describe('MangementComponent', () => {
  let component: MangementComponent;
  let fixture: ComponentFixture<MangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
