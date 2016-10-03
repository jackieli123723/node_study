import Vue from 'vue';
Vue.transition('bounce', {
  enterClass: 'bounceIn',
  leaveClass: 'bounceOut'
});

Vue.transition('flip', {
  enterClass: 'flipInX',
  leaveClass: 'flipOutY'
});
Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut'
});
Vue.transition('rotate', {
  enterClass: 'rotateIn',
  leaveClass: 'rotateOut'
});
Vue.transition('roll', {
  enterClass: 'rollIn',
  leaveClass: 'rollOut'
});
Vue.transition('zoom', {
  enterClass: 'zoomIn',
  leaveClass: 'zoomOut'
});
Vue.transition('slide', {
  enterClass: 'slideInUp',
  leaveClass: 'slideOutUp'
});
Vue.transition('pulse', {
  enterClass: 'pulse',
  leaveClass: ''
});
Vue.transition('flash', {
  enterClass: 'flash',
  leaveClass: ''
});
Vue.transition('rubberBand', {
  enterClass: 'rubberBand',
  leaveClass: ''
});

Vue.transition('shake', {
  enterClass: 'shake',
  leaveClass: ''
});
Vue.transition('headShake', {
  enterClass: 'headShake',
  leaveClass: ''
});
Vue.transition('swing', {
  enterClass: 'swing',
  leaveClass: ''
});
Vue.transition('tada', {
  enterClass: 'tada',
  leaveClass: ''
});
Vue.transition('wobble', {
  enterClass: 'wobble',
  leaveClass: ''
});
Vue.transition('jello', {
  enterClass: 'jello',
  leaveClass: ''
});
Vue.transition('hinge', {
  enterClass: 'hinge',
  leaveClass: ''
});
Vue.transition('lightSpeed', {
  enterClass: 'lightSpeedIn',
  leaveClass: 'lightSpeedOut'
});

Vue.transition('expand', {

  beforeEnter: function (el) {
    console.log('beforeEnter');
    el.textContent = 'beforeEnter'
  },
  enter: function (el) {
    console.log('enter');
    el.textContent = 'enter'
  },
  afterEnter: function (el) {
    console.log('afterEnter');
    el.textContent = 'afterEnter'
  },
  enterCancelled: function (el) {
    // handle cancellation
    console.log('enterCancelled');
  },

  beforeLeave: function (el) {
    console.log('beforeLeave');
    el.textContent = 'beforeLeave'
  },
  leave: function (el) {
    console.log('leave');
    el.textContent = 'leave'
  },
  afterLeave: function (el) {
    console.log('afterLeave');
    el.textContent = 'afterLeave'
  },
  leaveCancelled: function (el) {
    console.log('leaveCancelled');
    // handle cancellation
  }
});