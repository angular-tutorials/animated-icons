import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'animated-icon',
  template: `<i class="{{currentIcon}}"></i>`,
})
export class AnimatedIconComponent implements OnInit {

  @Input() icon: number = 0
  @Input() icons: string[] = []

  get currentIcon() {
    return this.icons[this.icon]
  }

  _animate: boolean = true

  get animate() {
    return this._animate
  }

  @Input() set animate(animate) {
    this._animate = animate
    if (!this._animate) {
      this.icon = 0
    }
  }

  updateIcon() {
    if (this.animate) {
      if (this.icon < (this.icons.length - 1)) {
        return this.icon++
      }
      return this.icon = 0
    }
  }

  @Input() delay: number = 1000

  startAnimation() {
    setInterval(() => this.updateIcon(), this.delay)
  }

  ngOnInit() {
    this.startAnimation()
  }
}
