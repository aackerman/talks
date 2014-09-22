// surrounding code omitted for brevity

var self = this;

this.applyClickHandler(function(e){
  e.preventDefault();
  // update the button with progress
  self.showProgress();

  Q.spawn(function*(){
    try {
      var accountResponse = yield self.createAccount();
      yield self.createAccountLocation(accountResponse.account, self.account.billing_address);
      var orgResponse = yield self.createOrgInSalesforce(accountResponse.account);
      yield self.updateSalesforceOpportunityWithNewOrgId(orgResponse);
      var opportunityResponse = yield self.createOpportunity(accountResponse);
      self.success(opportunityResponse);
    } catch(e) {
      self.error(e);
    }
  });
});
