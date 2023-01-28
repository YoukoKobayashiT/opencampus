/*  fade_in animation img */
// trigger設定
const scrollTrigger = document.querySelectorAll(".js-scroll-trigger");
// animation関数呼び出し
if (scrollTrigger.length) {
  scrollAnimation(scrollTrigger);
}
// animation関数
function scrollAnimation(trigger) {
  window.addEventListener("scroll", function () {
    for (let i = 0; i < trigger.length; i++) {
      let position = trigger[i].getBoundingClientRect().top;
      scroll = window.pageYOffset || document.documentElement.scrollTop;
      offset = position + scroll;
      windowHeight = window.innerHeight;
      if (scroll > offset - windowHeight + 70) {
        trigger[i].classList.add("is-active");
      } else {
        trigger[i].classList.remove("is-active");
      }
    }
  });
}
/*  end__fade_in animation img  */

/*  fade_in animation category-title */
// trigger
const scrollTriggerTtl = document.querySelectorAll(".js-scroll-trigger-ttl");
// fx_animation呼び出し
if (scrollTriggerTtl.length) {
  scrollAnimation(scrollTriggerTtl);
}
// fx_animation
function scrollAnimation(trigger) {
  window.addEventListener("scroll", function () {
    for (let i = 0; i < trigger.length; i++) {
      let position2 = trigger[i].getBoundingClientRect().top;
      scroll = window.pageYOffset || document.documentElement.scrollTop;
      offset = position2 + scroll;
      windowHeight = window.innerHeight;
      if (scroll > offset - windowHeight + 100) {
        trigger[i].classList.add("is-active");
      } else {
        trigger[i].classList.remove("is-active");
      }
    }
  });
}
/*  end__fade_in animation category-title */

/*  link in page get_a-tag  */
const gotoLinkinId = () => {
  if (document.documentElement.width() > 900) {
    var headerHeight = 145;
  } else {
    headerHeight = 80;
  }

  const pagelinks = document.querySelectorAll("a");
  for (let i = 0; i < pagelinks.length; i++) {
    pagelinks[i].addEventListener("click", function () {
      let href = pagelinks[i].getAttribute("href");
      if (href === "#" || href === "") {
        var target = document.documentElement;
      } else {
        target = href;
      }

      window.scrollTo({
        top: target,
      });
    });
  }
};
