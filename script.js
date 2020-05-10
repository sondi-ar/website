__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var web_animations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web-animations-js */ "./node_modules/web-animations-js/web-animations.min.js");
/* harmony import */ var web_animations_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web_animations_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var muuri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! muuri */ "./node_modules/muuri/dist/muuri.js");
/* harmony import */ var muuri__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(muuri__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_4__);






lazySizes.init();

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#grid').length) {
    var grid = new muuri__WEBPACK_IMPORTED_MODULE_3___default.a('#grid', {
      visibleStyles: {
        opacity: '1'
      },
      hiddenStyles: {
        opacity: '0'
      },
      layoutOnInit: false
    });
    var fitlerAll = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.filter[data-tag*=all]');
    var filterFieldValue = '';

    if (window.location.hash) {
      filterFieldValue = window.location.hash.substring(1);
      grid.filter('[data-tag*=' + filterFieldValue + ']');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('button[data-tag=' + filterFieldValue + ']').addClass('active');
    }

    // filter
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.filter'), function(index, value) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).on('click', function() {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('active')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(fitlerAll).addClass('active');
          filterFieldValue = '';
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[class*=filter].active').removeClass('active');
          filterFieldValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-tag');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
        }

        if (filterFieldValue === 'all') filterFieldValue = '';
        if (filterFieldValue) {
          window.location.hash = filterFieldValue;
        } else {
          history.replaceState(null, null, ' ');
        }

        filter();
      });
    });

    function filter() {
      grid.filter(function(item) {
        var element = item.getElement();
        var isFilterMatch = !filterFieldValue
          ? true
          : (
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(element)
                .attr('data-tag')
                .toLowerCase() || ''
            ).indexOf(filterFieldValue) > -1;
        return isFilterMatch;
      });
    }

    // layoutOnInit
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('img').each(function() {
      var update = function() {
        grid.refreshItems().layout();
      };
      this.addEventListener('load', update, true);
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#slider').length) {
    slickInit(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#slider'));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function() {
      slickInit(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#slider'));
    });

    function slickInit(element) {
      element.each(function() {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 960 && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('slick-initialized')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).slick({
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            focusOnSelect: true,
            lazyload: 'progressive'
          });
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() < 960 && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('slick-initialized')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).slick('unslick');
        }
      });
    }
  }

  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header').outerHeight();

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function() {
    var st = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && st > navbarHeight) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header').css('top', -navbarHeight);
    } else {
      if (st + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() < jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header').css('top', 0);
      }
    }
    lastScrollTop = st;
  });
});


//# sourceURL=webpack:///./assets/js/script.js?
