import $ from 'jquery';
import waypoints from 'waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';
class StickyHeader {
  constructor() {
    this.lazyImages = $('.lazyload');
    this.siteHeader = $('.site-header');
    this.headerTrigger = $('.large-hero__title');
    this.createHeaderWaypoint();
    this.pageSections = $('.page-section');
    this.headerLinks = $('.primary-nav a');
    this.createPageSectionWaypoints();
    this.addSmoothScroll();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function() {
      Waypoint.refreshAll();
    });
  }

  addSmoothScroll() {
    this.headerLinks.smoothScroll();
  }
  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTrigger[0],
      handler: function(direction) {
        if(direction == 'down') {
          that.siteHeader.addClass('site-header--dark');
        } else {
          that.siteHeader.removeClass('site-header--dark');
        }
      }
    });
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction === 'down') {
            var matchingLink = currentPageSection.getAttribute('data-match-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingLink).addClass('is-current-link');
          }
        },
        offset: '22%'
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction === 'up') {
            var matchingLink = currentPageSection.getAttribute('data-match-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingLink).addClass('is-current-link');
          }
        },
        offset: '-42%'
      });
    });
  }
}

export default StickyHeader;