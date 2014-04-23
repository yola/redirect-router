define(function(require){
  'use strict';

  var router = require('router');
  var $ = require('jquery');

  describe('router', function() {

    it('is a singleton', function() {
      var secondYoRouter = require('router');
      expect(router).toBe(secondYoRouter);
    });

    it('sets and gets a next value', function() {
      router.setNextUrl('http://some.url');
      expect(router.getNextUrl()).toBe('http://some.url');
    });

    describe('timeout to redirect', function() {

      beforeEach(function() {
        $.fn.sitecatalyst = function() {};

        spyOn(router, 'redirect');
        jasmine.Clock.useMock();
      });

      it('calls redirect after 400 ms', function() {
        router.timeoutRedirect({
          url: 'some-url',
          timeout: 400
        });
        expect(router.redirect).not.toHaveBeenCalled();
        jasmine.Clock.tick(401);
        expect(router.redirect).toHaveBeenCalled();
      });
    });
  });
});
