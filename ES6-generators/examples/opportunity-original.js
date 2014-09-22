// surrounding code omitted for brevity

var self = this;

this.applyClickHandler(function(e){
  e.preventDefault();
  // update the button with progress
  self.showProgress();

  // create account in db
  self.createAccount().then(function(accountResponse){
    // create location on the account
    return self.createAccountLocation(accountResponse.account, self.account.billing_address).then(function(){
      // create org in salesforce
      return self.createOrgInSalesforce(accountResponse.account).then(function(orgResponse){
        // connect salesforce opportunity with org id
        return self.updateSalesforceOpportunityWithNewOrgId(orgResponse).then(function(){
          // create opportunity in db
          return self.createOpportunity(accountResponse).then(function(response){ return self.success(response); }, self.error);
        }, self.error);
      }, self.error);
    }, self.error);
  }, self.error);
});
