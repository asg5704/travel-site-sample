import $ from 'jquery';
import waypoints from 'waypoints/lib/noframework.waypoints';
class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercent = offset;
    this.hideInitial();
    this.createWaypoints();
  }

  hideInitial() {
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass('reveal-item--is-visible');
        },
        offset: that.offsetPercent
      });
    });
  }
}

export default RevealOnScroll;