(function(){"use strict";var __webpack_modules__={9195:function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){eval('\n;// CONCATENATED MODULE: external "lodash"\nvar external_lodash_namespaceObject = window["lodash"];\n;// CONCATENATED MODULE: external ["wp","domReady"]\nvar external_wp_domReady_namespaceObject = window["wp"]["domReady"];\nvar external_wp_domReady_default = /*#__PURE__*/__webpack_require__.n(external_wp_domReady_namespaceObject);\n;// CONCATENATED MODULE: ./src/blocks/frontend/slider/index.js\n/**\n * WordPress dependencies\n */\n\n\nconst SliderArrows = \'<div class="glide__arrows" data-glide-el="controls"><button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewbox="0 0 100 100" role="img" aria-hidden="true"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button><button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewbox="0 0 100 100" role="img" aria-hidden="true"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button></div>\';\nexternal_wp_domReady_default()(() => {\n  const sliders = document.querySelectorAll(\'.wp-block-themeisle-blocks-slider\');\n  sliders.forEach(slider => {\n    const track = slider.querySelector(\'.glide__slides\');\n    const options = (0,external_lodash_namespaceObject.omit)({ ...slider.dataset\n    }, [\'autoplay\', \'height\', \'hideArrows\']);\n    const autoplay = \'false\' === slider.dataset.autoplay ? false : \'true\' === slider.dataset.autoplay ? 2000 : slider.dataset.autoplay;\n    const hideArrows = \'true\' === slider.dataset.hideArrows ? true : false;\n\n    if (!hideArrows) {\n      const el = document.createElement(\'div\');\n      el.innerHTML = SliderArrows;\n      slider.appendChild(el.firstElementChild);\n    }\n\n    Object.keys(options).map(option => options[option] = Number(options[option]));\n    new window.Glide(`#${slider.id}`, {\n      type: \'carousel\',\n      keyboard: true,\n      autoplay,\n      hoverpause: true,\n      ...options,\n      breakpoints: {\n        800: {\n          perView: 1,\n          peek: 0,\n          gap: 0\n        }\n      }\n    }).mount();\n\n    if (track) {\n      track.style.height = slider.dataset.height;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTE5NS5qcyIsIm1hcHBpbmdzIjoiOztBQUFBLElBQUksK0JBQTRCLG9COztBQ0FoQyxJQUFJLG9DQUE0Qiw0Qjs7O0FDQWhDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNRSxZQUFZLEdBQUcsa2xCQUFyQjtBQUVBRCw4QkFBUSxDQUFFLE1BQU07QUFDZixRQUFNRSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMkIsbUNBQTNCLENBQWhCO0FBRUFGLEVBQUFBLE9BQU8sQ0FBQ0csT0FBUixDQUFpQkMsTUFBTSxJQUFJO0FBQzFCLFVBQU1DLEtBQUssR0FBR0QsTUFBTSxDQUFDRSxhQUFQLENBQXNCLGdCQUF0QixDQUFkO0FBQ0EsVUFBTUMsT0FBTyxHQUFHVix3Q0FBSSxDQUFDLEVBQUUsR0FBR08sTUFBTSxDQUFDSTtBQUFaLEtBQUQsRUFBd0IsQ0FBRSxVQUFGLEVBQWMsUUFBZCxFQUF3QixZQUF4QixDQUF4QixDQUFwQjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxZQUFZTCxNQUFNLENBQUNJLE9BQVAsQ0FBZUMsUUFBM0IsR0FBc0MsS0FBdEMsR0FBZ0QsV0FBV0wsTUFBTSxDQUFDSSxPQUFQLENBQWVDLFFBQTFCLEdBQXFDLElBQXJDLEdBQTRDTCxNQUFNLENBQUNJLE9BQVAsQ0FBZUMsUUFBNUg7QUFDQSxVQUFNQyxVQUFVLEdBQUcsV0FBV04sTUFBTSxDQUFDSSxPQUFQLENBQWVFLFVBQTFCLEdBQXVDLElBQXZDLEdBQThDLEtBQWpFOztBQUVBLFFBQUssQ0FBRUEsVUFBUCxFQUFvQjtBQUNuQixZQUFNQyxFQUFFLEdBQUdWLFFBQVEsQ0FBQ1csYUFBVCxDQUF3QixLQUF4QixDQUFYO0FBQ0FELE1BQUFBLEVBQUUsQ0FBQ0UsU0FBSCxHQUFlZCxZQUFmO0FBQ0FLLE1BQUFBLE1BQU0sQ0FBQ1UsV0FBUCxDQUFvQkgsRUFBRSxDQUFDSSxpQkFBdkI7QUFDQTs7QUFFREMsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQWFWLE9BQWIsRUFBdUJXLEdBQXZCLENBQTRCQyxNQUFNLElBQUlaLE9BQU8sQ0FBQ1ksTUFBRCxDQUFQLEdBQWtCQyxNQUFNLENBQUViLE9BQU8sQ0FBQ1ksTUFBRCxDQUFULENBQTlEO0FBRUEsUUFBSUUsTUFBTSxDQUFDQyxLQUFYLENBQW1CLElBQUlsQixNQUFNLENBQUNtQixFQUFJLEVBQWxDLEVBQXFDO0FBQ3BDQyxNQUFBQSxJQUFJLEVBQUUsVUFEOEI7QUFFcENDLE1BQUFBLFFBQVEsRUFBRSxJQUYwQjtBQUdwQ2hCLE1BQUFBLFFBSG9DO0FBSXBDaUIsTUFBQUEsVUFBVSxFQUFFLElBSndCO0FBS3BDLFNBQUduQixPQUxpQztBQU1wQ29CLE1BQUFBLFdBQVcsRUFBRTtBQUNaLGFBQUs7QUFDSkMsVUFBQUEsT0FBTyxFQUFFLENBREw7QUFFSkMsVUFBQUEsSUFBSSxFQUFFLENBRkY7QUFHSkMsVUFBQUEsR0FBRyxFQUFFO0FBSEQ7QUFETztBQU51QixLQUFyQyxFQWFHQyxLQWJIOztBQWVBLFFBQUsxQixLQUFMLEVBQWE7QUFDWkEsTUFBQUEsS0FBSyxDQUFDMkIsS0FBTixDQUFZQyxNQUFaLEdBQXFCN0IsTUFBTSxDQUFDSSxPQUFQLENBQWV5QixNQUFwQztBQUNBO0FBQ0QsR0FoQ0Q7QUFpQ0EsQ0FwQ08sQ0FBUiIsInNvdXJjZXMiOlsid2VicGFjazovL290dGVyLWJsb2Nrcy9leHRlcm5hbCB3aW5kb3cgXCJsb2Rhc2hcIj9mOGMyIiwid2VicGFjazovL290dGVyLWJsb2Nrcy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRvbVJlYWR5XCJdPzFkNmMiLCJ3ZWJwYWNrOi8vb3R0ZXItYmxvY2tzLy4vc3JjL2Jsb2Nrcy9mcm9udGVuZC9zbGlkZXIvaW5kZXguanM/ZTYzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHdpbmRvd1tcImxvZGFzaFwiXTsiLCJ2YXIgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHdpbmRvd1tcIndwXCJdW1wiZG9tUmVhZHlcIl07IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgZG9tUmVhZHkgZnJvbSAnQHdvcmRwcmVzcy9kb20tcmVhZHknO1xuXG5jb25zdCBTbGlkZXJBcnJvd3MgPSAnPGRpdiBjbGFzcz1cImdsaWRlX19hcnJvd3NcIiBkYXRhLWdsaWRlLWVsPVwiY29udHJvbHNcIj48YnV0dG9uIGNsYXNzPVwiZ2xpZGVfX2Fycm93IGdsaWRlX19hcnJvdy0tbGVmdFwiIGRhdGEtZ2xpZGUtZGlyPVwiPFwiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdib3g9XCIwIDAgMTAwIDEwMFwiIHJvbGU9XCJpbWdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48cGF0aCBkPVwiTSAxMCw1MCBMIDYwLDEwMCBMIDcwLDkwIEwgMzAsNTAgIEwgNzAsMTAgTCA2MCwwIFpcIj48L3BhdGg+PC9zdmc+PC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cImdsaWRlX19hcnJvdyBnbGlkZV9fYXJyb3ctLXJpZ2h0XCIgZGF0YS1nbGlkZS1kaXI9XCImZ3Q7XCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld2JveD1cIjAgMCAxMDAgMTAwXCIgcm9sZT1cImltZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxwYXRoIGQ9XCJNIDEwLDUwIEwgNjAsMTAwIEwgNzAsOTAgTCAzMCw1MCAgTCA3MCwxMCBMIDYwLDAgWlwiPjwvcGF0aD48L3N2Zz48L2J1dHRvbj48L2Rpdj4nO1xuXG5kb21SZWFkeSggKCkgPT4ge1xuXHRjb25zdCBzbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy53cC1ibG9jay10aGVtZWlzbGUtYmxvY2tzLXNsaWRlcicgKTtcblxuXHRzbGlkZXJzLmZvckVhY2goIHNsaWRlciA9PiB7XG5cdFx0Y29uc3QgdHJhY2sgPSBzbGlkZXIucXVlcnlTZWxlY3RvciggJy5nbGlkZV9fc2xpZGVzJyApO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBvbWl0KHsgLi4uc2xpZGVyLmRhdGFzZXQgfSwgWyAnYXV0b3BsYXknLCAnaGVpZ2h0JywgJ2hpZGVBcnJvd3MnIF0pO1xuXHRcdGNvbnN0IGF1dG9wbGF5ID0gJ2ZhbHNlJyA9PT0gc2xpZGVyLmRhdGFzZXQuYXV0b3BsYXkgPyBmYWxzZSA6ICggJ3RydWUnID09PSBzbGlkZXIuZGF0YXNldC5hdXRvcGxheSA/IDIwMDAgOiBzbGlkZXIuZGF0YXNldC5hdXRvcGxheSApO1xuXHRcdGNvbnN0IGhpZGVBcnJvd3MgPSAndHJ1ZScgPT09IHNsaWRlci5kYXRhc2V0LmhpZGVBcnJvd3MgPyB0cnVlIDogZmFsc2U7XG5cblx0XHRpZiAoICEgaGlkZUFycm93cyApIHtcblx0XHRcdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0XHRcdGVsLmlubmVySFRNTCA9IFNsaWRlckFycm93cztcblx0XHRcdHNsaWRlci5hcHBlbmRDaGlsZCggZWwuZmlyc3RFbGVtZW50Q2hpbGQgKTtcblx0XHR9XG5cblx0XHRPYmplY3Qua2V5cyggb3B0aW9ucyApLm1hcCggb3B0aW9uID0+IG9wdGlvbnNbb3B0aW9uXSA9IE51bWJlciggb3B0aW9uc1tvcHRpb25dKSApO1xuXG5cdFx0bmV3IHdpbmRvdy5HbGlkZSggYCMkeyBzbGlkZXIuaWQgfWAsIHtcblx0XHRcdHR5cGU6ICdjYXJvdXNlbCcsXG5cdFx0XHRrZXlib2FyZDogdHJ1ZSxcblx0XHRcdGF1dG9wbGF5LFxuXHRcdFx0aG92ZXJwYXVzZTogdHJ1ZSxcblx0XHRcdC4uLm9wdGlvbnMsXG5cdFx0XHRicmVha3BvaW50czoge1xuXHRcdFx0XHQ4MDA6IHtcblx0XHRcdFx0XHRwZXJWaWV3OiAxLFxuXHRcdFx0XHRcdHBlZWs6IDAsXG5cdFx0XHRcdFx0Z2FwOiAwXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KS5tb3VudCgpO1xuXG5cdFx0aWYgKCB0cmFjayApIHtcblx0XHRcdHRyYWNrLnN0eWxlLmhlaWdodCA9IHNsaWRlci5kYXRhc2V0LmhlaWdodDtcblx0XHR9XG5cdH0pO1xufSk7XG4iXSwibmFtZXMiOlsib21pdCIsImRvbVJlYWR5IiwiU2xpZGVyQXJyb3dzIiwic2xpZGVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzbGlkZXIiLCJ0cmFjayIsInF1ZXJ5U2VsZWN0b3IiLCJvcHRpb25zIiwiZGF0YXNldCIsImF1dG9wbGF5IiwiaGlkZUFycm93cyIsImVsIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwib3B0aW9uIiwiTnVtYmVyIiwid2luZG93IiwiR2xpZGUiLCJpZCIsInR5cGUiLCJrZXlib2FyZCIsImhvdmVycGF1c2UiLCJicmVha3BvaW50cyIsInBlclZpZXciLCJwZWVrIiwiZ2FwIiwibW91bnQiLCJzdHlsZSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9195\n')}},__webpack_require__={n:function(F){var Q=F&&F.__esModule?function(){return F.default}:function(){return F};return __webpack_require__.d(Q,{a:Q}),Q},d:function(F,Q){for(var d in Q)__webpack_require__.o(Q,d)&&!__webpack_require__.o(F,d)&&Object.defineProperty(F,d,{enumerable:!0,get:Q[d]})},o:function(F,Q){return Object.prototype.hasOwnProperty.call(F,Q)}},__webpack_exports__={};__webpack_modules__[9195](0,__webpack_exports__,__webpack_require__)})();