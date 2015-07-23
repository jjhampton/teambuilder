import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeMember: function(problem, member) {
      this.sendAction('removeMember', problem, member);
      toastr.options = {
        "positionClass": "toast-top-right",
        "showDuration": "2000",
        "hideDuration": "2000",
        "timeOut": "3000",
        "extendedTimeOut": "2000",
        "showEasing": "linear",
        "hideEasing": "swing",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"};
      toastr.success('Teammate Removed.');
    },
    updateProgress: function(problem) {
      this.sendAction('updateProgress', problem);
      toastr.options = {
        "positionClass": "toast-top-right",
        "showDuration": "2000",
        "hideDuration": "2000",
        "timeOut": "3000",
        "extendedTimeOut": "2000",
        "showEasing": "linear",
        "hideEasing": "swing",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"};
      toastr.success('Progress Updated!');
    },
    markComplete: function(problem) {
      this.sendAction('markComplete', problem);
      toastr.options = {
        "positionClass": "toast-top-right",
        "showDuration": "2000",
        "hideDuration": "2000",
        "timeOut": "3000",
        "extendedTimeOut": "2000",
        "showEasing": "linear",
        "hideEasing": "swing",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"};
      toastr.success('Problem Solved!');
    }
  }
});
