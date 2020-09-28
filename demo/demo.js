/**
 * @file: demo.js
 * @since: 2020-09-27
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

const Counter = {
    template: '{{counter}}<button-counter></button-counter><hoo-button></hoo-button>',
    data() {
        return {
            counter: 0
        }
    }
}

let app = Vue.createApp(Counter)

app.component('button-counter', {
    data() {
      return {
        count: 0
      }
    },
    template: `
      <button @click="count++">
        You clicked me {{ count }} times.
      </button>`
  })

app.use(HooperUI.Button)
app.mount('#app')
console.log(app)