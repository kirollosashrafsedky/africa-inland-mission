import AOS from 'aos'
export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    duration: 500,
    easing: 'ease',
    once: false,
    offset: 50,
    disable: false,
  })
}
