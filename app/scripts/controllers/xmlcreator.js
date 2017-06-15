/**
 * The controller doesn't do much more than setting the initial data model
 */
 "use strict"
angular.module("xmlCreatorApp").controller("XmlcreatorCtrl", function($scope) {

/**
 * The controller doesn't do much more than setting the initial data model
 */

        $scope.models = {
            selected: null,
            templates: [
                {type: "item", id: 2},
                {type: "container", id: 1, allowedTypes: ['item'], columns: [[]]},
                            {type: "root", attr:{_encoding: "utf-8", _version: 4.0},id:1 , columns:[[]]},
            {type: "DynamicDeploymentConfiguration", id: 1, attr:{_ReactivateExistingDuplicateRule : "true",
            LogLevel:"info", LogMethod:"dynamic", CloseConnections:"false", xmlns:"http://DeploymentTool.com/Configuration"}, columns:[[]]},
            {type: "InitializeCustomExtension", id: 1, columns:[[]]},
            {type: "Steps", id: 1, columns:[[]]},
            {type: "Step", id: 1, attr:{order:10, type:"importSolution", errorBehavior:"stop"}, columns:[[]]},
            {type: "Solution", value:"PreImportSolution_1_0_0_0.zip"}     
            ],
            dropzones: {
                "A": [
          ]}}


  $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);


});
