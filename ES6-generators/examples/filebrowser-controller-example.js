Q.spawn(function*(){
  try {
    // get the plan
    var plan = yield Plan.get($stateParams.planUid);
    $scope.plan = plan;
    upload.attrs.plan = plan;
    upload.attrs.path = $scope.filePath;
    upload.attrs.when.allUploadsCompleted = $scope.allUploadsCompleted;
    upload.attrs.when.singleUploadCompleted = $scope.singleUploadCompleted;
    upload.attrs.when.uploadError = $scope.uploadError;

    // get the plan user
    var planUser = yield plan.getCurrentPlanUser();
    $scope.updateDirectory($scope.filePath);
    $scope.currentPlanUser = planUser;
    $rootScope.remoteServers = Plan.remoteServers;
    $rootScope.$broadcast('planlist:update');

    if ($scope.currentPlanUser.roleName === "Plan_Guest") {
      upload.behaviors.closeDialog();
    } else {
      upload.createUploader($scope);
    }

    // get the plan settings
    var planSettings = yield plan.getSettings();
    $scope.currentPlanSettings = planSettings;
  } catch(e) {
    $scope.hasError = true;
  }
});
