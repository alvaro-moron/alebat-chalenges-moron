import { CheckCircleSvg, ErrorSvg, InfoSvg, WarningSvg } from '../assets/index'

const buttonsData = [
  { id: 'success', icon: CheckCircleSvg, message: 'Success notification' },
  { id: 'error', icon: ErrorSvg, message: 'Error notification' },
  { id: 'info', icon: InfoSvg, message: 'Info notification' },
  { id: 'warning', icon: WarningSvg, message: 'Warning notification' },
]

class GenerateNotification {
  constructor() {
    this.init()
  }

  init() {
    buttonsData.forEach((button) => {
      const btnElement = document.querySelector(
        `button[data-toast="${button.id}"]`,
      )
      if (btnElement) {
        btnElement.addEventListener('click', () =>
          this.createNotification(button.id),
        )
      }
    })
  }

  obtainObject(id: string) {
    return buttonsData.find((button) => button.id === id)
  }

  searchIcon(id: string) {
    const notification = this.obtainObject(id)
    return notification ? notification.icon : ''
  }

  searchMessage(id: string) {
    const notification = this.obtainObject(id)
    return notification ? notification.message : ''
  }

  createNotification(id: string) {
    const container = document.getElementById('toast-container')
    if (!container) return

    const icon = this.searchIcon(id)
    const message = this.searchMessage(id)

    const notificationElement = document.createElement('div')
    notificationElement.classList.add('notification')
    notificationElement.classList.add('fadein')
    notificationElement.style.backgroundColor = `var(--${id})`

    const iconElement = document.createElement('img')
    iconElement.src = icon
    iconElement.title = message + ' image'
    iconElement.alt = message + ' image'
    notificationElement.appendChild(iconElement)

    const messageElement = document.createElement('span')
    messageElement.textContent = message
    notificationElement.appendChild(messageElement)

    container.appendChild(notificationElement)

    this.lifeCycleNotification(notificationElement)
  }

  lifeCycleNotification(notificationElement: HTMLDivElement) {
    setTimeout(() => {
      notificationElement.classList.add('fadeout')
      setTimeout(() => {
        notificationElement.remove()
      }, 500)
    }, 3000)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new GenerateNotification()
})
