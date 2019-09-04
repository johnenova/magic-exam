<template>  
    <div class="container">
        <el-col :span="24" style="padding: 20px;">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>Result</span>
                    <el-button style="float: right; padding: 3px 0" type="text" @click="onSubmit()">Execute</el-button>
                </div>
                
                <div class="list-container">
                    <div v-for="(r, index) in res" :key="r" class="text-item">
                        {{ 'Number ' + (index+1) + ': ' + r }}
                    </div>
                </div>
            </el-card>
        </el-col>
    </div>
</template>

<style>
.container {
    padding: 20px;
}
.list-container {
  height:100%;
  overflow: scroll;
  overflow-x: auto;
  max-height: 500px;
  text-align: left;
}
</style>

<script>
export default {
    data() {
        return {
            form: {
                input1: '',
                input2: ''
            },
            res: []
        }
    },
    methods: {
        onSubmit: function() {
            let arr_num = [3,5];
            let arr_str = ["Cat", "Dog"];

            let min = 1;
            let max = 100;

            let result = [];

            for(let i=min; i <= max; i++){
                if(((i / (arr_num[0]*arr_num[1]))) - Math.floor((i / (arr_num[0]*arr_num[1]))) == 0){
                    result.push(arr_str[0] + arr_str[1]);
                } else if(((i / arr_num[1])) - Math.floor((i / arr_num[1])) == 0) {
                    result.push(arr_str[1]);
                } else if ((i / (arr_num[0])) - Math.floor(i / (arr_num[0])) == 0) {
                    result.push(arr_str[0]);
                }else{
                    result.push(i.toString());
                    /*if(result == 0)
                        resu.push(i.toString());
                    else
                        result +=  "<br>" + i.toString();
                        */
                }
            }

            /*this.$alert('<Numbers are: <br>' + result, 'Result', {
                dangerouslyUseHTMLString: true,
                lockScroll: false
            });*/

            this.res = result;
        }
    }
}
</script>

<style>
body {
    overflow: visible !important;
}
</style>
