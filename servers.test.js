describe("Servers test (with setup and tear-down)", function () {

  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo() with empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  // problem: table is already setting to empty. the before is running but the after is running cancelling it out
  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tr tbody td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual('Alice');
    expect(curTdList[1].innerText).toEqual('$0.00');
    expect(curTdList[2].innerText).toEqual('X');
  });

  afterEach(function () {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});



