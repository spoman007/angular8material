import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

import { LinechartComponent } from './linechart.component';

describe('LinechartComponent', () => {
  let component: LinechartComponent;
  let fixture: ComponentFixture<LinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        BrowserAnimationsModule, 
        SidebarModule, 
        ButtonModule 
      ],
      declarations: [ LinechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});