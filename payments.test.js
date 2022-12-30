describe("Payments tests (with setup and tear-down)", function () {
    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 30;
    });

    // before each is not loading causing this first test to fail.
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayment['payment1'].billAmt).toEqual('200');
        expect(allPayment['payment1'].tipAmt).toEqual('30');
        expect(allPayment['payment1'].tipPercentage).toEqual('15');
    });

    it('should not add a new payment on submitPaymentInfo() with empty input', function () {
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    });

    //  still confused on this one. I took it from the other file and tried to make it work. 
    it('should update payment #paymentTable on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(4);
        expect(curTdList[0].innerText).toEqual('$200');
        expect(curTdList[1].innerText).toEqual('$30');
        expect(curTdList[2].innerText).toEqual('15%');
        expect(curTdList[3].innerText).toEqual('X');
    });

    it('should create a new payment on createCurPayment()', function () {
        let expectedPayment = {
            billAmt: '200',
            tipAmt: '30',
            tipPercent: 15,
        }

        expect(createCurPayment()).toEqual(expectedPayment);
    });

    it('should not create payment with empty input on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });


});