const main = require('../main/main');

describe('main()',() => {
    it('should calculate the remaindar' , () => {
        expect(main(1,5).toBe(7));
        expect(main(7,10).toBe(13));
        expect(main(10,20).toBe(18));
        expect(main(15,0).toBe(19));
    });
});
