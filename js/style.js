$(function () {
  /* Fixed header */
  const header = $("#header");
  const intro = $("#intro");
  const introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    const introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  /* Smooth scroll */
  $("[data-scroll]").on("click", function (e) {
    e.preventDefault();

    const elementId = $(this).data("scroll");
    const elementOffset = $(elementId).offset().top;

    $("html, body").animate(
      {
        scrollTop: elementOffset - 50,
      },
      600
    );
  });

  /* Running numbers */
  let show = true;
  $(window).on("scroll", function name() {
    let w_top = $(window).scrollTop();
    let e_top = $("#runningNumbers").offset().top;

    if (w_top + 1000 >= e_top) {
      $("#runningNumbers").each(function () {
        if (!show) return false;
        let time = 2;
        $("div").each(function () {
          let i = 1;
          let num = $(this).data("num");
          let step = (1000 * time) / num;
          let that = $(this);
          let int = setInterval(() => {
            if (i <= num) {
              that.html(i);
            } else {
              clearInterval(int);
            }
            i++;
          }, step);
        });
        show = false;
      });
    }
  });

  /* Gallery */
  $(".gallery-list").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".autoplay").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
