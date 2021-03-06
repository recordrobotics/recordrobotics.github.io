

var captains = [{
	name: "Faizan Sayeed",
	url: "img/2017-8_portraits/faizan_sayeed.jpg"
  },
  {
	name: "David Lonergan",
	url: "img/2017-8_portraits/david_lonergan.jpg"
  },
  {
	name: "Jack Doyle",
	url: "img/2017-8_portraits/jack_doyle.jpg"
  }
];

var members = [{	
	name: "Abu Sayed Chouwdhry",
	url: "img/2017-8_portraits/abu_sayed_chouwdhry.jpg"
  },
  {
	name: "Anna Guo",
	url: "img/2017-8_portraits/anna_guo.jpg"
  },
  {
	name: "Arlo Gow",
	url: "img/2017-8_portraits/arlo_gow.jpg"
  },
  {
	name: "Aryan Mehotra",
	url: "img/2017-8_portraits/aryan_mehotra.jpg"
  },
  {
	name: "Edgar Kazarian",
	url: "img/2017-8_portraits/edgar_kazarian.jpg"
  },
  {
	name: "Frankie Pacini",
	url: "img/2017-8_portraits/frankie_pacini.jpg"
  },
  {
	name: "Gwyneth Ruban",
	url: "img/2017-8_portraits/gwyneth_ruban.jpg"
  },
  {
	name: "Jacob Makar-Limanov",
	url: "img/2017-8_portraits/jacob_makar-limanov.jpg"
  },
  {
	name: "Katerina Anjeli",
	url: "img/2017-8_portraits/katerina_anjeli.jpg"
  },
  {
	name: "Keith Brezinsky",
	url: "img/2017-8_portraits/keith_brezinsky.jpg"
  },
  {
	name: "Kevin Hsu",
	url: "img/2017-8_portraits/kevin_hsu.jpg"
  },
  {
	name: "Lara Zeng",
	url: "img/2017-8_portraits/lara_zeng.jpg"
  },
  {
	name: "Matt McBride",
	url: "img/2017-8_portraits/matt_mcbride.jpg"
  },
  {
	name: "Max Pounanov",
	url: "img/2017-8_portraits/max_pounanov.jpg"
  },
  {
	name: "Mengqi Tao",
	url: "img/2017-8_portraits/mengqi_tao.jpg"
  },
  {
	name: "Rebecca Combs",
	url: "img/2017-8_portraits/rebecca_combs.jpg"
  },
  {
	name: "Ruiqi Huang",
	url: "img/2017-8_portraits/ruiqi_huang.jpg"
  },
  {
	name: "Vassilios Kaxiras",
	url: "img/2017-8_portraits/vassilios_kaxiras.jpg"
  },
  {
	name: "Wyatt Harris",
	url: "img/2017-8_portraits/wyatt_harris.jpg"
  },
  {
	name: "Yasmine Aoua",
	url: "img/2017-8_portraits/yasmine_aoua.jpg"
  }
];

/*
var mentors =
[
{ name: "Daniel Lonergan", url: "img/2017-8_portraits/daniel.jpg" }
];
*/

var last_enlarge_time = (new Date()).getTime();

var mobile;

function scroll_callback() {
  var scrolltop = $(window).scrollTop();

  if (scrolltop > 40)
	$(".navbar").removeClass("navbar-tall");
  else if (scrolltop)
	$(".navbar").addClass("navbar-tall");

  if (!mobile) {
	var top = scrolltop - document.getElementById("top-img").clientHeight + 55;

	console.log(top);

	if (top < 0)
	  top = 0;

	document.getElementsByClassName("title-list")[0].style.top = top + "px";
  }
}

function resize_callback() {
  console.log("resize");
  var prev = mobile;

  mobile = window.innerWidth > 1000 ? 0 : 1;

  if (mobile && !prev)
	resize_to_mobile();
  else if (!mobile && prev)
	resize_from_mobile();
}

function resize_to_mobile() {
  var active = $(".title-li.active");

  if (active.length) {
	document.getElementsByClassName("title-list")[0].style.top = "-" + active[0].offsetTop + "px";
	var title = document.getElementsByClassName("content-title")[0];
	title.style.height = "54px";
	title.classList.remove("large");
  }
}

function resize_from_mobile() {
  var top = window.scrollTop - document.getElementById("top-img").clientHeight + 55;

  if (top < 0)
	top = 0;

  document.getElementsByClassName("title-list")[0].style.top = top + "px";

  scroll_callback();
}

function loadPerson(i, list, arr) {
  if (i < arr.length) {
	var idx = i;

	var img = new Image();
	img.addEventListener("load", function () {
	  append(idx);
	});
	img.addEventListener("error", function () {
	  append(idx);
	});
	img.src = arr[i].url;

	function append(idx) {
	  var li = document.createElement("li");
	  li.classList += "members-li";
	  li.appendChild(img);

	  var span = document.createElement("span");
	  span.innerHTML = arr[i].name;
	  li.appendChild(span);

	  document.getElementById(list).appendChild(li);

	  next(idx);
	}

	function next(idx) {
	  loadPerson(idx + 1, list, arr);
	}
  }
}

