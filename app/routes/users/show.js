import Ember from 'ember';
import ResetScroll from '../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  actions: {
    sendUserEmail: function(text, senderName, senderEmail, recipientName, recipientEmail) {
      var adapter = this.store.adapterFor('application');

      adapter.ajax("https://api.parse.com/1/functions/sendMailgun", "POST", {
        data: {
          text: text,
          senderName: senderName,
          senderEmail: senderEmail,
          subject: recipientName,
          recipientEmail: recipientEmail
        }
      }).then(function(response) {
        console.log('adapter.ajax response:', response);
        // this.transitionTo('index');
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
        toastr.success('Email sent!');
      }.bind(this));
    }
  }
});
