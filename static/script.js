function rotateFunction(){
  var min = 360;
  var max = 1800;
  var deg = Math.floor(Math.random() * (max - min)) + min;
  console.log(deg);
  document.getElementById('box').style.transform = "rotate("+deg+"deg)";

  setTimeout(function() {
    restaurantSelection();
    let a = new Array();
    a = restaurantLocationInfo(deg);
    document.getElementById('name').innerText = a["n"];
    document.getElementById('information').innerText = a["i"];
    document.getElementById('directions').onclick = function () {
      window.open(a["l"], "_blank");
    }
  }, 5000);
}

function getDirections(a) {
  location.href = a;
}

var element = document.getElementById('box');
element.classList.remove('animate');

setTimeout(function(){
    element.classList.add('animate');
}, 5000);

function restaurantSelection(){
  var res = document.getElementById('restaurant');
  res.show();
}

function keepDialogOpen() {
  window.info.close();
  window.restaurant.show();
}

function restaurantLocationInfo(r) {
  let res = new Array();

  if ((r >= 360 && r <= 382) || (r >= 698 && r <= 743) || (r > 1058 && r <= 1103) || (r > 1418 && r <= 1463) || (r > 1778 && r <= 1800)) {
    res = {"n":"Brekkie", 
      "l":"https://www.google.ca/maps/place/20+Westpark+Link+SW+%23130,+Calgary,+AB+T3H+0V5/@51.0605574,-114.2115466,17z/data=!3m1!4b1!4m5!3m4!1s0x53716c2a753ff4a7:0x375114afd83c8192!8m2!3d51.060554!4d-114.2093579",
      "i":"Innovative takes on breakfast classics served in a bright, loftlike space with outdoor seating."};
  } else if ((r > 382 && r <= 427) || (r > 743 && r <= 788) || (r > 1103 && r <= 1148) || (r > 1463 && r <= 1508)) {
    res = {"n":"Denny's", 
      "l":"https://www.google.ca/maps/place/2450+16+Ave+NW,+Calgary,+AB+T2M+0M5/@51.0674589,-114.1193578,17z/data=!3m1!4b1!4m5!3m4!1s0x53716fa362683aa5:0x160907ccf6556825!8m2!3d51.0674555!4d-114.1171691",
      "i":"Casual diner chain dishing up classic American comfort fare, including all-day breakfast favorites."};
  } else if ((r > 427 && r <= 472) || (r > 788 && r <= 833) || (r > 1148 && r <= 1193) || (r > 1508 && r <= 1553)) {
    res = {"n":"OEB", 
      "l":"https://www.google.ca/maps/place/4132+University+Ave+NW,+Calgary,+AB/@51.0779424,-114.1489247,17z/data=!3m1!4b1!4m5!3m4!1s0x53716f039a99c9fb:0xe48492ee137fc001!8m2!3d51.0779391!4d-114.146736",
      "i":"Variations on eggs Benedict, French toast & waffles, plus burgers & mimosas, in a colorful space."};
  } else if ((r > 472 && r <= 517) || (r > 833 && r <= 878) || (r > 1193 && r <= 1238) || (r > 1553 && r <= 1598)) {
    res = {"n":"IHOP", 
      "l":"https://www.google.ca/maps/place/901+64+Ave+NE+%234170,+Calgary,+AB+T2E+7P4/@51.1085766,-114.0413111,17z/data=!3m1!4b1!4m5!3m4!1s0x537165b3336993bf:0x7e86b829f548fa59!8m2!3d51.1085733!4d-114.0391224",
      "i":"Long-standing chain serving a wide variety of pancakes & other American breakfast & diner fare."};
  } else if ((r > 517 && r <= 562) || (r > 878 && r <= 923) || (r > 1238 && r <= 1283) || (r > 1598 && r <= 1643)) {
    res = {"n":"Benny's", 
      "l":"https://www.google.ca/maps/place/7007+11+St+SE,+Calgary,+AB+T2H+2T9/@50.9907887,-114.0424683,17z/data=!3m1!4b1!4m5!3m4!1s0x537170ecde8f2cbf:0xb83ff199041c4dc!8m2!3d50.9907853!4d-114.0402796", 
      "i":"1950's-style joint for breakfast plates, sandwiches & other diner staples, plus cocktails & shakes."};
  } else if ((r > 562 && r <= 607) || (r > 923 && r <= 968) || (r > 1283 && r <= 1328) || (r > 1643 && r <= 1688)) {
    res = {"n":"Phil's", 
      "l":"https://www.google.ca/maps/place/2312+16+Ave+NW,+Calgary,+AB+T2M+0M5/@51.0673933,-114.1161962,17z/data=!3m1!4b1!4m5!3m4!1s0x53716fa33cc0ff77:0xe39d127807223fab!8m2!3d51.0673899!4d-114.1140075",
      "i":"Diner favourites from breakfast plates to burgers dished up in a roomy, relaxed environment."};
  } else if ((r > 607 && r <= 652) || (r > 968 && r <= 1013) || (r > 1328 && r <= 1373) || (r > 1688 && r <= 1733)) {
    res = {"n":"ZCREW", 
      "l":"https://www.google.ca/maps/place/401+11+Ave+SE,+Calgary,+AB+T2G+0Y5/@51.0420396,-114.0578245,17z/data=!3m1!4b1!4m5!3m4!1s0x5371700111540c19:0xa2e79deb4579d765!8m2!3d51.0420362!4d-114.0556358",
      "i":"Coffee, tea & brunch, including grab-&-go sandwiches, served in a laid-back, modern environment."};
  } else if ((r > 652 && r <= 697) || (r > 1013 && r <= 1058) || (r > 1373 && r <= 1418) || (r > 1733 && r <= 1778)) {
    res = {"n":"Cora",
      "l":"https://www.google.ca/maps/place/420+Brentwood+Wy+NW,+Calgary,+AB+T2L+1K8/@51.0863646,-114.1299329,17z/data=!3m1!4b1!4m5!3m4!1s0x53716f12bc65a245:0x4e206103e74018a6!8m2!3d51.0863613!4d-114.1277442",
      "i":"Serves colourful dishes filled with creativity to create a memorable nutritious experience each morning in a warm family atmosphere."};
  }

  return res;
}