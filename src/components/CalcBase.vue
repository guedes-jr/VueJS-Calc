<template>
  <main>
    <div class="calculator">
      <div class="screen">
        <p class="history">{{ getOperation }}</p>
        <p class="value">{{ getResult }}</p>
      </div>


      <div class="group-button">
        <button class="btn ac" @click="ac()">AC</button>
        <button class="btn del" @click="del('del')">DEL</button>
        <button class="btn" @click="click('7')">7</button>
        <button class="btn" @click="click('8')">8</button>
        <button class="btn" @click="click('9')">9</button>
        <button class="btn operation" @click="click('÷')">÷</button>
        <button class="btn" @click="click('4')">4</button>
        <button class="btn" @click="click('5')">5</button>
        <button class="btn" @click="click('6')">6</button>
        <button class="btn operation" @click="click('x')">x</button>
        <button class="btn" @click="click('1')">1</button>
        <button class="btn" @click="click('2')">2</button>
        <button class="btn" @click="click('3')">3</button>
        <button class="btn operation" @click="click('-')">-</button>
        <button class="btn p" @click="click('.')">.</button>
        <button class="btn" @click="click('0')">0</button>
        <button class="btn" @click="result()">=</button>
        <button class="btn operation pluss" @click="click('+')">+</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      getOperation: '0',
      getResult: 0,
    }
  },

  methods: {
    ac() {
      this.getResult = '0';
      this.getOperation = '0';
    },
    del() {
      if (this.getResult != '0') {
        this.getResult = this.getResult.substring(0, this.getResult.length - 1);
        if (this.getResult.length < 1) {
          this.getResult = '0';
        }
      }
    },
    click(a) {
      if (this.getResult == '0') {
        this.getResult=a;
      } else {
        this.getResult += a;
      }
    },
    result() {
      let operation = this.getResult;
      this.getOperation = operation;

      operation = operation.replace('x', '*');
      operation = operation.replace('÷', '/');
      this.getResult = eval(operation);
    }
  }
}
</script>