var expect = chai.expect;
var lastCreatedId = null;

describe('Backand SDK', () => {

  var Backand;
  var $timeout;
  beforeEach(module('backand', function(BackandProvider) {
    var provider = BackandProvider;
    provider.init && provider.init({
      appName: 'sdk',
      signUpToken: '851692ae-eb94-4f18-87ee-075255e67748',
      anonymousToken: '82cfcfe8-c718-4621-8bb6-cd600e23487f',
      runSocket: true
    });
  }));

  beforeEach(inject(function(_$q_, _$timeout_, _Backand_){
    $timeout = _$timeout_;
    deferred = _$q_.defer();
    Backand = _Backand_;
  }));

  it('get', function(done) {
    this.timeout(0);
    // sinon.spy(Backand.query, 'get').returnValue(deferred.promise);
    Backand.query.get('getItemsCount').then(function(response) {
      console.log(response);
      done();
    });
    $timeout.flush();
  });

});
