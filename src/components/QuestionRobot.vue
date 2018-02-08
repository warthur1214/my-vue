<template>
    <div id="watch-example">
        <p>
            请问 yes或no:
            <input v-model="question"/>
        </p>
        <div>
            <p>{{answer}}</p>
            <p v-if="image"><img :src="image"/></p>
        </div>
    </div>
</template>

<script>
  import _ from 'lodash'
  import axios from 'axios'

  export default ({
    name: 'QuestionRobot',
    data () {
      return {
        question: '',
        answer: '请输入问题',
        image: ''
      }
    },
    watch: {
      question: function (newQ, oldQ) {
        if (newQ.indexOf('?') === -1) {
          this.answer = '等待您停止输入'
        }
        this.getAnswer()
      }
    },
    methods: {
      getAnswer: _.debounce(function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = '问题需要以问号结束！'
          this.image = ''
          return
        }
        this.answer = '思考中...'
        const vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
            vm.image = _.capitalize(response.data.image)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      }, 500)
    }
  })
</script>