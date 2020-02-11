function Stopwatch(elem) {
    var time = 0;
    var offset;
    var interval;
  
    function update() {
      if (this.isOn) {
        time += delta();
      }
      
      elem.textContent = timeFormatter(time);
    }
  
    function delta() {
      var now = Date.now();
      var timePassed = now - offset;
  
      offset = now;
  
      return timePassed;
    }
  
    function timeFormatter(time) {
      time = new Date(time);
  
 
      var seconds = time.getSeconds().toString();
      var milliseconds = time.getMilliseconds().toString();
      let centiseconds = ((milliseconds / 10 | 0) % 100);
  
 
  
      if (seconds.length < 2) {
        seconds = '0' + seconds;
      }
  
      return seconds + ':' + centiseconds;
    }
  
    this.start = function() {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
    };
  
    this.stop = function() {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    };
  
    this.reset = function() {
      time = 0;
      update();
    };
  
    this.isOn = false;
  }