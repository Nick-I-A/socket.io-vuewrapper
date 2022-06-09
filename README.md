# socket.io-vuewrapper
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

Other versions support outdated dependencies, no longer receive updates or do not respond to pull requests, which is why socket.io-vuewrapper was created.

Parts of this [REPO](https://github.com/kil0ba/Vue-3-Socket.io) were used, so thanks to David Gurshumov and Metin Seylan.

### 🚀 Installation
`npm i socket.io-vuewrapper --save`

## Example
src/main.js
```Javascript
import { createApp } from 'vue';
import App from './App.vue';
import VueSocketIO from 'socket.io-vuewrapper';

const vSocket = new VueSocketIO({
    debug: true,
    connection: 'http://localhost:8000'
});

createApp(App).use(vSocket).mount('#app')
```

src/App.vue
```Vue
...
<script>
export default {
  beforeMount() {
    // Send an object to the connected server
    this.$socket.emit('test', { message: "example" });
  },
  sockets: {
    // Listen for the custom `test` event
    test: function(msg) {
      console.log(msg);
    }
  }
}
</script>
...
```

[contributors-shield]: https://img.shields.io/github/contributors/Nick-I-A/socket.io-vuewrapper.svg?style=for-the-badge
[contributors-url]: https://github.com/Nick-I-A/socket.io-vuewrapper/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Nick-I-A/socket.io-vuewrapper.svg?style=for-the-badge
[forks-url]: https://github.com/Nick-I-A/socket.io-vuewrapper/network/members
[stars-shield]: https://img.shields.io/github/stars/Nick-I-A/socket.io-vuewrapper.svg?style=for-the-badge
[stars-url]: https://github.com/Nick-I-A/socket.io-vuewrapper/stargazers
[issues-shield]: https://img.shields.io/github/issues/Nick-I-A/socket.io-vuewrapper.svg?style=for-the-badge
[issues-url]: https://github.com/Nick-I-A/socket.io-vuewrapper/issues
