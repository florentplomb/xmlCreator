'use strict';

describe('Controller: XmlcreatorCtrl', function () {

  // load the controller's module
  beforeEach(module('xmlCreatorApp'));

  var XmlcreatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    XmlcreatorCtrl = $controller('XmlcreatorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(XmlcreatorCtrl.awesomeThings.length).toBe(3);
  });
});
