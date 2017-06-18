import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { ScreenComponent } from './screen.component';
import { OrchestratorService } from '../services/orchestrator.service';


describe('As a User \
I want ScreenComponent \
So that I can see the calculations I make. ', () => {
    let comp: ScreenComponent;
    let fixture: ComponentFixture<ScreenComponent>;
    let uprScrnDe: DebugElement;
    let uprScrn: HTMLElement;
    let lwrScrnDe: DebugElement;
    let lwrScrn: HTMLElement;
    let _orchestratorService: OrchestratorService;
    let _componentOrchestratorService: orchestratorServiceStub;
    
    
    class orchestratorServiceStub{
        
        calculate = jasmine.createSpy('calculate').and.callFake(
            function(input: string){
                return 'calculate was called';
            });

        subscribeToPressedButtonValues(_thisObj: object, callback: (input: string) => void){
            this._currentvalue.subscribe(function(_next: string){
                callback.call(_thisObj,_next);
            }
                
            );
        }
        
        _currentvalue = new Subject<string> ();
    }

    beforeEach(()=> {
        //initial set-up for TestBed and various elements

        TestBed.configureTestingModule({
            declarations: [ScreenComponent],
            providers: [
                { provide: OrchestratorService , useValue: {}}
            ]
        })
        // over the components provider, hence empty value above
        .overrideComponent(ScreenComponent,{
            set: {
                providers: [
                    {provide: OrchestratorService, useClass: orchestratorServiceStub}
                ]
            }
        });

        fixture = TestBed.createComponent(ScreenComponent);
        
        comp = fixture.componentInstance;

        // geting the component version of the service 
        // and the root module's for comparison later
        _componentOrchestratorService = fixture.debugElement.injector.get(OrchestratorService) as any;
        _orchestratorService = TestBed.get(OrchestratorService);



        // query for the upperScreen by CSS element selector
        uprScrnDe = fixture.debugElement.query(By.css('.calculatorScreen__upper'));
        uprScrn = uprScrnDe.nativeElement;

        lwrScrnDe = fixture.debugElement.query(By.css('.calculatorScreen__lower'));
        lwrScrn = lwrScrnDe.nativeElement;


    });

    describe('Given the screen has just been instantiated and is blank', () => {
        // any reqd initial set up. use beforeEach

        it('when no number or operator has been pressed \
        it should have 0 in upperscreen and an empty string in lowerscreen. ', () => {
                    fixture.detectChanges();
                    expect(lwrScrn.textContent).toBe('');
                    expect(uprScrn.textContent).toBe('0');
                    
                    
            });

        it('when 8 is pressed on the calculator \
        it should have 8 in upperscreen and 8 in lowerscreen. ', () => {
            
            _componentOrchestratorService._currentvalue.next('8');
            fixture.detectChanges();
            expect(lwrScrn.textContent).toBe('8');
            expect(uprScrn.textContent).toBe('8');
            
            
        });
        it('when 8, 6 and 2 are pressed on the calculator \
        it should have 862 in upperscreen and 862 in lowerscreen. ', () => {
            
            _componentOrchestratorService._currentvalue.next('8');
            _componentOrchestratorService._currentvalue.next('6');
            _componentOrchestratorService._currentvalue.next('2');
            fixture.detectChanges();
            expect(lwrScrn.textContent).toBe('862');
            expect(uprScrn.textContent).toBe('862');
            
            
        });
        it('when 8, 6, 2 and * are pressed on the calculator \
        it should have * in upperscreen and 862* in lowerscreen. ', () => {
            
            _componentOrchestratorService._currentvalue.next('8');
            _componentOrchestratorService._currentvalue.next('6');
            _componentOrchestratorService._currentvalue.next('2');
            _componentOrchestratorService._currentvalue.next('*');
            fixture.detectChanges();
            expect(lwrScrn.textContent).toBe('862*');
            expect(uprScrn.textContent).toBe('*');
            
            
        });
    });
    
    describe('Given the screen has digits on it from a previous operation', () => {
        // any reqd initial set up. use beforeEach
/*
        it('when no number/operator has been pressed \
        it should have 0 in upperscreen and an empty string in lowerscreen', () => {
                    //
                    
                    
            }); */
    }); 
    
});