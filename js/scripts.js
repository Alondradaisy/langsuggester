$(document).ready(function) {
  var intermediate = prompt("Are your usability skills intermediate?");

  if (intermediate)
    $("#C#").show();
} else {
    $("#Ruby").show();
}
});

$(document).ready(function) {
  var personal = prompt("Are you learning to code for personal use or professional opportunities?");
  
  if (personal)
    $("#Ruby").show();
  } else {
    $(#"Javascript").show();
  }
});

$(document).ready(function) {
  var yes = prompt("Do you have prior experience or knowledge with any languages?");

  if (yes)
    $("#C#").show();
} else {
    $("#Javascript").show();
}
});

$(document).ready(function) {
  var yes = prompt("What do you intend to develop through learning to code?");

  if (mobileGameApp)
    $("#Swift").show();
} else {
    $("#Javascript").show();
}
});

$(document).ready(function) {
  var yes = prompt("Do you prefer elegance or functionality?");

  if (elegance)
    $("#Ruby").show();
} else {
    $("#C#").show();
}
});

