if (Meteor.isServer) {
  Meteor.startup(function () {

    var setup = function(){

    var time = moment().format('H:mm');
    var day = moment().format('ddd');
    var gmailSMTP = process.env.MAIL_URL = 'smtp://sender%40gmail.com:password@smtp.gmail.com:465/';
    var taskFinder = Clients.find().fetch();

    for(var i = 0; i < taskFinder.length; ++i){
      if(taskFinder[i].time == time){
        gmailSMTP;
        Email.send({
          to: taskFinder[i].email,
          from: 'Coach',
          subject: taskFinder[i].subject,
          html: taskFinder[i].body
        });
        console.log(taskFinder[i].subject + " sent to " + taskFinder[i].email + " at " + time);
      }
    }
    
  }

  var cron = new Meteor.Cron( {
      events:{
        "* * * * *"  : setup
      }
    });

  });
}
