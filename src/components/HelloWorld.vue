<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div id="desc">
            <a v-bind:href="link">百度一下</a>
            <p v-html="msgHtml"></p>
            <p v-text="hello[0]"></p>
            <div :class="">我是红色的</div>
        </div>

        <button @click="fun1">点击我</button>

        <ul>
            <li v-for="item in fruits" :class="{eated: item.eated}" @click="eated(item)">
                <p>{{item.key}}</p>
            </li>
        </ul>

        <input v-model="initItem" @keyup.enter="onEnter" title=""/>
    </div>
</template>

<script>
  export default ({
    name: 'hello',
    data () {
      return {
        msg: '我的第一个vue项目',
        msgHtml: '<p>这是一个段落</p>',
        hello: ['你好呀', '我不好'],
        fruits: [
          {key: 'apple', eated: true},
          {key: 'banana', eated: false}
        ],
        link: 'http://www.baidu.com',
        initItem: ''
      }
    },
    methods: {
      fun1: function () {
        console.log(this.msg)
      },
      eated: function (item) {
        console.log(item)
        item.eated = !item.eated
      },
      onEnter: function () {
        console.log(this.initItem)
        this.fruits.push({key: this.initItem, eated: false})
        this.initItem = ''
      }
    },
    watch: {
      msg: function (val, oldVal) {
        console.log(val, oldVal)
      },
      fruits: function (val, oldVal) {
        console.log(val.length)
        console.log(oldVal.length)
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .eated {
        background-color: blue;
    }
</style>
