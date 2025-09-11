(function() {
  const a = ["❤富强❤","❤民主❤","❤文明❤","❤和谐❤","❤自由❤","❤平等❤","❤公正❤","❤法治❤","❤爱国❤","❤敬业❤","❤诚信❤","❤友善❤"];
  let a_idx = 0;
  document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(e) {
      const span = document.createElement('span');
      span.textContent = a[a_idx];
      a_idx = (a_idx + 1) % a.length;
      const x = e.pageX, y = e.pageY;
      span.style.zIndex = 999999999;
      span.style.top = (y - 20) + 'px';
      span.style.left = x + 'px';
      span.style.position = 'absolute';
      span.style.fontWeight = 'bold';
      span.style.userSelect = 'none';
      span.style.pointerEvents = 'none';
      span.style.color = `rgb(${~~(255*Math.random())},${~~(255*Math.random())},${~~(255*Math.random())})`;
      document.body.appendChild(span);
      let start = null;
      const duration = 1500;
      const startTop = y - 20;
      const endTop = y - 180;
      function animate(ts) {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        span.style.top = (startTop + (endTop - startTop) * progress) + 'px';
        span.style.opacity = 1 - progress;
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          span.remove();
        }
      }
      requestAnimationFrame(animate);
    });
  });
})();
