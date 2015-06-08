if (Meteor.isServer) {
  Meteor.startup(function () {

    var setup = function(){

    var time = moment().format('H:mm');
    var day = moment().format('ddd');
    var gmailSMTP = process.env.MAIL_URL = 'smtp://sender%40gmail.com:password@smtp.gmail.com:465/';
    //console.log(time);

    if (time === "7:00"){
      gmailSMTP;
        Email.send({
          to: 'recipient@example.com',
          from: 'from',
          subject: 'Breakfast',
          html: Handlebars.templates['example']({ name: 'client name' })
        });
      console.log("Breakfast sent");
    }
    else if (time === "7:15" && day === "Thu"){
      gmailSMTP;
        Email.send({
          to: 'recipient@example.com',
          from: 'from',
          subject: 'Cardio',
          html: Handlebars.templates['example']({ name: 'client name' })
        });
      console.log("Cardio sent");
    } 
    else if (time === "7:30"){
      gmailSMTP;
        Email.send({
          to: 'recipient@example.com',
          from: 'from',
          subject: 'Workout',
          html: Handlebars.templates['example']({ name: 'client name' })
        });
      console.log("Workout sent");
    }
    else if (time === "11:00"){
      gmailSMTP;
        Email.send({
          to: 'recipient@example.com',
          from: 'from',
          subject: 'Lunch',
          html: Handlebars.templates['example']({ name: 'client name' })
        });
      console.log("Lunch sent");
    }
    else if (time === "14:30"){
      gmailSMTP;
        Email.send({
          to: 'recipient@example.com',
          from: 'from',
          subject: 'Snack',
          html: Handlebars.templates['example']({ name: 'client name' })
        });
      console.log("Snack sent");
    }
    else if (time === "19:00"){
      gmailSMTP;
        Email.send({
          to: 'recipient@example.com',
          from: 'from',
          subject: 'Dinner',
          html: Handlebars.templates['example']({ name: 'client name' })
        });
      console.log("Dinner sent");
    }
  }

  var cron = new Meteor.Cron( {
      events:{
        "* * * * *"  : setup
      }
    });

  });
}
