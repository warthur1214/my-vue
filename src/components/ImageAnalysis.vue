<template>
    <div class="container-wrapper">
        <div id="image-upload">
            <img :src="imageSrc" />
            <button>上传</button>
        </div>

        <div id="table-list">
            <span>识别结果</span>
            <p v-show="pShow">请上传图片后查看识别结果</p>
            <table v-show="tableShow">
                <tr>
                    <th>预测分类</th>
                    <th>可能性</th>
                </tr>
                <tr>
                    <td>phone</td>
                    <td>99%</td>
                </tr>
                <tr>
                    <td>normal</td>
                    <td>0.03%</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'image-analysis',
    data () {
      return {
        imageSrc: '',
        pShow: 'false',
        tableShow: ''
      }
    }
  }
</script>

<style scoped>
    .container-wrapper {
        width: 75%;
        margin-left: 5%;
    }


    tr {
        text-align: left;
    }
    #image-upload {
        background-color: #42b983;
        width: 45%;
        height: 500px;
        position: absolute;
    }

    #table-list {
        float: right;
        background-color: antiquewhite;
        position: relative;
        width: 35%;
        height: 500px;
        text-align: left;
    }
</style>