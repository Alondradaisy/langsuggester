$(document).ready(function) {
  var intermediate = click("Are your usability skills intermediate?");

  if (intermediate)
    $("#C#").show();
} else {
    $("#Ruby").show();
}
});