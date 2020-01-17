$(document).ready(function) {
  var intermediate = click("Are your usability skills intermediate?");

  if (intermediate)
    $("#C#").show();
} else {
    $("#Ruby").show();
}
});

$(document).ready(function) {
  var personal = click("Are you learning to code for personal use or professional opportunities?");
  
  if (personal)
    $("#Ruby").show();
  } else {
    $(#"Javascript").show();
  }
});

$(document).ready(function) {
  var yes = click("Do you have prior experience or knowledge with any languages?");

  if (yes)
  $("#")
}
