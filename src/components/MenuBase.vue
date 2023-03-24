<template>
    <nav>
        <div class="logo">
            <img alt="Vue logo" src="../assets/logo.png">
        </div>
        <div class="title">
            <h3>ue Calc  {{ darkmode }}</h3>
        </div>
        <div class="icons">
            <div id="toggle-btn" class="fas" v-bind:class="darkmode" @click="click()"></div>
        </div>
    </nav>
</template>
<script>
export default {
  data() {
    return {
      darkmode: 'fa-sun',
    }
  },
  methods: {
    click() {
        if(this.darkmode == 'fa-sun') {
            this.darkmode = 'fa-moon';
        } else {
            this.darkmode = 'fa-sun';
        }
        let body = document.body;
        let toggleBtn = document.querySelector('#toggle-btn');
        let darkMode = localStorage.getItem('dark-mode');

        const enabelDarkMode = () => {
        toggleBtn.classList.replace('fa-sun', 'fa-moon');
        body.classList.add('dark');
        localStorage.setItem('dark-mode', 'enabled')
        }

        const disableDarkMode = () => {
        toggleBtn.classList.replace('fa-moon', 'fa-sun');
        body.classList.remove('dark');
        localStorage.setItem('dark-mode', 'disabled')
        }

        if (darkMode === 'enabled') {
        enabelDarkMode();
        }

        if (darkMode === 'disabled') {
            enabelDarkMode();
        } else {
            disableDarkMode();
        }
    }
  }
}
</script>
