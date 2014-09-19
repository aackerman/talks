Plan.get($stateParams.planUid).then(function(plan) {
  $scope.plan = plan;
  upload.attrs.plan = plan;
  upload.attrs.path = $scope.filePath;
  upload.attrs.when.allUploadsCompleted = $scope.allUploadsCompleted;
  upload.attrs.when.singleUploadCompleted = $scope.singleUploadCompleted;
  upload.attrs.when.uploadError = $scope.uploadError;
  plan.getCurrentPlanUser()
    .then(function(planUser) {
      $scope.updateDirectory($scope.filePath);
      $scope.currentPlanUser = planUser;
      $rootScope.remoteServers = Plan.remoteServers;
      $rootScope.$broadcast('planlist:update');
      if ($scope.currentPlanUser.roleName === "Plan_Guest") {
        upload.behaviors.closeDialog();
      } else {
        upload.createUploader($scope);
      }
    });
  plan.getPlanSettings()
    .then(function(planSettings){
      $scope.currentPlanSettings = planSettings;
    }, function(err){
      $scope.hasError = true;
    });
}, function(err){
  $scope.hasError = true;
});
