(function ($) {
  "use strict";

  var browserWindow = $(window);

  // :: 1.0 Preloader Active Code
  browserWindow.on("load", function () {
    $(".preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });

  // :: 2.0 Nav Active Code
  if ($.fn.classyNav) {
    $("#alazeaNav").classyNav();
  }

  // :: 3.0 Search Active Code
  if ($("#searchIcon").length) {
    $("#searchIcon").on("click", function () {
      $(".search-form").toggleClass("active");
    });
    $(".closeIcon").on("click", function () {
      $(".search-form").removeClass("active");
    });
  }

  // :: 4.0 Sliders Active Code
  if ($.fn.owlCarousel) {
    var welcomeSlide = $(".hero-post-slides");
    var testiSlides = $(".testimonials-slides");
    var portfolioSlides = $(".portfolio-slides");

    welcomeSlide.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      center: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
    });

    testiSlides.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 700,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
    });

    portfolioSlides.owlCarousel({
      items: 2,
      margin: 30,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: true,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 700,
      center: true,
    });
  }

  // :: 5.0 Masonary Gallery Active Code
  if ($.fn.imagesLoaded) {
    $(".alazea-portfolio").imagesLoaded(function () {
      // filter items on button click
      $(".portfolio-filter").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
          filter: filterValue,
        });
      });
      // init Isotope
      var $grid = $(".alazea-portfolio").isotope({
        itemSelector: ".single_portfolio_item",
        percentPosition: true,
        masonry: {
          columnWidth: ".single_portfolio_item",
        },
      });
    });
  }

  // :: 6.0 magnificPopup Active Code
  if ($.fn.magnificPopup) {
    $(".portfolio-img, .product-img").magnificPopup({
      gallery: {
        enabled: true,
      },
      type: "image",
      callbacks: {
        close: function () {
          $("body").removeClass("mfp-no-scroll");
        },
      },
    });
    $(".video-icon").magnificPopup({
      type: "iframe",
      callbacks: {
        close: function () {
          $("body").removeClass("mfp-no-scroll");
        },
      },
    });
  }

  // :: 7.0 Barfiller Active Code
  if ($.fn.barfiller) {
    $("#bar1").barfiller({
      tooltip: true,
      duration: 1000,
      barColor: "#70c745",
      animateOnResize: true,
    });
    $("#bar2").barfiller({
      tooltip: true,
      duration: 1000,
      barColor: "#70c745",
      animateOnResize: true,
    });
    $("#bar3").barfiller({
      tooltip: true,
      duration: 1000,
      barColor: "#70c745",
      animateOnResize: true,
    });
    $("#bar4").barfiller({
      tooltip: true,
      duration: 1000,
      barColor: "#70c745",
      animateOnResize: true,
    });
  }

  // :: 8.0 ScrollUp Active Code
  if ($.fn.scrollUp) {
    browserWindow.scrollUp({
      scrollSpeed: 1500,
      scrollText: '<i class="fa fa-angle-up"></i>',
    });
  }

  // :: 9.0 CounterUp Active Code
  if ($.fn.counterUp) {
    $(".counter").counterUp({
      delay: 10,
      time: 2000,
    });
  }

  // :: 10.0 Sticky Active Code
  if ($.fn.sticky) {
    $(".alazea-main-menu").sticky({
      topSpacing: 0,
    });
  }

  // :: 11.0 Tooltip Active Code
  if ($.fn.tooltip) {
    $('[data-toggle="tooltip"]').tooltip();
  }

  // :: 12.0 Price Range Active Code
  $(".slider-range-price").each(function () {
    var min = jQuery(this).data("min");
    var max = jQuery(this).data("max");
    var unit = jQuery(this).data("unit");
    var value_min = jQuery(this).data("value-min");
    var value_max = jQuery(this).data("value-max");
    var label_result = jQuery(this).data("label-result");
    var t = $(this);
    $(this).slider({
      range: true,
      min: min,
      max: max,
      values: [value_min, value_max],
      slide: function (event, ui) {
        var result =
          label_result +
          " " +
          unit +
          ui.values[0] +
          " - " +
          unit +
          ui.values[1];
        t.closest(".slider-range").find(".range-price").html(result);
      },
    });
  });

  // :: 13.0 Shop Search, Filter & Sort Code
  if ($("body").hasClass("page-shop")) {
    var productCols = $(".shop-products-area .col-12.col-sm-6.col-lg-4");
    var noResults = $(
      '<div class="shop-search-empty" style="display:none;">No plants found for your selected filters. Try another combination.</div>',
    );
    $(".shop-products-area").prepend(noResults);

    var normalize = function (value) {
      return (value || "").toLowerCase().trim();
    };

    var parseCardMeta = function (card) {
      return {
        name: normalize(card.find(".product-info p").first().text()),
        keywords: normalize(card.attr("data-keywords") || ""),
        categories: normalize(card.attr("data-category") || "").split(","),
        price: Number(card.attr("data-price") || 0),
        popularity: Number(card.attr("data-popularity") || 0),
        rating: Number(card.attr("data-rating") || 0),
        newest: new Date(card.attr("data-new") || "2000-01-01").getTime(),
      };
    };

    var getActiveCategories = function () {
      var allChecked = $("#customCheck1").is(":checked");
      if (allChecked) {
        return [];
      }
      return $(".shop-category-filter:checked")
        .map(function () {
          return normalize($(this).val());
        })
        .get();
    };

    var updateResultText = function (count, query) {
      var activeCategories = getActiveCategories();
      var hasFilters = activeCategories.length > 0;
      var countText = "Showing " + count + " plant(s)";
      if (query) {
        countText += ' for "' + query + '"';
      }
      if (hasFilters) {
        countText += " in selected categories";
      }
      if (!query && !hasFilters && count === productCols.length) {
        countText = "Showing " + count + " curated plants";
      }
      $(".shop-page-count p").text(countText);
    };

    var sortVisibleCards = function () {
      var sortType = $("#shopSortSelect").val() || "popularity";
      var showCount = Number($("#shopShowCount").val() || productCols.length);
      var visibleCols = productCols.filter(":visible").get();

      visibleCols.sort(function (colA, colB) {
        var a = parseCardMeta($(colA).find(".single-product-area"));
        var b = parseCardMeta($(colB).find(".single-product-area"));

        if (sortType === "newest") {
          return b.newest - a.newest;
        }
        if (sortType === "price-asc") {
          return a.price - b.price;
        }
        if (sortType === "price-desc") {
          return b.price - a.price;
        }
        if (sortType === "name-asc") {
          return a.name.localeCompare(b.name);
        }
        if (sortType === "name-desc") {
          return b.name.localeCompare(a.name);
        }
        return b.popularity - a.popularity;
      });

      var row = $(".shop-products-area > .row").first();
      $.each(visibleCols, function (_, col) {
        row.append(col);
      });

      // Keep sorted order, then cap visible cards to selected page size.
      $(visibleCols).each(function (index, col) {
        if (index >= showCount) {
          $(col).hide();
        }
      });
    };

    var applyShopFilter = function (rawQuery) {
      var query = normalize(rawQuery);
      var activeCategories = getActiveCategories();
      var visibleCount = 0;

      productCols.each(function () {
        var col = $(this);
        var card = col.find(".single-product-area");
        var meta = parseCardMeta(card);
        var searchable = (meta.name + " " + meta.keywords).trim();

        var queryMatch = !query || searchable.indexOf(query) !== -1;
        var categoryMatch =
          activeCategories.length === 0 ||
          activeCategories.some(function (cat) {
            return meta.categories.indexOf(cat) !== -1;
          });

        var match = queryMatch && categoryMatch;
        col.toggle(match);
        if (match) {
          visibleCount += 1;
        }
      });

      noResults.toggle(visibleCount === 0);
      updateResultText(visibleCount, query);
      sortVisibleCards();
    };

    var params = new URLSearchParams(window.location.search);
    var query = params.get("search") || "";
    $("#search").val(query);

    $("#customCheck1").on("change", function () {
      if ($(this).is(":checked")) {
        $(".shop-category-filter").prop("checked", false);
      }
      applyShopFilter($("#search").val() || "");
    });

    $(".shop-category-filter").on("change", function () {
      if ($(this).is(":checked")) {
        $("#customCheck1").prop("checked", false);
      }
      if ($(".shop-category-filter:checked").length === 0) {
        $("#customCheck1").prop("checked", true);
      }
      applyShopFilter($("#search").val() || "");
    });

    $("#shopSortSelect, #shopShowCount").on("change", function () {
      applyShopFilter($("#search").val() || "");
    });

    $("#globalShopSearchForm").on("submit", function (event) {
      event.preventDefault();
      var value = $("#search").val() || "";
      var nextParams = new URLSearchParams(window.location.search);
      if (value.trim()) {
        nextParams.set("search", value.trim());
      } else {
        nextParams.delete("search");
      }
      var nextUrl = window.location.pathname;
      var qs = nextParams.toString();
      window.history.replaceState({}, "", qs ? nextUrl + "?" + qs : nextUrl);
      applyShopFilter(value);
    });

    applyShopFilter(query);
  }

  // :: 13.5 Contact Status Feedback
  var formStatusEl = $("#contactFormStatus");
  if (formStatusEl.length) {
    var searchParams = new URLSearchParams(window.location.search);
    var status = searchParams.get("status") || "";
    var statusMap = {
      success: {
        text: "Thanks for reaching out. Our team will contact you soon.",
        cls: "success",
      },
      invalid: {
        text: "Please fill all required fields with a valid email address.",
        cls: "error",
      },
      error: {
        text: "Unable to submit right now. Please call us directly at 8618834969.",
        cls: "error",
      },
    };

    if (statusMap[status]) {
      formStatusEl.text(statusMap[status].text);
      formStatusEl.addClass("visible " + statusMap[status].cls);
    }
  }

  // :: 14.0 prevent default a click
  $('a[href="#"]').on("click", function ($) {
    $.preventDefault();
  });

  // :: 15.0 wow Active Code
  if (browserWindow.width() > 767) {
    new WOW().init();
  }
})(jQuery);
