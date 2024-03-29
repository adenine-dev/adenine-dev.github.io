(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var canvas = document.getElementById("canvas");
  var c = canvas.getContext("2d");
  var roads = [];

  var Road = /*#__PURE__*/function () {
    function Road(x1, y1, a, t, ms, o, c) {
      _classCallCheck(this, Road);

      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x1;
      this.y2 = y1;
      this.a = a;
      this.t = t;
      this.ms = ms;
      this.s = 0;
      this.o = o;
      this.c = c;
    }

    _createClass(Road, [{
      key: "update",
      value: function update() {
        if (this.ms >= this.s) {
          this.s += Math.max(2, (this.ms - this.s) * 0.01);
          this.x2 = Math.cos(this.a) * this.s + this.x1;
          this.y2 = Math.sin(this.a) * this.s + this.y1;

          if (this.t >= 2 && roads.length < 512 && Math.random() > 0.975) {
            var a = this.a + Math.PI / 2 * (Math.random() > 0.5 ? -1 : 1);
            roads.push(new Road(this.x2 + Math.cos(a) * this.t / 2, this.y2 + Math.sin(a) * this.t / 2, a + (this.t / 2 <= 10 ? (Math.random() - 0.5) * 0.4 * Math.PI : 0), this.t / 2, this.ms / 1.5, Math.max(this.o * 0.7, 0.4), (this.c - 40) % 360));
          }
        }

        c.beginPath();
        c.moveTo(this.x1, this.y1);
        c.lineTo(this.x2, this.y2);
        c.closePath();
        c.strokeStyle = "hsla(" + this.c + ", 100%, 90%, " + this.o + ")";
        c.lineWidth = this.t;
        c.stroke();
      }
    }]);

    return Road;
  }();

  var gradient = c.createLinearGradient(0, 0, window.innerWidth * 0.08, 0);
  gradient.addColorStop(0.1, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = roads.length - 1; i >= 0; i--) {
      roads[i].update();
    }

    c.globalAlpha = 1;
    c.fillStyle = gradient;
    c.fillRect(0, 0, canvas.width * 0.2, canvas.height);
    requestAnimationFrame(draw);
  }

  function start() {
    canvas.width = window.innerWidth * 0.4;
    canvas.height = window.innerHeight;
    roads = [];
    roads.push(new Road(canvas.width + 10, canvas.height + 10, Math.atan2(-canvas.height, -canvas.width), 60, Math.sqrt(canvas.height * canvas.height + canvas.width * canvas.width) + 20, 1, 266));
    draw();
  }

  if (window.innerWidth >= 600) {
    start();
  }

  window.onresize = function (e) {
    c.clearRect(0, 0, canvas.width, canvas.height);
    start();
  };

}());
