// surrounding code omitted for brevity

var self = this;

this.applyClickHandler(function(e){
  e.preventDefault();
  // update the button with progress
  self.showProgress();

  // create account in S42 db
  self.createAccount().then(function(accountResponse){
    // create location on the account
    return self.createAccountLocation(accountResponse.account, self.account.billing_address).then(function(){
      // create C42 org in salesforce
      return self.createCode42OrgInSalesforce(accountResponse.account).then(function(code42OrgResponse){
        // connect salesforce opportunity with C42 org id
        return self.updateSalesforceOpportunityWithNewCode42OrgId(code42OrgResponse).then(function(){
          // create opportunity in S42 db
          return self.createOpportunity(accountResponse).then(function(response){ return self.success(response); }, self.error);
        }, self.error);
      }, self.error);
    }, self.error);
  }, self.error);
});
