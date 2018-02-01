<template>
    <div class="hello">
        <h4>{{ msg }}</h4>
        <h4>{{reverse}}</h4>
        <div id="desc">
            <a v-bind:href="link">百度一下</a>
            <p v-html="msgHtml"></p>
            <p v-text="hello[0]"></p>
            <div :class="">我是红色的</div>
        </div>

        <div>
            <p style="float: right;">{{body.key}}</p>
            <button @click="chenyu">点击我</button>
        </div>

        <div>
            <p style="float: right;">{{reverseMsg}}</p>
            <button @click="reverseFun">翻转</button>
        </div>
        <p>日期：{{now}}</p>
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
        reverseMsg: '我的第一个vue项目',
        msgHtml: '<p>这是一个段落</p>',
        hello: ['你好呀', '我不好'],
        fruits: [],
        link: 'http://www.baidu.com',
        initItem: '',
        body: {}
      }
    },
    computed: {
      reverse: function () {
        return this.msg.split('').reverse().join('')
      },
      now: function () {
        return parseInt(Date.now() / 1000)
      }
    },
    methods: {
      reverseFun: function () {
        return this.reverseMsg.split('').reverse().join('')
      },
      chenyu: function () {
        this.$http.get('http://api-local.chenyu.com:81').then((response) => {
          this.body = response.body
        })
      },
      eated: function (item) {
        console.log(item)
        item.eated = !item.eated
      },
      onEnter: function () {
        console.log(this.initItem)
        this.fruits.push({key: this.initItem, eated: false})
        this.initItem = ''
        localStorage.setItem('vue_todo_list', JSON.stringify(this.fruits))
      }
    },
    watch: {
      msg: function (val, oldVal) {
        console.log(val, oldVal)
      },
      fruits: function (val) {
        console.log(val.length)
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
