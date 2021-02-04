import gsap from "gsap/gsap-core";
import config from "../../config";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
export default class Animation {
  constructor() {
    this._rocketElement = document.querySelector(".rocket");
    this._backgroundElement = document.querySelector(".background");
    this._svgPath = config.svgPath;
    this._rocketTween = null;
    this._backgroundElement.addEventListener("click", () => {
      if (this._rocketTween !== null) {
        this._rocketTween.kill();
        this._rocketTween = null;
      } else {
        this.start();
      }
    });
  }

  start() {
    gsap.registerPlugin(MotionPathPlugin);
    this._rocketTween = gsap.to(this._rocketElement, {
      duration: 5,
      motionPath: { path: config.svgPath, autoRotate: true },
      repeat: -1,
      ease: "power1.in",
    });
  }
}
