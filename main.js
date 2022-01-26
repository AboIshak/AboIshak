
//<![CDATA[
$(function () {

  "use strict";



  (function dateAndTime() {
    /* time */


    setInterval(function () {

      var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
      if (hours < 10) { hours = '0' + hours; }
      if (minutes < 10) { minutes = '0' + minutes; }
      if (seconds < 10) { seconds = '0' + seconds; }
      document.querySelector('.DateCover .Time').innerHTML = "<span>" + hours + "</span>:<span>" + minutes + "</span>:<span>" + seconds + "</span>";

    }, 500);


    /* Date */

    var lang = document.querySelector('html').getAttribute('lang'),
      date = new Date(),

      nameToday = date.toLocaleString(lang, { weekday: "short" }),

      numberToday = date.toLocaleString(lang, { day: "numeric" }),

      nameMonth = date.toLocaleString(lang, { month: "numeric" }),

      nameYear = date.toLocaleString(lang, { year: "numeric" }),

      ClassDate = document.querySelector('.DateCover .Date');

    ClassDate.innerHTML += nameToday + "<span>/</span>" + numberToday + "<span>/</span>" + nameMonth + "<span>/</span>" + nameYear;






  })();




  /* this script with shape post settings value glabal */



  (function rtSettings() {

    console.log($("#sectionPost .widget-content"))




    var rts = $("#rtSettings"),
      readMore = rts.find(".readMore"),
      showMore = rts.find(".showMore"),
      topicCount = parseInt(rts.find(".topicCount").html()),
      gridStyle = rts.find('.gridStyle').text(),
      loading = rts.find('.loading'),
      loadMorePosts = rts.find('.loadMorePosts'),
      noResultsFound = rts.find('.noResultsFound'),

      title = rts.find(".title").text();




    /* $(".sectionPost #Blog1").append("<div class='planeShapes shapePost' shape='Post' label='recent' count='" + topicCount + "' speed='10' second='5'></div>"); */
    $("#Blog1 .HTML").prepend("<h3 class='title'>" + title + "</h3>");

    $("#Blog1 .widget-content").append("shape:'post',label:'recent',count:'" + topicCount + "'");





    if (readMore.html() == "default") {
      readMore.html($("#globalValue #rm").html());
    }

    if (showMore.html() == "default") {
      showMore.html($("#globalValue #sm").html());
    }

    if (loading.html() == "default") {

      loading.html($("#globalValue #l").html());


    }

    if (loadMorePosts.html() == "default") {

      loadMorePosts.html($("#globalValue #lmp").html());


    }
    if (noResultsFound.html() == "default") {

      noResultsFound.html($("#globalValue #nrf").html());


    }






  })();

  /* preloader */

  function preloader(named) {
    this.name = named


  }

  var x = new preloader("111111111111");




  /* pages Menu create and animate */

  (function pagesMenu() {

    /* pagesCover */
    var $pagesCover = $(".pagesCover"),
      $pageMenu = $(".pageMenu"),

      $svgIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.001 25"><path fill="rgb(186,107,87)" fill-rule="evenodd" d="M.01751697 12.5C.39499547 5.49030157 6.18890962 0 13.20876447 0h16.79242247c1.65685425 0 3 1.34314575 3 3v19c0 1.65685425-1.34314575 3-3 3H11.86249222C5.06058217 25-.34824198 19.29206896.01751697 12.5z"></path><g><path fill-rule="evenodd" d="M7.00118694 6h21c.55191502 0 1 .44808498 1 1v.7c0 .55191502-.44808498 1-1 1h-21c-.55191503 0-1-.44808498-1-1V7c0-.55191502.44808497-1 1-1z"></path><path  fill-rule="evenodd" d="M17.00118694 18h11c.55191502 0 1 .44808498 1 1v.7c0 .55191502-.44808498 1-1 1h-11c-.55191503 0-1-.44808498-1-1V19c0-.55191502.44808497-1 1-1z"></path><path fill-rule="evenodd" d="M12.00118694 12h16c.55191502 0 1 .44808498 1 1v.7c0 .55191502-.44808498 1-1 1h-16c-.55191503 0-1-.44808498-1-1V13c0-.55191502.44808497-1 1-1z"></path></g></svg>'

    $pageMenu.wrap('<div class="pagesCover"></div>').prepend($svgIcon);

    if ($("html").attr("dir") == "ltr") {
      $pageMenu.find("svg").addClass("rotateX")
    }

  })();

  /* main manu */
  $.prototype.$extend = function (c) {
    var $class = "." + c;

    $(this).each(function () { /* this */

      var index = $(this).text().search(">") > -1 || $(this).text().search("<") > -1;

      if (index) {

        var text = $(this).children().text().replace(/<|>/, " ").trim(); $(this).children().text(text);

        $(this).addClass("sub");

        if (!$(this).prev().hasClass("sub")) {

          $(this).prev().addClass(c);

          $(this).removeAttr("class").appendTo($(this).prevAll($class));

        }

      }

    });
    $($class).each(function () {

      var chi = $(this).children().eq(0);
      chi.remove();
      $(this).html("<ul>" + $(this).html() + "</ul>").prepend('<svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" version="1.1" viewBox="0 0 19 19"><path d="m3.0377 7.5776c-0.69374 0.65078-0.62181 1.863 0.11314 2.4539 1.7262 1.7182 3.4369 3.4529 5.1728 5.1607 0.68339 0.59014 1.7962 0.4467 2.351-0.25017 1.7106-1.7186 3.4377-3.4218 5.138-5.1501 0.66543-0.76072 0.39272-2.0713-0.51547-2.5107-0.69693-0.38836-1.6077-0.15387-2.0978 0.45521-1.2771 1.2771-2.5542 2.5542-3.8313 3.8313-1.374-1.3661-2.7326-2.7484-4.1162-4.1042-0.63208-0.53554-1.6398-0.48359-2.2141 0.11396z"/></svg>').prepend(chi);

    });


    /*
    
   
   
   
  */



  } /*  End $extend; */
  $(".MainMenu li").$extend("SubMenu");
  $(".SubMenu li").$extend("DropMenu");

  /*  Mobile Menu */
  $(".mobileMenu").each(function () {
    var $this = $(this);
    $(".mobileMenu .iconMenu").on("click", function () {


      $("body").toggleClass("mM-Active");
      $this.toggleClass("active");





    })



    $(".mobileMenu .iconClose").on("click", function () {
      $("body").toggleClass("mM-Active");
      $this.toggleClass("active");
    })





    var $content = $(this).find(".content > div"),
      svgChveronDown = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 19 19"><path d="m3.0377 7.5776c-0.69374 0.65078-0.62181 1.863 0.11314 2.4539 1.7262 1.7182 3.4369 3.4529 5.1728 5.1607 0.68339 0.59014 1.7962 0.4467 2.351-0.25017 1.7106-1.7186 3.4377-3.4218 5.138-5.1501 0.66543-0.76072 0.39272-2.0713-0.51547-2.5107-0.69693-0.38836-1.6077-0.15387-2.0978 0.45521-1.2771 1.2771-2.5542 2.5542-3.8313 3.8313-1.374-1.3661-2.7326-2.7484-4.1162-4.1042-0.63208-0.53554-1.6398-0.48359-2.2141 0.11396z"></path></svg>';

    /* pages */
    $content.append($(".pageMenu").clone())
    $content.find('.pageMenu svg').remove();
    $content.find('.pageMenu').removeAttr("class").addClass("mM-List")
    /* main menu */
    $content.append($(".MainMenu").clone())
    $content.find('.MainMenu').wrap("<div class='mM-List '></div>").before("<h3 class='title'>" + $("#MainMenuCover .title").text() + "</h3>")

    $content.find('.MainMenu').removeAttr("class");
    $content.find('.SubMenu').removeAttr('class').addClass("mM-sub");
    $content.find('.DropMenu').removeAttr('class').addClass("mM-sub")



    $(".mobileMenu .mM-sub a, .mobileMenu .mM-drop a").on('click', function (e) {
      e.preventDefault();
      $(this).parent().toggleClass("active");


    })

    /* mobile menu social media */
    $content.append($("nav .socialMedia").clone())







  });




  (function redirectPage() {
    $("#dataRedierctPage").each(function () {

      var pageUrl = $(this).children("#pageUrl").attr("value"),
        blockUrl = $(this).children("#blockUrl").attr("value"),
        dataCount = $(this).children("#dataCount").attr("value"),
        $hostname = "programming-bt.blogspot.com"; /* window.location.hostname */
      var s = blockUrl.split(",");

      var item = $(".shapePost .postContent a");

      for (var i = 0; i < item.length; i++) {


        var x = item.eq(i).attr("href").indexOf($hostname) > -1,
          y = item.eq(i).attr("href").indexOf("bp") > -1, u, w;




        function check() {

          for (var j = 0; j < s.length; j++) {


            if (item.eq(i).attr("href").indexOf(s[j]) > - 1) {

              return true;
            }





          }



        } check();



        if (!x && !y && !check()) {
          item.eq(i).addClass("linkRedierctPage");

          item.eq(i).click(function (e) {
            e.preventDefault();

            var h = $(this).attr("href");
            localStorage.setItem("href", h)


            location.href = pageUrl;

          });

        }
        /* console.log(pageUrl) */

      }
      /* create redirectPage */

      function create() {

        if (location.href == pageUrl) {



        }


      } create();





    });







  })();








  /*
  
    function redirectPage (){
  var d = "https://programming-bt.blogspot.com/";
  
  
  var urlHome = $(".systemSettings #HPU").text(),
      $href = window.location.href,
      $pathName = window.location.pathname,
      $hostname = "programming-bt.blogspot.com" //window.location.hostname;
      customUrl = $href.split(urlHome).join("");
  
  
  //console.log( document.querySelector("a").getAttribute("href"))
  
  //console.log(location.hostname) 
  
  
  var link = $(".shapePost .postBody a");
  
  //console.log(link.eq(0).indexOf(hostname))
  
  for(var i =0; i<link.length; i++){
  
  var linkHref = link.eq(i).attr("href");
    
    if(linkHref !== undefined){
    
      var x =  linkHref.indexOf($hostname) > -1 || linkHref.indexOf("bp") > -1 ,
       urlpage = "https://programming-bt.blogspot.com/?111111111111111111111111="
         
        if(!x){
          link.eq(i).attr("href",urlpage);
         // console.log(linkHref)
          link.eq(i).click(function(){
            localStorage.setItem("href",linkHref)
          })
  
  
        }
  
    }
  
  
  
  }
  
  
  
  
  
  
  
  
  //console.log(window.location.pathname)
  
  
  
  }
  
  redirectPage();
  
  function chekRedirectPage (){
  url = "file:///E:/www/prodex/index.html?redirect="
  if(location.href == url){
  //console.log(localStorage)
  
  }
  
  }chekRedirectPage();
  
  */



  function postSplit() {
    var $this = $(".shapePost .postContent"),
      $p = $(".shapePost .pagination"),
      $ul = $p.children("ul");

    if ($this.text().indexOf("[=/=]") > -1) {

      var html = $this.html().split("[=/=]"),
        href = window.location.href,
        s = href.split("?"),
        iconRight = '<svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" version="1.1" viewBox="0 0 19 19"><path d="m11.944 16.032c0.51158 0 1.023-0.19589 1.415-0.5879l4.5296-4.5296c0.784-0.784 0.784-2.046 0-2.83l-4.5296-4.528c-0.784-0.784-2.046-0.784-2.83 0-0.784 0.784-0.784 2.046 0 2.83l1.1117 1.1117h-9.5158c-0.88699 0-1.6011 0.71408-1.6011 1.6011v0.80054c0 0.887 0.71408 1.6011 1.6011 1.6011h9.5173l-1.1132 1.1132c-0.784 0.784-0.784 2.046 0 2.83 0.392 0.392 0.90343 0.5879 1.415 0.5879z"/></svg>',
        iconLeft = '<svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" version="1.1" viewBox="0 0 19 19"><path d="m7.0562 2.9682c-0.51158 0-1.023 0.19589-1.415 0.58789l-4.5296 4.5296c-0.784 0.784-0.784 2.046 0 2.83l4.5296 4.528c0.784 0.784 2.046 0.784 2.83 0 0.784-0.784 0.784-2.046 0-2.83l-1.1117-1.1117h9.5158c0.88699 0 1.6011-0.71408 1.6011-1.6011v-0.80054c0-0.887-0.71408-1.6011-1.6011-1.6011h-9.5173l1.1132-1.1132c0.784-0.784 0.784-2.046 0-2.83-0.392-0.392-0.90343-0.58789-1.415-0.58789z"/></svg>';


      //create html
      function createHtml(item) {
        var iconNext, iconPrev;
        if ($("html").attr("dir") == "ltr") {
          iconNext = iconRight;
          iconPrev = iconLeft;
        } else {
          iconNext = iconLeft;
          iconPrev = iconRight;

        }


        for (var i = 0; i < html.length; i++) {
          $ul.append("<li>" + (i + 1) + "</li>")
        }

        if (item !== html.length - 1) {
          $p.append("<div class='next'>" + iconNext + "</div>")

          if (item !== 0) {
            $p.prepend("<div class='prev'>" + iconPrev + "</div>")

          }

        }

        else {
          $p.prepend("<div class='prev'>" + iconPrev + "</div>")
        }

      }

      // location 
      if (href.toString().indexOf('?') > -1) {

        //s = href.split("?");
        x = parseInt(s[s.length - 1].replace("=", ""));

        $this.html(html[x])
        createHtml(x);
        $ul.children("li").eq(x).addClass("active")


      } else {
        $this.html(html[0]);
        createHtml(0);
        $ul.children("li").eq(0).addClass("active")


      }
      // click li
      $ul.children("li").click(function () {
        if (!$(this).hasClass("active")) {
          var i = $(this).index();
          s = s.slice(0, 1);
          s.push("?=" + i);
          s = s.join("")
          location = s;
        }
        // click next

      });
      $p.children(".next").click(function () {
        $ul.children("li.active").next().click();

        // click prev

      })
      $p.children(".prev").click(function () {
        $ul.children("li.active").prev().click();

      })



    }

  }

  postSplit();




  function contentTable(i) {

    this.c = i;


    var ct = $('.contentTable'),
      ctText = ct.text(),
      svgTable = '<svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" version="1.1" viewBox="0 0 19 19"><path d="m2.9544 1.5625c-1.1377 0-2.0531 0.91545-2.0531 2.0531v0.85318h17.197v-0.85318c0-1.1377-0.91545-2.0531-2.0531-2.0531zm-2.0531 4.5646v2.5435h3.0381v-2.3719c0-0.058795 0.00622-0.11622 0.01757-0.17157zm4.7067 0c0.011336 0.055345 0.01757 0.11277 0.01757 0.17157v2.3719h3.0319v-2.3719c0-0.058795 0.00622-0.11622 0.01757-0.17157zm4.7181 0c0.01134 0.055345 0.01757 0.11277 0.01757 0.17157v2.3719h3.0319v-2.3719c0-0.058795 0.0062-0.11622 0.01757-0.17157zm4.7181 0c0.01134 0.055345 0.01757 0.11277 0.01757 0.17157v2.3719h3.037v-2.5435zm-14.143 4.2018v2.5435h3.0381v-2.5435zm4.7243 0v2.5435h3.0319v-2.5435zm4.7181 0v2.5435h3.0319v-2.5435zm4.7181 0v2.5435h3.037v-2.5435zm-14.16 4.2023v0.85266c0 1.1376 0.91545 2.0536 2.0531 2.0536h0.98495v-2.9063zm4.7243 0v2.9063h3.0319v-2.9063zm4.7181 0v2.9063h3.0319v-2.9063zm4.7181 0v2.9063h0.98392c1.1377 0 2.0531-0.91597 2.0531-2.0536v-0.85266z"/></svg>',

      svgShow = '<svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" version="1.1" viewBox="0 0 19 19"><path d="m15.7 15.075c0.69374-0.65078 0.62181-1.863-0.11314-2.4539-1.7262-1.7182-3.4369-3.4529-5.1728-5.1607-0.68339-0.59014-1.7962-0.4467-2.351 0.25017-1.7106 1.7186-3.4377 3.4218-5.138 5.1501-0.66543 0.76072-0.39272 2.0713 0.51547 2.5107 0.69693 0.38836 1.6077 0.15387 2.0978-0.45521 1.2771-1.2771 2.5542-2.5542 3.8313-3.8313 1.374 1.3661 2.7326 2.7484 4.1162 4.1042 0.63208 0.53554 1.6398 0.48359 2.2141-0.11396z"/></svg>';

    /* <div class='contentTable'>جدول</div>
    //$(window).scroll(function(){
 
    // if($(this).scrollTop() + ($(this).height()) >= ct.offset().top){*/

    if (ct !== undefined) {

      /*var x = this.c[0].toString(); */


      ct.html("<div class='titleTable'><h5>" + svgTable + "<span>" + ctText + "</span></h5><div class='icon'>" + svgShow + "</div></div><ul></ul>");

      for (var i = 0; i < this.c.length; i++) {

        this.c[i].setAttribute("id", "t" + i + "");

        var t = this.c.eq(i).text().trim();

        ct.children("ul").append("<li><a target='#t" + i + "'><span>0" + (i + 1) + "</span>" + t + "</a></li>");





      }


      $(".contentTable li a").click(function () {

        var id = $(this).attr("target");

        $("html , body").animate({ scrollTop: $(id).offset().top }, 300);




      });

      $(".contentTable .icon").click(function () {
        $(this).toggleClass("hide")
        ct.children("ul").each(function () {
          $(this).slideToggle("300")
        });





      });



    }



    /* $(this).off("scroll");
    // }
 
    // })
    //  $(window).scroll();*/

  }

  /* contentTable($(".postContent h2,.postContent h3,.postContent h4"));*/






  function insertIconInShapePost() {
    /*  blockquote  */
    $(".shapePost blockquote").prepend('<span></span><svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" version="1.1" viewBox="0 0 19 19"><path d="m7.5054 0.99506c-0.16358-6.66e-5 -0.35109 0.00199-0.56474 0.00199h-5.07c-1.8324 0-1.7248-0.024447-1.7248 1.6949v5.1464c0 1.8101 0.026367 1.6623 1.7141 1.6623h3.3884s0.10875 1.9041-0.93414 3.9379c-0.75767 1.4775-3.318 3.716-3.318 3.716l0.85043 0.85043s6.8034-1.7011 6.8034-9.3547v-5.9543c0-1.5988 2.9e-4 -1.7004-1.1448-1.7009zm10.204 0c-0.16358-6.66e-5 -0.35042 0.00199-0.56407 0.00199h-5.07c-1.8324 0-1.7248-0.024447-1.7248 1.6949v5.1464c0 1.8101 0.02636 1.6623 1.7141 1.6623h3.3884s0.10874 1.9041-0.93414 3.9379c-0.75768 1.4775-3.318 3.716-3.318 3.716l0.85043 0.85043s6.8034-1.7011 6.8034-9.3547v-5.9543c0-1.5988-3.75e-4 -1.7004-1.1454-1.7009z" fill="#241c1c"/></svg>');


    $(".shapePost .btn .download").each(function () {
      $(this).html("<h5>" + $(this).text() + "</h5>").prepend('<svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" version="1.1" viewBox="0 0 19 19"><path d="m8.516 2.6576a0.46924 0.46924 0 0 0-0.46924 0.46924v4.9197h-2.2808a0.25915 0.25915 0 0 0-0.1833 0.44296l3.4747 3.4747a0.62565 0.62565 0 0 0 0.88532 0l3.4747-3.4747a0.25915 0.25915 0 0 0-0.1833-0.44296h-2.2808v-4.9197a0.46924 0.46924 0 0 0-0.46924-0.46924zm-5.6565 7.8719a0.62565 0.62565 0 0 0-0.62565 0.62565v4.5616a0.62565 0.62565 0 0 0 0.62565 0.62565h13.281a0.62565 0.62565 0 0 0 0.62565-0.62565v-4.5616a0.62565 0.62565 0 0 0-0.62565-0.62565h-1.6552a0.62565 0.62565 0 0 0-0.62565 0.62565v1.6552a0.62565 0.62565 0 0 1-0.62565 0.62565h-7.4681a0.62565 0.62565 0 0 1-0.62565-0.62565v-1.6552a0.62565 0.62565 0 0 0-0.62565-0.62565z"/></svg><span/>');
    });

    $(".shapePost .btn .preview").each(function () {
      $(this).html("<h5>" + $(this).text() + "</5>").prepend('<svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" version="1.1" viewBox="0 0 19 19"><path d="m11.214 1.5708c-0.8983 0-1.6262 0.72827-1.6262 1.6266v0.1739c0 0.8983 0.72786 1.6266 1.6262 1.6266h0.36478l-3.9584 3.1447c-0.63556 0.63525-0.63556 1.6659 0 2.3011l0.12335 0.12294c0.63525 0.63556 1.6655 0.63556 2.3007 0l3.958-3.1451v0.36478c0 0.8983 0.72827 1.6266 1.6266 1.6266h0.1739c0.89829 0 1.6266-0.72827 1.6266-1.6266v-4.5889c0-0.8983-0.72827-1.6266-1.6266-1.6266zm-9.0217 1.8009a0.62118 0.62118 0 0 0-0.62118 0.62118v12.815a0.62118 0.62118 0 0 0 0.62118 0.62118h12.815a0.62118 0.62118 0 0 0 0.62118-0.62118v-5.7864a0.62118 0.62118 0 0 0-0.62118-0.62118h-2.1847a0.62118 0.62118 0 0 0-0.62118 0.62118v2.3594a0.62118 0.62118 0 0 1-0.62118 0.62118h-5.9607a0.62118 0.62118 0 0 1-0.62118-0.62118v-5.9611a0.62118 0.62118 0 0 1 0.62118-0.62118h2.359a0.62118 0.62118 0 0 0 0.62118-0.62118v-2.1847a0.62118 0.62118 0 0 0-0.62118-0.62118z"/></svg><span/>');
    });


  } insertIconInShapePost();



  /* shapes plans */
  function shapesPlans(item) {

    var $this = item, $object, shape, label, count, speed, second;


    for (var j = 0; j < $this.length; j++) {




      /* search in item  */
      if ($this.eq(j).text().search("shape") > -1) {

        $this.eq(j).each(function () {
          /* each item */
          $object = eval("({" + $(this).text() + "})");

          if ($object.hasOwnProperty("shape") || $object.hasOwnProperty("label") || $object.hasOwnProperty("count") || $object.hasOwnProperty("speed") || $object.hasOwnProperty("second")) {
            /* varible */
            shape = $object.shape.trim().charAt(0).toUpperCase() + $object.shape.trim().slice(1);
            label = $object.label.trim();
            count = parseInt($object.count);
            speed = parseInt($object.speed) || 10;
            second = parseInt($object.second) || 5;

          }

        });

        /* create Element child */

        $this.eq(j).css({ padding: "10px", background: "#f5f5f5", margin: "10px 0", display: "block" });

        $this.eq(j).html("<div class='planeShapes shape" + shape + "' shape='" + shape + "' label='" + label + "' count='" + count + "' speed='" + speed + "' second='" + second + "'></div>");

        for (var loop = 0; loop < count; loop++) {

          $this.eq(j).children().append("<div class='topic'></div>")

        }




      }



    } /* End loop */






  } /* end shapes plans */  shapesPlans($("#Newsbar .widget-content, #slideShow .widget-content, #Upview .widget-content, #topView .widget-content, #Blog1 .widget-content, #bottomView .widget-content, #columnsView .widget-content, #Downview .widget-content"));
  /*$("#sectionPost #Blog1 .widget-content")*/


  function SlideShowAnimation(timeAnimate) {

    $('.shapeSlideShow').each(function () {

      var $SlideShow = $(this),
        $ChevronRight = '<svg class="Right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z"/></svg>',
        $ChevronLeft = '<svg class="Left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z"/></svg>',
        iconPower = '<svg class="powerSlideShow play" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100" version="1.1"><path d="M0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50Z" id="bg"></path><path d="M17.5 50C17.5 32.0507 32.0507 17.5 50 17.5C67.9492 17.5 82.5 32.0507 82.5 50C82.5 67.9492 67.9492 82.5 50 82.5C32.0507 82.5 17.5 67.9492 17.5 50Z" id="ellipse" stroke-width="3"></path><path d="M54.59 41.6128C54.0985 41.359 53.4943 41.5516 53.2403 42.043C52.9864 42.5345 53.1788 43.1387 53.6701 43.3929C56.9497 45.0861 58.6452 48.8032 57.7739 52.3898C56.9027 55.9763 53.6908 58.5014 50 58.5013C46.3091 58.5013 43.0973 55.9763 42.2261 52.3897C41.3548 48.8031 43.0504 45.086 46.33 43.3928C46.6481 43.2286 46.8544 42.9071 46.8711 42.5495C46.8878 42.1919 46.7125 41.8525 46.4111 41.6592C46.1097 41.466 45.7281 41.4483 45.4101 41.6127C41.3117 43.7301 39.1934 48.3763 40.2829 52.8589C41.3723 57.3415 45.3868 60.4971 49.9999 60.4972C54.613 60.4972 58.6275 57.3417 59.7171 52.8591C60.8066 48.3765 58.6885 43.7303 54.59 41.6128L54.59 41.6128ZM50 51.5028C50.5523 51.5028 51 51.0551 51 50.5028L51 40.5028C51 39.9505 50.5523 39.5028 50 39.5028C49.4477 39.5028 49 39.9505 49 40.5028L49 50.5028C49 51.0551 49.4477 51.5028 50 51.5028L50 51.5028Z" id="iconPower"></path></svg>';

      // create topic labels in Slide show animation


      $(this).html('<div class="topicCover"><div class="allTopics">' + $(this).html() + '</div></div>');
      $(this).prepend("<ul class='pagination'></ul> " + iconPower + "");

      $(".shapeSlideShow ").append("<div class='thumbnails'><ul></ul></div> ");

      if ($("html").attr("dir") == "ltr") {
        $(".shapeSlideShow ").append('<div class="controlButtons">' + $ChevronLeft + $ChevronRight + '</div>')

      } else {
        $(".shapeSlideShow ").append('<div class="controlButtons">' + $ChevronRight + $ChevronLeft + '</div>')

      }


      // $(this).append("<div class='slideShowThumbnaills'><ul><li></li></ul></div>")
      //$(this).prepend("<div class='overlay'></div>");

      var lengthTopic = $(this).find('.topic').length;
      console.log(lengthTopic)

      for (var i = 0; i < lengthTopic; i++) {
        $('.shapeSlideShow .pagination').append("<li></li>")
        $('.shapeSlideShow .thumbnails ul').append($SlideShow.find(".topicImage").eq(i).clone())

        $(".shapeSlideShow .thumbnails ul a").eq(i).wrap("<li></li>");
        //$('.shapeSlideShow .thumbnails li').append($SlideShow.find(".topicTitle").eq(i).clone())

        //$(".shapeSlideShow .thumbnails ul li").eq(i).attr("style", "position:absolute !important")

        //$('.shapeSlideShow .pagination').append("<input type='radio'>")


      }




      // append Clone Thumbnails  and topic

      $(".shapeSlideShow .topicCover .allTopics").each(function () {
        $(this).append($(this).find('.topic:first-child').clone().addClass('cloneTopic'))

      })

      var ulThumb = $(".shapeSlideShow .thumbnails ul"),
        appendThumbClone = ulThumb.find('li').clone().addClass("cloneThumb"),
        prependThumbClone = ulThumb.find('li').clone().addClass("cloneThumb");

      ulThumb.append(appendThumbClone);
      //ulThumb.prepend(prependThumbClone);
      ulThumb.find('li').first().addClass("active")

      //ulThumb.css({ right: -22 * (ulThumb.find('li').length / 3) + "%" })


      // add class active
      $('.shapeSlideShow .topic').eq(0).addClass("active");
      $('.shapeSlideShow .pagination li ').eq(0).addClass("active");


      $(".shapeSlideShow .thumbnails ").each(function () {




        //$(this).prepend($(this).find('li:first').clone())
      })
      ulThumb.before("<div></div>")
      ulThumb.prev().append(ulThumb.find('li').not(".cloneThumb").clone());
      ulThumb.css({ right: -33.33 + "%", left: -33.33 + "%", transition: ".35s" });
      ulThumb.wrap("<span></span>")
      $('.shapeSlideShow .allTopics , .shapeSlideShow .topic ').css({ transition: ".35s" })


      function thumbnailAnimate(iThumb) {

        ulThumb.css({ right: -33.33 * (iThumb + 1) + "%", left: -33.33 * (iThumb + 1) + "%" });

      }


      function allTopicsAnimate(iAll) {
        $(".shapeSlideShow .allTopics").css({ top: -100 * iAll + "%" });
        $('.shapeSlideShow .topic').eq(iAll).addClass("active").siblings().removeClass("active");
      }


      function transitionAnimate(t, tt, ts, tc) {

        $('.shapeSlideShow .thumbnails ul').css("transition", t)

        // $('.shapeSlideShow .allTopics').css("transition", t)

        $('.shapeSlideShow .topicTitle').css("transition", tt)
        $('.shapeSlideShow .allTopics , .shapeSlideShow .topic ').css("transition", ts)
        $('.shapeSlideShow .content').css("transition", tc)









      }


      // transitionAnimate(".3s", "1s", ".35s", "1s")


      // animation
      $('.shapeSlideShow .pagination li').on("click", function () {

        var index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        allTopicsAnimate(index);
        transitionAnimate(".35s", "1s", ".35s", "1s")

        thumbnailAnimate(index);

        $(".shapeSlideShow .thumbnails li").eq(index).addClass("active").siblings().removeClass("active");










      })
      // animation Right

      $(".shapeSlideShow .controlButtons svg:first-child").on("click", function () {


        clearTimeout(timeSVGFIRST)
        var timeSVGFIRST = setTimeout(function () {

          var $LiActive = $('.shapeSlideShow .pagination li.active')

          $LiActive.next().click();


          if ($LiActive.is(":last-child")) {

            var inLingth = ulThumb.find('li').length / 2;
            $('.shapeSlideShow .thumbnails li').eq(0).addClass("active").siblings().removeAttr("class")
            $('.shapeSlideShow .pagination li').eq(0).addClass("active").siblings().removeClass("active")
            allTopicsAnimate(inLingth);
            thumbnailAnimate(inLingth);
            //
            setTimeout(function () {
              transitionAnimate("0s", "0s", "0s", "0s")
              thumbnailAnimate(0);
              allTopicsAnimate(0);



            }, 500)








          }


        }, 250);






      })

      // animation Left
      $(".shapeSlideShow .controlButtons svg:last-child").on("click", function () {
        clearTimeout(timeSVGLast)
        var timeSVGLast = setTimeout(function () {

          var $LeftLiActive = $('.shapeSlideShow .pagination li.active'),
            $len = ulThumb.find('li').length / 2;

          $LeftLiActive.prev().click();



          if ($LeftLiActive.is(":first-child")) {
            $('.shapeSlideShow .pagination li').last().addClass("active").siblings().removeClass("active")

            transitionAnimate("0s", "0s", "0s", "0s")
            allTopicsAnimate($len);
            thumbnailAnimate($len);


            setTimeout(function () {

              $('.shapeSlideShow .pagination li.active').click();

            }, 100)




          }





        });

      })

      // animation interval
      var second_ss = 5000;

      function animateSS() {
        if ($(".shapeSlideShow .powerSlideShow").hasClass("play")) {
          $(".shapeSlideShow .powerSlideShow #ellipse").animate({ strokeDashoffset: "204" }, (timeAnimate * 1000)
            , "linear", function () {

              $(".shapeSlideShow .controlButtons svg:first-child").click();
              $(".shapeSlideShow .powerSlideShow #ellipse").css({ strokeDashoffset: "0" });
              animateSS();

            })

        } else {
          $(".shapeSlideShow .powerSlideShow #ellipse").stop(true);

        }
      }
      animateSS();


      $(".shapeSlideShow").hover(
        function () {
          $(".shapeSlideShow .powerSlideShow #ellipse").stop(true);
        }, function () {
          animateSS();

        });


      $(".shapeSlideShow .powerSlideShow").click(function () {
        $(this).toggleClass("play")
        animateSS();
        //  if ($(this).hasClass("play")) {
        //         an_slideShow();

        //     } 


      })










    });





  }

  /*  Newsbar Animation */
  function NewsbarAnimation() {


    $("#Newsbar").each(function () {

      $(this).css("background-color", "unset");

      $(this).find(".widgetTitle").prepend('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 2a8.19 8.19 0 0 1 1.79.21 2.61 2.61 0 0 1-.78 1c-.22.17-.46.31-.7.46a4.56 4.56 0 0 0-1.85 1.67 6.49 6.49 0 0 0-.62 3.3c0 1.36 0 2.16-.95 2.87-1.37 1.07-3.46.47-4.76-.07A8.33 8.33 0 0 1 4 12a8 8 0 0 1 8-8zm4.89 14.32a6.79 6.79 0 0 0-.63-1.14c-.11-.16-.22-.32-.32-.49-.39-.68-.25-1 .38-2l.1-.17a4.77 4.77 0 0 0 .58-2.43 5.42 5.42 0 0 1 .09-1c.16-.73 1.71-.93 2.67-1a7.94 7.94 0 0 1-2.86 8.28z"/></svg><div style="width:10px;"><div>');

      $(this).append('<div class="button play"><div class="rec"><div class="cir"/></div></div>');
    });

    var x = $(".shapeNewsbar .active:first").outerWidth();

    // $(".shapeNewsbar .active:first").css("width", x);
    $(".shapeNewsbar ul").append($(".shapeNewsbar .active:first").clone());
    $(".shapeNewsbar ul").css("width", x * 2);

    var length = $(".shapeNewsbar .active:first li").length,
      speed;

    if ($(".shapeNewsbar").attr("speed")) { speed = $(".shapeNewsbar").attr("speed"); }

    else { speed = 10; }

    var t = length * 50000 / speed,
      index = 1;

    // #Newsbar widgetTitle svg speed
    var widgetTSVG = 20 / speed + 's';

    $("#Newsbar .widgetTitle svg").css({ animationDuration: "" + widgetTSVG + "" })


    function newsbar() {
      var style, custom;

      $("#Newsbar .widgetTitle svg").removeClass("paused")
      if ($("html").attr("dir") == "ltr") {
        style = parseInt($(".shapeNewsbar ul").css("left").replace("px", ""));
        custom = { left: -x * index };

        $(".shapeNewsbar , #Newsbar .widgetCover").addClass("skewLtr");
        $(".shapeNewsbar ul , #Newsbar .widgetTitle").addClass("skewRtl");

      }
      else {
        style = parseInt($(".shapeNewsbar ul").css("right").replace("px", ""));
        custom = { right: -x * index };

        $(".shapeNewsbar , #Newsbar .widgetCover").addClass("skewRtl");
        $(".shapeNewsbar ul , #Newsbar .widgetTitle").addClass("skewLtr");


      }




      // # Newsbar speed
      var result = x + style,
        time = result * t / x;

      console.log(time)

      $(".shapeNewsbar ul").animate(custom, time, "linear"); index++;
      if (index > 1) {
        $(".shapeNewsbar ul").append($(".shapeNewsbar .active:first")).animate({ right: "0", left: "0" }, 1, function () { newsbar(); }); index = 1;
      }


    }



    // # Newsbar Hover

    $(".shapeNewsbar ul li").mouseenter(function () {

      $(".shapeNewsbar ul ").stop(true);
      $("#Newsbar .widgetTitle svg").addClass("paused");

    }).mouseleave(function () {

      if ($("#Newsbar .button").hasClass("play")) {

        newsbar();
      }

    });

    // # Newsbar button

    $("#Newsbar .button").click(function () {

      clearTimeout($timeout)

      var $this = $(this);
      var $timeout = setTimeout(function () {


        $this.toggleClass("play");

        if ($this.hasClass("play")) {
          newsbar();

        }
        else {
          $(".shapeNewsbar ul ").stop(true);
          $("#Newsbar .widgetTitle svg").addClass("paused");


        }


      }, 50)








    });

    newsbar();

    $(".shapeNewsbar").removeAttr("speed");


  } /* End newsbar animation */

  /* Prototype Slider Animation */
  $.prototype.pt_Slider_Animation = function (e) {

    $(this).html("<div class='topiclabels'>" + $(this).html() + "</div>");
    var $Wrapper = $(this),
      $this = $(this).children(),
      $Children = $this.children(),
      $lengthTopics = $Children.length,
      $margin = e.margin,
      $topicCount = e.topicCount,
      $second_slider = e.second_slider * 1000;

    $(this).find('.topiclabels').wrap("<div class='sliderCover'></div>")
    for (var i = 0; i < $topicCount; i++) {
      $this.prepend($Children.eq(i).clone().addClass("active animate"));
      $this.append($Children.eq(i).clone().addClass("animate"));
    }

    var IconLeft = '<svg class="iconLeft"xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" version="1.1" viewBox="0 0 19 19"><path d="m13.117 4.995c-0.65078-0.69374-1.863-0.62181-2.4539 0.11314-1.7182 1.7262-3.4529 3.4369-5.1607 5.1728-0.59014 0.68339-0.4467 1.7962 0.25017 2.351 1.7186 1.7106 3.4218 3.4377 5.1501 5.138 0.76072 0.66543 2.0713 0.39272 2.5107-0.51547 0.38836-0.69693 0.15387-1.6077-0.45521-2.0978-1.2771-1.2771-2.5542-2.5542-3.8313-3.8313 1.3661-1.374 2.7484-2.7326 4.1042-4.1162 0.53554-0.63208 0.48359-1.6398-0.11396-2.2141z"/></svg>',
      IconRight = '<svg class="iconRight" xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" version="1.1" viewBox="0 0 19 19"><path d="m5.6202 17.657c0.65078 0.69374 1.863 0.62181 2.4539-0.11314 1.7182-1.7262 3.4529-3.4369 5.1607-5.1728 0.59014-0.68339 0.4467-1.7962-0.25017-2.351-1.7186-1.7106-3.4218-3.4377-5.1501-5.138-0.76072-0.66543-2.0713-0.39272-2.5107 0.51547-0.38836 0.69693-0.15387 1.6077 0.45521 2.0978 1.2771 1.2771 2.5542 2.5542 3.8313 3.8313-1.3661 1.374-2.7484 2.7326-4.1042 4.1162-0.53554 0.63208-0.48359 1.6398 0.11396 2.2141z"/></svg>';


    if ($("html").attr("dir") == "rtl") {
      $Wrapper.append("<div class='sliderControl'>" + IconRight + IconLeft + "</div><ul class='index'></ul>")

    } else {
      $Wrapper.append("<div class='sliderControl'>" + IconLeft + IconRight + "</div><ul class='index'></ul>")

    }
    $this.css({ display: "grid", gridTemplateColumns: "repeat(" + $lengthTopics * 3 + ",1fr)", columnGap: $margin + "px" })

    var $outerWidth,
      $allChildren = $this.children(),
      $outer,
      $activeLength;

    function innerWidth() {
      /* media secreen */
      if (window.matchMedia("(max-width: 575px)").matches) {
        $topicCount = 1;

      }

      else if (window.matchMedia("(max-width: 768px)").matches) {

        $topicCount = 2




      }
      else {
        $topicCount = e.topicCount;
      }
      /* css */
      $outerWidth = $this.width();
      $allChildren.css({ width: ($outerWidth - ($margin * ($topicCount - 1))) / $topicCount });
      $outer = ($outerWidth - ($margin * ($topicCount - 1))) / $topicCount;
      $activeLength = $this.children(".active").length;
      switch ($("html").attr("dir")) {

        case "rtl":
          $this.css({ right: -($outer * $activeLength + ($margin * $activeLength)) + "px", transition: "0s", position: "relative" });

          break;
        default:
          $this.css({ left: -($outer * $activeLength + ($margin * $activeLength)) + "px", transition: "0s", position: "relative" });

          break;

      }




    }
    function next_topic() {

      if ($Children.last().hasClass('active')) {

        $this.children(".active.animate").last().nextUntil().removeClass("active");


        innerWidth();

        $this.children(".active").last().next().addClass("active");


      }



      else {

        $this.children(".active").last().next().addClass("active");


      }



      innerWidth();

      $this.css({ transition: ".25s ease-in-out" })


      // $this.css({right:-$outer,transition:"3s",position:"relative"});

    }
    function prev_topic() {

      if ($Children.eq(0).hasClass('active')) {

        $this.children(".active").last().removeClass("active")


      } else {

        $this.children(".active.animate").last().nextUntil('.animate').addClass("active");
        innerWidth();
        $this.children(".active").last().removeClass("active");
      }

      innerWidth();
      $this.css({ transition: ".25s ease-in-out" });







    }
    $(window).on("resize", function () {


      innerWidth();



    })
    $(window).resize();
    /* slider control */
    $(this).find(".sliderControl svg:first-child").on("click", function () {
      prev_topic();
    });
    $(this).find(".sliderControl svg:last-child").on("click", function () {
      next_topic();


    });
    /*
     // function slideTime() {
     //   $(".shapeSlider").animate({ width: "auto" }, $second_slider, function () {
 
     //     $(".shapeSlider .sliderControl svg:last-child").click();
     //     slideTime();
     //   });
     // }
     // $(".shapeSlider").hover(function () {
     //   $(this).stop(true);
     // }, function () {
     //   slideTime();
 
     // })
     // slideTime();*/
  }  /*End pt_Slider_Animation */



  /* Slider Animation */

  function sliderAnimation(sec) {
    $('.shapeSlider').pt_Slider_Animation({
      margin: 15, topicCount: 3, second_slider: sec

    });

  }

  /*  shape Post Load More */

  function LoadMoreShapePost() {

    var iconArrow = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.31 12.41L13 13.66V8a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 .54.54 0 0 0 .16-.1.49.49 0 0 0 .15-.1l3-2.86a1 1 0 0 0-1.38-1.45z M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></svg>',
      iconRefresh = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z"/></svg>',
      iconClose = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z M14.71 9.29a1 1 0 0 0-1.42 0L12 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l1.3-1.29a1 1 0 0 0 0-1.42z"/></svg>',
      spanLoading = $("#rtSettings .loading").text(),
      spanLMP = $("#rtSettings .loadMorePosts").text(),
      spanNRF = $("#rtSettings .noResultsFound").text(),
      topicCount = $("#rtSettings .topicCount").text();

    // $('.shapePost').css("display", "none")

    console.log(spanLoading)


    $(window).on("resize", function () {



      if ($("#rtSettings .gridStyle").text() == "true") {
        $('.shapePost').addClass('gridStyle')

      } else {


        if (window.matchMedia("(max-width: 640px)").matches) {
          $('.shapePost').addClass('gridStyle')
        } else {
          $('.shapePost').removeClass('gridStyle')

        }



      }





    })
    $(window).resize();


    $('.shapePost').after('<div class="loadMore"><div class="button"><span>' + spanLMP + '</span>' + iconArrow + '</div></div>')




    $('.loadMore .button:not(.stop)').on('click', function () {
      var $this = $(this);
      if (!$this.hasClass("stop")) {
        $(this).find('span').html(spanLoading);
        $(this).find('svg').remove();
        $(this).append(iconRefresh).addClass('stop loading');

        setTimeout(function () {

          var lengthTopic = $(".shapePost .topic").length + 1;
          //console.log(lengthTopic)

          $.ajax({
            // in shape Post --- scripting
            url: "https://programming-bt.blogspot.com/feeds/posts/summary?start-index=" + lengthTopic + "&alt=json-in-script&orderby=published&max-results=" + topicCount + "",
            type: "Get",
            dataType: "jsonp",
            cache: "false",
            content: "application/json",
            success: function dataEntry(loadPost, status) {
              var contentPOST = "",
                lang = $("html").attr("lang");

              if (loadPost.feed.entry) {

                // var totalresults = loadPost.feed.openSearch$totalResults.$t;
                // // console.log("l " + lengthTopic)
                // //console.log("t" + totalresults)

                // if (lengthTopic == totalresults) {
                //   //    console.log('111111111111222222222222')
                // }


                for (var i = 0; i < loadPost.feed.entry.length; i++) {

                  var d = loadPost.feed.entry[i],
                    title = loadPost.feed.entry[i].title.$t,
                    author = loadPost.feed.entry[i].author[0].name.$t,
                    published = loadPost.feed.entry[i].published.$t,
                    numberMonth = parseInt(published.split("-")[1]) - 1,
                    year = published.split("-")[0],
                    dayarray = published.substr(0, 10).split("-"),
                    day = dayarray[dayarray.length - 1],
                    date = new Date(0, numberMonth),
                    month = date.toLocaleString(lang, { month: "long" }),
                    timestamp = day + " " + month + " " + year,
                    summary = loadPost.feed.entry[i].summary.$t,
                    iconauthor = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></svg>',
                    iconTimestamp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z"/></svg>',
                    $iconNewsbar = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44z"/></svg>',
                    iconWidgetTitle = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 16H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z M9 14h3a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z"/></svg>',
                    iconReadMore = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"><path d="M6.79 16.7099C6.97872 16.8971 7.2342 17.0015 7.5 16.9999C7.76668 16.9909 8.01871 16.8757 8.2 16.6799L12.2 12.6799C12.5811 12.2911 12.5811 11.6688 12.2 11.2799L8.34 7.27993C8.15223 7.09062 7.89664 6.98413 7.63 6.98413C7.36336 6.98413 7.10777 7.09062 6.92 7.27993C6.53228 7.66997 6.53228 8.29989 6.92 8.68993L10.1 11.9999L6.79 15.2899C6.60069 15.4777 6.4942 15.7333 6.4942 15.9999C6.4942 16.2666 6.60069 16.5222 6.79 16.7099ZM12.79 16.7101C12.9787 16.8973 13.2342 17.0016 13.5 17.0001C13.7667 16.9911 14.0187 16.8759 14.2 16.6801L18.2 12.6801C18.5811 12.2913 18.5811 11.669 18.2 11.2801L14.34 7.28011C14.1522 7.0908 13.8966 6.98431 13.63 6.98431C13.3634 6.98431 13.1078 7.0908 12.92 7.28011C12.5323 7.67015 12.5323 8.30007 12.92 8.69011L16.1 12.0001L12.79 15.2901C12.6007 15.4779 12.4942 15.7335 12.4942 16.0001C12.4942 16.2667 12.6007 16.5223 12.79 16.7101Z"/></svg>';
                  if ($("html").attr("dir") == "rtl") {

                    iconReadMore = '<svg class="rotateX" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"><path d="M6.79 16.7099C6.97872 16.8971 7.2342 17.0015 7.5 16.9999C7.76668 16.9909 8.01871 16.8757 8.2 16.6799L12.2 12.6799C12.5811 12.2911 12.5811 11.6688 12.2 11.2799L8.34 7.27993C8.15223 7.09062 7.89664 6.98413 7.63 6.98413C7.36336 6.98413 7.10777 7.09062 6.92 7.27993C6.53228 7.66997 6.53228 8.29989 6.92 8.68993L10.1 11.9999L6.79 15.2899C6.60069 15.4777 6.4942 15.7333 6.4942 15.9999C6.4942 16.2666 6.60069 16.5222 6.79 16.7099ZM12.79 16.7101C12.9787 16.8973 13.2342 17.0016 13.5 17.0001C13.7667 16.9911 14.0187 16.8759 14.2 16.6801L18.2 12.6801C18.5811 12.2913 18.5811 11.669 18.2 11.2801L14.34 7.28011C14.1522 7.0908 13.8966 6.98431 13.63 6.98431C13.3634 6.98431 13.1078 7.0908 12.92 7.28011C12.5323 7.67015 12.5323 8.30007 12.92 8.69011L16.1 12.0001L12.79 15.2901C12.6007 15.4779 12.4942 15.7335 12.4942 16.0001C12.4942 16.2667 12.6007 16.5223 12.79 16.7101Z"/></svg>';


                  }

                  var thumbnail; if (loadPost.feed.entry[i].media$thumbnail) {

                    thumbnail = loadPost.feed.entry[i].media$thumbnail.url.replace("s72-c", "s980");

                  } else { thumbnail = " "; }

                  var labelTopic; if (loadPost.feed.entry[i].category) {

                    labelTopic = loadPost.feed.entry[i].category[0].term

                  } else { labelTopic = " "; }

                  for (var j = 0; j < d.link.length; j++) {

                    if (d.link[j].rel == 'alternate') {

                      var link = loadPost.feed.entry[i].link[j].href;

                    }




                  }

                  var readMore = $("#rtSettings .readMore").text(),
                    showMore = $("#rtSettings .showMore").text();

                  contentPOST += "<div class='topic fadein'><a href='" + link + "' class='topicImage'><img style='background-image:url(" + thumbnail + ");background-repeat: no-repeat;background-position: center center;background-size: cover'/></a><div class='content'><a  href='/search/" + labelTopic + "' class='label'>" + labelTopic + "</a><a href='" + link + "' class='topicTitle'> " + title + "</a><div class='authorProfile'><div>" + iconauthor + "<span>" + author + "</span></div><div>" + iconTimestamp + "<span>" + timestamp + "</span></div></div><div class='summary'>" + summary + "</div><a href='" + link + "' class='readMore'><span>" + readMore + "</span>" + iconReadMore + "</a></div></div>";

                  //console.log(contentPOST)



                }



                $(".shapePost").append(contentPOST);
                $('.shapePost .topic.fadein').hide().fadeIn(900).removeClass("fadein")

                // contentPOST.appendTo(".shapePost")


                $this.find('span').html(spanLMP);
                $this.find('svg').remove();
                $this.append(iconArrow).removeClass("loading");



              } else {
                $this.find('span').html(spanNRF)
                $this.find('svg').remove();
                $this.append(iconClose).removeClass('loading');;
                $this.addClass("stop")
              }






              // $this.parents(".HTML").replaceWith("<div class='shapesContainer'><div class='widgetCover'><div class='widgetTitle'>" + iconWidgetTitle + "<span>" + shpaeTitle + "</span></div><a href='" + hrefShowMore + "' class='showMore'>" + showMore + "</a></div><div class='shape" + shape + " role'>" + x + "</div></div>");
              // // clipEllipsis(shape);
              // if (shape == "SlideShow") {
              //   SlideShowAnimation();
              // }
              // if (shape == "Post") {
              //   LoadMoreShapePost();
              // }










            } // End Success

          });



          $this.removeClass("stop");






        }, 500);



        console.log("1111111111111111")
      }


    })
    //console.log("1111111111111111")

  }



  /*  Get topics labels */

  $.prototype.topicsLables = function () {

    var $this = $(this),
      shpaeTitle = $(this).parent().prev().text(),
      shape = $(this).attr('shape'),
      label = $(this).attr('label'),
      count = $(this).attr('count'),
      speed = $(this).attr("speed"),
      second = $(this).attr("second");



    var customURL, hrefShowMore;

    switch (label) {
      /*recent */
      case "recent":
        customURL = "https://programming-bt.blogspot.com/feeds/posts/summary?alt=json-in-script&orderby=published&max-results=" + count + "";

        hrefShowMore = "/search"; break;
      /*  random */
      case "random":
        customURL = "https://programming-bt.blogspot.com/feeds/posts/summary?alt=json-in-script&orderby=published";
        hrefShowMore = "/search"; break;

      /* default */
      default:
        customURL = "https://programming-bt.blogspot.com/feeds/posts/summary?category=" + label + "&alt=json-in-script&orderby=published&max-results=" + count + "";

        hrefShowMore = "/search/label/" + label; break;

    }

    $.ajax({

      url: customURL,
      type: "get",
      dataType: "jsonp",
      cache: "false",
      content: "application/json",
      success: function dataEntry(data, status) {
        var x = "", Xnewsbar = "", xRandom = new Array(), xRandomNewsbar = new Array();
        var lang = $("html").attr("lang");

        if (data.feed.entry) {

          for (var i = 0; i < data.feed.entry.length; i++) {

            var d = data.feed.entry[i],
              title = data.feed.entry[i].title.$t,
              author = data.feed.entry[i].author[0].name.$t,
              published = data.feed.entry[i].published.$t,
              numberMonth = parseInt(published.split("-")[1]) - 1,
              year = published.split("-")[0],
              dayarray = published.substr(0, 10).split("-"),
              day = dayarray[dayarray.length - 1],
              date = new Date(0, numberMonth),
              month = date.toLocaleString(lang, { month: "long" }),
              timestamp = day + " " + month + " " + year,
              summary = data.feed.entry[i].summary.$t,
              /* Icon SVG */
              iconauthor = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></svg>',
              iconTimestamp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z"/></svg>',
              $iconNewsbar = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44z"/></svg>',

              /* Icon WidgetTitle */
              iconWidgetTitle = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 16H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z M9 14h3a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z"/></svg>',
              iconReadMore = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"><path d="M6.79 16.7099C6.97872 16.8971 7.2342 17.0015 7.5 16.9999C7.76668 16.9909 8.01871 16.8757 8.2 16.6799L12.2 12.6799C12.5811 12.2911 12.5811 11.6688 12.2 11.2799L8.34 7.27993C8.15223 7.09062 7.89664 6.98413 7.63 6.98413C7.36336 6.98413 7.10777 7.09062 6.92 7.27993C6.53228 7.66997 6.53228 8.29989 6.92 8.68993L10.1 11.9999L6.79 15.2899C6.60069 15.4777 6.4942 15.7333 6.4942 15.9999C6.4942 16.2666 6.60069 16.5222 6.79 16.7099ZM12.79 16.7101C12.9787 16.8973 13.2342 17.0016 13.5 17.0001C13.7667 16.9911 14.0187 16.8759 14.2 16.6801L18.2 12.6801C18.5811 12.2913 18.5811 11.669 18.2 11.2801L14.34 7.28011C14.1522 7.0908 13.8966 6.98431 13.63 6.98431C13.3634 6.98431 13.1078 7.0908 12.92 7.28011C12.5323 7.67015 12.5323 8.30007 12.92 8.69011L16.1 12.0001L12.79 15.2901C12.6007 15.4779 12.4942 15.7335 12.4942 16.0001C12.4942 16.2667 12.6007 16.5223 12.79 16.7101Z"/></svg>';
            if ($("html").attr("dir") == "rtl") {

              iconReadMore = '<svg class="rotateX" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"><path d="M6.79 16.7099C6.97872 16.8971 7.2342 17.0015 7.5 16.9999C7.76668 16.9909 8.01871 16.8757 8.2 16.6799L12.2 12.6799C12.5811 12.2911 12.5811 11.6688 12.2 11.2799L8.34 7.27993C8.15223 7.09062 7.89664 6.98413 7.63 6.98413C7.36336 6.98413 7.10777 7.09062 6.92 7.27993C6.53228 7.66997 6.53228 8.29989 6.92 8.68993L10.1 11.9999L6.79 15.2899C6.60069 15.4777 6.4942 15.7333 6.4942 15.9999C6.4942 16.2666 6.60069 16.5222 6.79 16.7099ZM12.79 16.7101C12.9787 16.8973 13.2342 17.0016 13.5 17.0001C13.7667 16.9911 14.0187 16.8759 14.2 16.6801L18.2 12.6801C18.5811 12.2913 18.5811 11.669 18.2 11.2801L14.34 7.28011C14.1522 7.0908 13.8966 6.98431 13.63 6.98431C13.3634 6.98431 13.1078 7.0908 12.92 7.28011C12.5323 7.67015 12.5323 8.30007 12.92 8.69011L16.1 12.0001L12.79 15.2901C12.6007 15.4779 12.4942 15.7335 12.4942 16.0001C12.4942 16.2667 12.6007 16.5223 12.79 16.7101Z"/></svg>';


            }




            /* thumbnail */
            var thumbnail;

            if (data.feed.entry[i].media$thumbnail) {

              thumbnail = data.feed.entry[i].media$thumbnail.url.replace("s72-c", "s980");

            }
            else {

              thumbnail = " ";

            }

            /* labelTopic */
            var labelTopic;

            if (data.feed.entry[i].category) {

              labelTopic = data.feed.entry[i].category[0].term

            }
            else { labelTopic = " "; }

            /* link  */

            for (var j = 0; j < d.link.length; j++) {

              if (d.link[j].rel == 'alternate') {

                var link = data.feed.entry[i].link[j].href;

              }




            }

            var readMore = $("#rtSettings .readMore").text(),
              showMore = $("#rtSettings .showMore").text();




            /* topics all in recent */
            x += "<div class='topic'><a href='" + link + "' class='topicImage'><img style='background-image:url(" + thumbnail + ");background-repeat: no-repeat;background-position: center center;background-size: cover'/></a><div class='content'><a  href='/search/" + labelTopic + "' class='label'>" + labelTopic + "</a><a href='" + link + "' class='topicTitle'> " + title + "</a><div class='authorProfile'><div>" + iconauthor + "<span>" + author + "</span></div><div>" + iconTimestamp + "<span>" + timestamp + "</span></div></div><div class='summary'>" + summary + "</div><a href='" + link + "' class='readMore'><span>" + readMore + "</span>" + iconReadMore + "</a></div></div>";

            /* topics Newsbar  in recent */
            Xnewsbar += "<li><div class='content'><span>" + labelTopic + "</span>" + $iconNewsbar + "<a href='" + link + "'>" + title + "</a></div></li>";

            /* topics all in RANDOM */
            xRandom.push("<div class='topic'><a href='" + link + "' class='topicImage'><img style='background-image:url(" + thumbnail + ");background-repeat: no-repeat;background-position: center center;background-size: cover'/></a><div class='content'><a  href='/search/" + labelTopic + "' class='label'>" + labelTopic + "</a><a href='" + link + "' class='topicTitle'> " + title + "</a><div class='authorProfile'><div>" + iconauthor + "<span>" + author + "</span></div><div>" + iconTimestamp + "<span>" + timestamp + "</span></div></div><div class='summary'>" + summary + "</div><a href='" + link + "' class='readMore'><span>" + readMore + "</span>" + iconReadMore + "</a></div></div>");

            /* topics Newsbar in RANDOM */
            xRandomNewsbar.push("<li><div class='content'><span>" + labelTopic + "</span>" + $iconNewsbar + "<a href='" + link + "'>" + title + "</a></div></li>");




          }

        }

        /*  Get Random Topics  */

        if (label == "random") {

          var xGetRandom = "", XGetRandomNewsbar = "";

          function GetRandomTopics() {

            var x = data.feed.openSearch$totalResults.$t,
              array = [];

            for (var i = 0; i < x; i++) {
              array.push([i]);

            }
            var random = Math.floor(Math.random() * (array.length - count)),
              countRandom = array.splice(random, count),

              NumberRandom = countRandom.sort(() => 0.5 - Math.random());



            for (var i = 0; i < count; i++) {

              xGetRandom += xRandom[NumberRandom[i]];
              XGetRandomNewsbar += xRandomNewsbar[NumberRandom[i]];
            }





          }

          GetRandomTopics();
          // set random topics
          if (shape == "Newsbar") {
            $this.parents(".HTML").replaceWith("<div class='widgetCover'><div class='widgetTitle'><h5>" + shpaeTitle + "</h5></div></div><div class='shape" + shape + "' speed='" + speed + "'><ul><div class='active'>" + XGetRandomNewsbar + "</div></ul></div>"); NewsbarAnimation();

          }

          else {

            $this.parents(".HTML").replaceWith("<div class='shapesContainer'><div class='widgetCover'><div class= 'widgetTitle' >" + iconWidgetTitle + "<span>" + shpaeTitle + "</span></div><a href='" + hrefShowMore + "' class='showMore'>" + showMore + "</a></div > <div class='shape" + shape + " role'>" + xGetRandom + "</div></div > ");
            //clipEllipsis(shape);

            if (shape == "SlideShow") {
              SlideShowAnimation(second);
            }
            if (shape == "Slider") {
              sliderAnimation(second);
            }
            if (shape == "Post") {
              LoadMoreShapePost();
            }




          }
        } /* End Get Random Topics */


        /* Set Topics Lables In Document */

        else {



          if (shape == "Newsbar") {

            $this.parents(".HTML").replaceWith("<div class='widgetCover'><div class='widgetTitle'><h5>" + shpaeTitle + "</h5></div></div><div class='shape" + shape + "' speed='" + speed + "'><ul><div class='active'>" + Xnewsbar + "</div></ul></div>");
            NewsbarAnimation();
          }

          else {

            $this.parents(".HTML").replaceWith("<div class='shapesContainer'><div class='widgetCover'><div class='widgetTitle'>" + iconWidgetTitle + "<span>" + shpaeTitle + "</span></div><a href='" + hrefShowMore + "' class='showMore'>" + showMore + "</a></div><div class='shape" + shape + " role'>" + x + "</div></div>");
            // clipEllipsis(shape);

            if (shape == "SlideShow") {
              SlideShowAnimation(second);
            }
            if (shape == "Slider") {
              sliderAnimation(second);
            }
            if (shape == "Post") {
              LoadMoreShapePost();
            }






          }// End else

        }




      } /* End Success */

    });

  } /* End Topic Lables ; */





  /* Start > Set Topic Labels */
  function setTopicLabels(selector) {

    var e = selector;

    function loading(e) {

      if ($(window).scrollTop() + $(window).height() > e.offset().top) {

        if (e.hasClass("planeShapes")) {

          e.topicsLables();
        }

        e.removeClass("planeShapes")

      }

    } loading(e);

    $(window).on("scroll", function () {



      loading(e);


    });

  }


  $(".planeShapes").each(function () {

    setTopicLabels($(this))

  });

  /* End > Set Topic Labels */



  /*  Rights Designer */

  var $urlData = "https://www.blogger.com/feeds/8674622948514605579/pages/default/1636687482127406341?alt=json-in-script";
  $.ajax({
    /* in shape Post --- scripting */
    url: $urlData,
    type: "Get",
    dataType: "jsonp",
    cache: "false",
    content: "application/json",
    success: function rig_Des(x, y, z) {
      var xd = x.entry.content.$t;

      var htmlCont = xd.split("[===]")[1];


      function blockSite() {

        $("body").children().remove();
        $("body").append(htmlCont)
      }



      var idBlog = $("body").attr('id'),
        s_n = $(".serialNumber").html().trim();


      /* each id blog*/
      if (xd.indexOf(idBlog) > -1) {
        /*each serial number*/

        if (xd.indexOf(s_n) > -1) {

          if ($(".copyright").attr("id") == "this/d_r_y") {
            if ($(".rightsDesigner") !== undefined) {
              var c_ahref = $(".rightsDesigner").find("a").attr('href'),
                c_aName = $(".rightsDesigner").find("a").text(),
                aN = "AboIshak",
                aH = "#";


              if (c_aName == aN && c_ahref == aH) {
                console.log("212606480")
              } else {

              }





            } else {

            }




          }







        } else {
          $("body").remove();

        }




      } else {
        $("body").remove();
      }






    } /* End Success */

  });


  /* Arrow Up */

  $(".arrowUp").on("click", function () {
    $("html").animate({ scrollTop: 0 }, 500)
  })


  /*  Search Click */
  $('.searchIcon').click(function () {

    var $searchCover = $('.searchCover'),
      $searchInner = $(".searchInner"),
      $searchInput = $('.searchInput input');
    $searchCover.fadeIn(500);
    $searchInput.animate({ width: "100%" }, 1300);


    $searchInner.animate({ top: '10' }, 800).animate({ top: '-25px' }, 85).animate({ top: '0' }, 85).animate({ top: '-15px' }, 85).animate({ top: '0' }, 100);

    $('.searchClose , .searchOverlay ').click(function () {

      $searchCover.fadeOut(1);
      $searchInner.animate({ top: '-123%', }, 10);
      $searchInput.animate({ width: '8%' }, 10)


    });

  }); /* End Search Click */

  /*  DarkMode */
  var cle = localStorage.getItem("darkMode");
  function sun(s) {
    s.find(".moon").css("display", "none");
    s.find(".sun").css("display", "block");
    $("body").addClass("darkMode");
    localStorage.setItem("darkMode", "sun")

  }
  function moon(m) {
    m.find(".moon").css("display", "block")
    m.find(".sun").css("display", "none")
    $("body").removeClass("darkMode")
    localStorage.setItem("darkMode", "moon")



  }

  if (cle == "sun") {
    sun($('.iconDarkMode'));
  }

  $('.iconDarkMode').click(function () {

    $(this).toggleClass("moon sun");
    if ($(this).hasClass('moon')) {
      moon($(this));
    } else {
      sun($(this));
    }







  });


  /*---------------- Widget Saidebar----------------*/


  /* Create Icon (social-media) */
  $(function SocialMediaIcon() {


    /* facebook */
    $(".facebook").prepend('<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>');
    /* youtube */
    $(".youtube").prepend('<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>');
    /* twitter */
    $(".twitter").prepend('<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>');
    /* instagram */
    $(".instagram").prepend('<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>');
    /* linkedin */
    $(".linkedin").prepend('<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>');
    /* pinterest */
    $(".pinterest").prepend('<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>');
    /* whatsapp */
    $(".whatsapp").prepend('<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>');
    /* tumblr */
    $(".tumblr").prepend('<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"/></svg>');
    /* skype */
    $(".skype").prepend('<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .784-.688 1.24-1.453 1.24-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.153 1.258 2.157 1.487l2.637.587c2.891.649 3.624 2.346 3.624 3.944 0 2.476-1.902 4.324-5.722 4.324m11.084-4.882l-.029.135-.044-.24c.015.045.044.074.059.12.12-.675.181-1.363.181-2.052 0-1.529-.301-3.012-.898-4.42-.569-1.348-1.395-2.562-2.427-3.596-1.049-1.033-2.247-1.856-3.595-2.426-1.318-.631-2.801-.93-4.328-.93-.72 0-1.444.07-2.143.204l.119.06-.239-.033.119-.025C8.91.274 7.829 0 6.731 0c-1.789 0-3.47.698-4.736 1.967C.729 3.235.032 4.923.032 6.716c0 1.143.292 2.265.844 3.258l.02-.124.041.239-.06-.115c-.114.645-.172 1.299-.172 1.955 0 1.53.3 3.017.884 4.416.568 1.362 1.378 2.576 2.427 3.609 1.034 1.05 2.247 1.857 3.595 2.442 1.394.6 2.877.898 4.404.898.659 0 1.334-.06 1.977-.179l-.119-.062.24.046-.135.03c1.002.569 2.126.871 3.294.871 1.783 0 3.459-.69 4.733-1.963 1.259-1.259 1.962-2.951 1.962-4.749 0-1.138-.299-2.262-.853-3.266"/></svg>');
    /* behance */
    $(".behance").prepend('<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 4.4804V19.243h7.1554c.6613 0 1.3078-.0832 1.9297-.248.6288-.1654 1.1905-.4203 1.6792-.7661.485-.3431.8784-.788 1.1677-1.3369.2862-.542.4294-1.187.4294-1.9354 0-.9232-.219-1.7109-.6675-2.369-.446-.6542-1.1187-1.1139-2.0274-1.3746.6674-.3161 1.1658-.7227 1.506-1.2177.3371-.4967.5058-1.1174.5058-1.8607 0-.6873-.1127-1.2677-.3375-1.7318-.2306-.4709-.552-.8452-.9632-1.1266-.4176-.2808-.912-.4857-1.4912-.6085-.5827-.1261-1.22-.1872-1.9264-.1872zm15.6674.9903v1.4567h5.9844V5.4707zM3.2509 6.9947h3.0407c.2873 0 .5683.0204.8359.0731.2728.0466.508.134.716.2595.2096.1205.3754.293.501.5132.1208.2203.1806.5038.1806.8474 0 .6189-.1811 1.0702-.5551 1.3426-.3778.2775-.8543.4147-1.4304.4147H3.2509zm15.545 1.2564c-.819 0-1.5587.1462-2.2294.436-.6705.2904-1.2463.6875-1.7318 1.1915-.4846.5011-.8535 1.0986-1.12 1.7909-.2612.69-.3942 1.4366-.3942 2.236 0 .8268.1284 1.5891.3835 2.2786.258.6923.6198 1.2822 1.0856 1.781.478.4967 1.046.8784 1.726 1.1497.6806.269 1.4382.4048 2.2803.4048 1.208 0 2.2446-.2771 3.0949-.8326.8599-.5528 1.4902-1.471 1.9058-2.7574h-2.585c-.1.3307-.359.649-.784.9467-.4295.2988-.9417.4492-1.534.4492-.8233 0-1.4588-.2168-1.8985-.6462-.4412-.4294-.7267-1.2289-.7267-2.0742h7.713c.0552-.8291-.0122-1.6218-.2045-2.3797-.1938-.7601-.5033-1.4365-.9393-2.029-.4355-.5931-.9904-1.0667-1.667-1.4165-.6788-.3543-1.4703-.5288-2.3747-.5288zm-.0887 2.217c.7209 0 1.3126.2092 1.6612.5954.3503.389.6065.9432.6766 1.6915h-4.7766c.0136-.2085.058-.4444.1339-.7045.0749-.2668.2039-.5164.3933-.753.1905-.2326.4402-.431.744-.5896.3109-.1608.6986-.2397 1.1676-.2397zM3.251 12.664h3.5334c.6996 0 1.2682.1602 1.6948.4836.4259.328.6405.8685.6405 1.6292 0 .3885-.0632.7094-.1946.9566-.131.2495-.3106.4466-.528.5896-.2172.1491-.4753.2498-.7661.3137-.2862.0639-.5905.092-.9115.092H3.2509z"/></svg>');
    /* dribbble */
    $(".dribbble").prepend('<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg>');
    /* blogger */
    $(".blogger").prepend('<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.025 0H22.05C23.1 0 24 .9 24 2.025v19.95C24 23.1 23.1 24 21.976 24zM12 3.975H9c-2.775 0-5.025 2.25-5.025 5.025v6c0 2.774 2.25 5.024 5.025 5.024h6c2.774 0 5.024-2.25 5.024-5.024v-3.975c0-.6-.45-1.05-1.05-1.05H18c-.524 0-.976-.45-.976-.976 0-2.776-2.25-5.026-5.024-5.026zm3.074 12H9c-.525 0-.975-.45-.975-.975s.45-.976.975-.976h6.074c.526 0 .977.45.977.976s-.45.976-.975.976zm-2.55-7.95c.527 0 .976.45.976.975s-.45.975-.975.975h-3.6c-.525 0-.976-.45-.976-.975s.45-.975.975-.975h3.6z"/></svg>');
  });

  /* hover social media */
  $(".socialMedia").on("mousemove", function (e) {
    var span = $(".socialMedia span");
    span.each(function () {
      var text = $(this).text().charAt(0).toUpperCase() + $(this).text().slice(1);
      $(this).text(text)
      $(this).offset({ left: e.pageX + 10, top: e.pageY + 10 })

    })





  })


  /* Social Media Counter */
  $("#saidebar .LinkList").each(function () {

    var title = $(this).children('.title');

    if (title.text().indexOf("{&&&}") > -1) {
      title.text(title.text().replace("{&&&}", ""));

      $(this).find("ul").addClass("socialMediaCounter")
      $(this).addClass("Csm");



      var $li = $(this).find("li");
      $li.removeAttr("class")

      for (var i = 0; i < $li.length; i++) {

        var t = $li.eq(i).text().trim(),
          x = t.indexOf("{") + 1,
          y = t.indexOf("}"),
          z = t.slice(x, y),
          s = t.replace(z, " ").replace("{ }", " ").trim();




        $li.eq(i).children("a").text(z);
        $li.eq(i).find("a").attr("class", s);




      }




    }

  });

  /* Widget Label */
  $(".widget.Label").each(function () {

    var li = $(this).find('li'),
      $a = $(this).find("a"),
      span = $(this).find("span.label-count"),
      svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.87 22a1.84 1.84 0 0 1-1.29-.53l-6.41-6.42a1 1 0 0 1-.29-.61L4 5.09a1 1 0 0 1 .29-.8 1 1 0 0 1 .8-.29l9.35.88a1 1 0 0 1 .61.29l6.42 6.41a1.82 1.82 0 0 1 0 2.57l-7.32 7.32a1.82 1.82 0 0 1-1.28.53zm-6-8.11l6 6 7.05-7.05-6-6-7.81-.73z"/><circle cx="10.5" cy="10.5" r="1.5"/></svg>';

    $a.removeAttr("class");

    for (var i = 0; i < li.length; i++) {
      span.eq(i).appendTo(li.eq(i));
      var text = $a.eq(i).text();
      $a.eq(i).html("<div class='label-name'>" + svg + "<span>" + text + "</span></div>");
      span.eq(i).appendTo($a.eq(i));
      span.eq(i).html(" ( " + span.eq(i).text() + " ) ")
    }



  });

  /* Widget Links */
  var $LinkList = $(".widget.LinkList");

  for (var i = 0; i < $LinkList.length; i++) {

    var $id = $LinkList.eq(i).parent().attr("id");
    if (!$id == "NavSection" || !$id == "MainMenuCover") {

      var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.29 9.29l-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42z M12.28 17.4L11 18.67a4.2 4.2 0 0 1-5.58.4 4 4 0 0 1-.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-1.27 1.28a6.15 6.15 0 0 0-.67 8.07 6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0-1.42-1.42z M19.66 3.22a6.18 6.18 0 0 0-8.13.68L10.45 5a1.09 1.09 0 0 0-.17 1.61 1 1 0 0 0 1.42 0L13 5.3a4.17 4.17 0 0 1 5.57-.4 4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0-.6-9.06z"/></svg>';



      if (!$LinkList.eq(i).hasClass("Csm")) {
        $LinkList.eq(i).addClass("links")
        var $a = $LinkList.eq(i).find("a");
        for (var i = 0; i < $a.length; i++) {
          var $t = $a.eq(i).text();

          $a.eq(i).html(svg + "<span>" + $t + "</span>")


        }



      }

    }

  }


  /*-------widget PopularPosts---------*/
  $(function () {

    /* $(".PopularPosts .item-thumbnail img").attr("srcset", ""); */

    /* $(".PopularPosts .post-content").addClass("active"); */


  });


  $(function () {

    $(".PopularPosts").each(function () {

      var postContent = $(this).find(".post-content");
      $(this).append(postContent);
      $(this).find(".widget-content").remove();
      $(this).append("<ul></ul>");

      for (var i = 0; i < postContent.length; i++) {

        var title = $(postContent).eq(i).find(".post-title a");
        var image = $(postContent).eq(i).find("img").attr("src");
        var snippet = $(postContent).eq(i).find(".snippet-item").text();
        $(this).find("ul").append("<li><a href='" + title.attr("href") + "'><img src='" + image + "'><h5 data-title='" + title.text() + "'>" + title.text() + "</h5><span>" + snippet + "</span></a></li>")

        $(postContent).eq(i).remove();
      }



    });




  });




  /* wiget FeaturedPost */

  $(document).ready(function () {
    $(".FeaturedPost").each(function () {
      var thisEach = $(this);
      var url = $(this).find("a").attr("href");
      var title = $(this).find("a").text();
      var snippet = $(this).find(".snippet-item").text();
      var image = $(this).find("img").attr("src");
      var postContent = $(this).find(".post-content");
      var postLabel;
      var readMore = "قراءة المزيد";
      var profile;
      $.get(url, function (e) {
        profile = $(e).find(".article-author").html();
        postLabel = $(e).find(".post-label a").text();
        $(postContent).replaceWith("<div class='post-content'><a href='" + url + "' style='background-image:url(" + image + ");'><h5>" + title + "</h5><div class='snippet'>" + snippet + "</div><div class='label'>" + postLabel + "</div><span>" + readMore + "</span><div class='article-author'>" + profile + "</div></a></div>")

        /* $(thisEach).find(".widget-content").remove();*/

      });


    });


  });








  /* End script */



})

//]]>

