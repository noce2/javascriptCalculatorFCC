import { MathEngineService } from './mathEngine.service'

describe('MathEngineService Tests',() => {
    let _service: MathEngineService;
    beforeEach(() => {
        _service = new MathEngineService();
    });

    describe('I can add, subtract, multiply & divide 2 nos',()=> {
        it('evaluate("2*2")',() => {
            expect(_service.evaluate('2*2')).toEqual('4');
        });
        it('evaluate("2/2")',() => {
            expect(_service.evaluate('2/2')).toEqual('1');
        });
        it('evaluate("2+3")',() => {
            expect(_service.evaluate('2+3')).toEqual('5');
        });
        it('evaluate("2-2")',() => {
            expect(_service.evaluate('2-2')).toEqual('0');
        });
        it('evaluate("3e+8/1000")',() => {
            expect(_service.evaluate('3e+8/1000')).toEqual('3e+5');
        });
        it('evaluate("0.03/2")',() => {
            expect(_service.evaluate('0.03/2')).toEqual('1.5e-2');
        });
        
        it('evaluate("")',() => {
            expect(_service.evaluate('')).toEqual('');
        });
        
    });

    describe('I can keep chaining mathematical operations together until \
     I hit the equal button, and the calculator will tell me \
      the correct output',()=> {
        
        it('evaluate("0.03/2 + 5 - 8 * 2")',() => {
            expect(_service.evaluate('0.03/2 + 5 - 8 * 2')).toEqual('-10.985');
        });
    });
    
});