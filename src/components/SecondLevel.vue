<template>  
    <div class="">
        <el-col :span="24" style="padding: 20px;">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>Second Level - Magic!</span>
                    <el-button style="float: right; padding: 3px 0" type="text" @click="onSubmit()">Execute</el-button>
                </div>
                <pre style="word-wrap: break-word; white-space: pre-wrap;">
                {{ res }}
                </pre>
                
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
            res: ''
        }
    },
    methods: {
        onSubmit: function() {
            let max = 33;
            let counter = 0;

            let result = '';

            while(counter <= max+1){

                result += '\n';

                for(let i=0; i<max; i++){
                    if(counter%2==0){
                        if(i%2 == 0){
                            result += '* ';
                        }else {
                            if(max-counter+1 >= (max)/2){
                                if(i <= counter || i >= max-1-counter){
                                    result += '  ';
                                }else{
                                    result += '* ';
                                }
                            }else{
                                if(i<= max-counter || i >= counter-1){
                                    result += '  ';
                                }else{
                                    result += '* ';
                                }
                            }
                        }
                        
                    }else{
                        if(max-counter+1 >= (max)/2) {
                            if(i%2 == 0 && (i <= counter || i >= max-1-counter)){
                                result += '* ';
                            }else{
                                result += '  ';
                            }
                        }else{
                            if(i%2 == 0 && (i <= max-counter || i >= counter-1)){
                                result += '* ';
                            }else{
                                result += '  ';
                            }
                        }
                        
                    }
                }

                counter++;
            }

            /*for(let i = 0; i < max; i++) {
                result += '\n';

                for(let j = 0; j < max; j++) {
                    if(i%2 == 0){
                        if(i == 0){
                            result += '* ';
                        }else{
                            if(i == j || i == max-1-j){
                                result += '  ';
                            }else{
                                result += '* ';
                            }
                        }
                    }else{
                        if(i == 0 || i == max-1){
                            result += '* ';
                        }else{
                            result += '  ';
                        }
                    }
                }
            }*/

            this.res = result
        }
    }
}
</script>