function titleclick_callback() {
  if ($(this).hasClass("active")) {
	if (mobile) {
	  if ($(".content-title").height() == 54) {
		var bh = $(".title-list").height();

		$(".content-title").addClass("large").animate({
		  height: (bh + "px")
		}, {
		  duration: 200,
		  queue: false
		});
		$(".title-list").animate({
		  top: "0px"
		}, {
		  duration: 200,
		  queue: false
		});

		last_enlarge_time = (new Date()).getTime();
	  } else {
		$(".title-list").animate({
		  top: ("-" + this.offsetTop + "px")
		}, {
		  duration: 200,
		  queue: false
		});
		$(".content-title").removeClass("large").animate({
		  height: "54px"
		}, {
		  duration: 200,
		  queue: false
		});
	  }
	}
  } else {
	var st = $(window).scrollTop();

	var sel = this.dataset.textElement;

	$(".content-text.active").fadeTo(150, 0.0, function () {
	  $(this).removeClass("active");

	  $("#" + sel).addClass("active").fadeTo(150, 1.0);
	});

	$(".title-li").removeClass("active");
	$(this).addClass("active");

	if (mobile) {
	  $(".title-list").animate({
		top: ("-" + this.offsetTop + "px")
	  }, {
		duration: 200,
		queue: false
	  });
	  $(".content-title").removeClass("large").animate({
		height: "54px"
	  }, {
		duration: 200,
		queue: false
	  });
	}

	$(window).scrollTop(st);
  }
}

function animate_godown() {
  $("#go-down").animate({
	opacity: "0",
	bottom: "35px"
  }, 300, function () {
	$("#go-down").css("bottom", "65px").animate({
	  opacity: parseFloat($(this).data("max-opacity")),
	  bottom: "50px"
	}, 300);
  });
}

function scrollDown() {
  $("html, body").animate({
	scrollTop: (($("#top-img").height() - 50) + "px")
  }, 400);
}

function check_should_collapse_menu() {
  var active = $(".title-li.active");

  if ($(".content-title:hover").length != 0) {
	last_enlarge_time = (new Date()).getTime();
  } else if (mobile && active.length && $(".content-title").height() > 54 && (new Date()).getTime() -
	last_enlarge_time > 5000) {
	$(".title-list").animate({
	  top: ("-" + active[0].offsetTop + "px")
	}, {
	  duration: 200,
	  queue: false
	});
	$(".content-title").removeClass("large").animate({
	  height: "54px"
	}, {
	  duration: 200,
	  queue: false
	});
  }
}

function loadMainPic() {
  var medium_img = new Image;
  medium_img.src = "img/team_pictures/team_win_medium.jpg";
  medium_img.onload = function () {
	document.getElementById("top-img").style.backgroundImage = "url(" + medium_img.src + ")";

	var large_img = new Image;
	large_img.src = "img/team_pictures/team_win_large.jpg";
	large_img.onload = function () {
	  document.getElementById("top-img").style.backgroundImage = "url(" + large_img.src + ")";
	  //document.getElementById("top-img-loading").style.display = "none";

	  var original_img = new Image;
	  original_img.src = "img/team_pictures/team_win.jpg";
	  original_img.onload = function () {
		document.getElementById("top-img").style.backgroundImage = "url(" + original_img.src + ")";
	  }
	}
  }
}

function init() {
  mobile = window.innerWidth > 1000 ? 0 : 1;

  $("#img-loader").remove();

  //loadMainPic();

  setTimeout(function () {
	$("body").removeClass("loading");
	$(window).scrollTop(0);
  }, 50);

  $("#go-down").css("opacity", "0.8").data("max-opacity", 0.8);

  setInterval(animate_godown, 2000);

  $("#go-down").click(scrollDown);

  $("#a-about").click(function () {
	$("#title-about").trigger("click");
	scrollDown();
  });

  $("#a-contact").click(function () {
	$("#title-contact").trigger("click");
	scrollDown();
  });

  window.addEventListener("scroll", scroll_callback);

  window.addEventListener("resize", resize_callback);

  setInterval(check_should_collapse_menu, 500);

  $(".title-li").click(titleclick_callback);

  loadPerson(0, "mlistc", captains);
  loadPerson(0, "mlist", members);
  /*loadPerson(0, "mtlist", mentors);*/

  var overlayImgs = document.getElementsByClassName("content-img");
  for (var i = 0; i < overlayImgs.length; i++) {
	overlayImgs[i].addEventListener("click", function (evt) {
	  document.getElementById("img-overlay").style.backgroundImage = "url('" + evt.target.src + "')";
	  document.getElementById("overlay").style.display = "block";
	});
  }
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("img-overlay").style.backgroundImage = "";
}
