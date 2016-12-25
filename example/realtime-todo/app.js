var myApp = angular.module('myTodoApp', ['backand']);

myApp.config(function (BackandProvider) {
  BackandProvider.setAppName('backandtodoapp');
  BackandProvider.setSignUpToken('76a0ed19-c9d4-405a-9e20-493d637b131c');
  BackandProvider.setAnonymousToken('6adbc622-36b5-496c-b288-19ea28816f10');
  BackandProvider.runSocket(true);
})

myApp.controller('DemoCtrl', ['$scope', '$http', 'Backand', DemoCtrl]);

function DemoCtrl($scope, $http, Backand) {
  var objectName = 'todo';

  $scope.todos = [];
  Backand.useAnonymousAuth();

  Backand.on('todo_updated', function (data) {
    //Get the event and refresh the list
    console.log("event:" + data);
    $scope.readList();
  });

  $scope.readList = function () {
    var params = {
      pageSize: 50,
      pageNumber: 1,
      sort: '[{fieldName:\'id\', order:\'desc\'}]'
    }
    Backand.getList(objectName, params).then(function(response) {
      $scope.todos = response.data.data;
    });
  };

  $scope.create = function (newTodo) {
    return Backand.create(objectName, newTodo, {returnObject: true}).then(function(response) {
      //$scope.readList();
      return response.data;
    });
  };

  $scope.update = function (todo) {
    return Backand.update(objectName, todo.id, todo, {returnObject: true}).then(function(response) {
      //$scope.readList();
      return response.data;
    });
  };

  $scope.delete = function (todo) {
    return Backand.remove(objectName, todo.id).then(function(response) {
      $scope.readList();
      return response.data;
    });
  };
}
