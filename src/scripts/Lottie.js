export default class Lottie {
  constructor(containerId, animationDataPath, options = {}) {
    this.containerId = containerId;
    this.animationDataPath = animationDataPath;
    this.options = {
      renderer: 'svg',
      loop: true,
      autoplay: true,
      ...options,
    };

    this.animation = null;
    this.init();
  }

  init() {
    this.loadAnimation();
  }

  loadAnimation() {
    const container = document.getElementById(this.containerId);

    if (!container) {
      console.error(`Container with id "${this.containerId}" not found.`);
      return;
    }

    this.animation = bodymovin.loadAnimation({
      container,
      path: this.animationDataPath,
      ...this.options,
    });
  }

  play() {
    if (this.animation) {
      this.animation.play();
    }
  }

  pause() {
    if (this.animation) {
      this.animation.pause();
    }
  }

  stop() {
    if (this.animation) {
      this.animation.stop();
    }
  }
}
