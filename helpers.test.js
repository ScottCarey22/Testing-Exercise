describe("Helpers tests (with setup and tear-down)", function () {
    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 30;
        submitPaymentInfo();
    });

    it('should add total tips of allpayments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(30);

        billAmtInput.value = 150;
        tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(50);
    });

    // jasmine says test failed however, when looking at the test, it worked. 
    it('should add total bills of allpayments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(200);

        billAmtInput.value = 150;
        tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(350);
    });

    it('should add all tip % to a single % on calculateTipPercent()', function () {
        expect(calculateTipPercent(200, 30)).toEqual(15);
        expect(calculateTipPercent(150, 20)).toEqual(13);

    });

    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });

});