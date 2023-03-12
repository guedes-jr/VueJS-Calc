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

<style>
main {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background-color: #81e2b5;
  height: 82vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.calculator {
  width: 20rem;
  border-radius: .5rem;
  box-shadow: rgba(0, 0, 0, 0.15) .3rem .3rem 2.6px;
}

.calculator .screen {
  border-radius: .5rem .5rem 0 0;
  text-align: right;
  display: block;
  background-color: white;
  widows: 100%;
  height: 35%;
  padding: .5rem;
}

.calculator .screen p {
  margin: 0;
  padding: .6rem .3;
}
.calculator .screen .history {
  margin-bottom: .3rem;

}
.calculator .screen .value {
  font-size: 1.6rem;
  font-weight: bold;
  margin-right: .3rem;
}

.group-button {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1px;
}

.group-button .btn {
  border: none;
  padding: .5rem .7rem;
  cursor: pointer;
  background-color: #4bb483;
  color: #fff;
}

.pluss {
  border-radius: 0 0 .5rem 0;
}

.p {
  border-radius: 0 0 0 .5rem;
}

.group-button .btn:hover {
    background-color: #448a69;
}

.group-button .ac {
  grid-area: 1 / 1 / 2 / 3;
}

.group-button .del {
  grid-area: 1 / 3 / 2 / 5;
}


.group-button .ac,
.group-button .del,
.group-button .operation {
  background-color: #35495e;
}

.group-button .equal:hover,
.group-button .operation:hover {
  background-color: #2b3947;
}
</style>