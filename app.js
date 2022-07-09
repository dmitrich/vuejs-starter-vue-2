import { ButtonCounter } from './button-counter.component';

export const App = {
  components: { ButtonCounter },
  data: function () {
    return {
      message: 'Hello Vue3!'
    }
  },
  template: `
    <div>
      <h1>Simple VueJs Starter</h1>
      <p>
        Simple VueJs Starter Template with a custom ButtonCounter Component.
      </p>

      <div>{{ message }}</div>

      <h2>ButtonCounter Component</h2>
  	  <ButtonCounter />
    </div>
  `
}