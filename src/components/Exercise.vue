<template>  
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>First level</span>
            </div>
            <el-form :model="form" label-width="120px">
                <el-form-item
                    label="Input 1">
                    <el-input v-model="form.input1" placeholder="Input 1 (Array)"></el-input>
                </el-form-item>
                <el-form-item
                    label="Input 2">
                    <el-input v-model="form.input2" placeholder="Input 2 (Int)"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmitSix()">Execute</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
    
</template>

<style>
.container {
    padding: 20px;
}
</style>

<script>
export default {
    data() {
        return {
            form: {
                input1: '',
                input2: ''
            }
        }
    },
    methods: {
        onSubmit: function() {
            /**
             * The Problem:
             *      Given a list of numbers and a number k, return whether any 
             *      two numbers from the list add up to k.
             * 
             */
            let array_input = this.form.input1.split(',');
            let sum_input = this.form.input2;

            let checkVal = [];
            let hasFound = false;

            array_input.forEach(function(val){
                let diff = parseInt(sum_input) - parseInt(val);

                if(checkVal.includes(diff.toString())) {
                    hasFound = true;
                }

                if(!checkVal.includes(val)) {
                    checkVal.push(val);
                }
            });

            let msg = (hasFound == true) ? 'We have successfully found a pair!' : 'There is no pair that sums to the input value.';

            this.$alert(msg, 'Information', { confirmButtonText: 'OK'});
        },
        onSubmitTwo: function() {
            /**
             * The Problem: 
             *      Given an array of integers, return a new array such 
             *      that each element at index i of the new array is the product of 
             *      all the numbers in the original array except the one at i.
             * 
             */
            let array_input = this.form.input1.split(',');

            let new_array = [];

            for(let i = 0; i < array_input.length; i++){
                //let current = parseInt(array_input[i]);
                let product = 0;
                for(let j = 0; j < array_input.length; j++) {
                    if(i != j)
                        product = product == 0 ? parseInt(array_input[j]) : (parseInt(array_input[j]*product));
                }

                //product = product/current;
                new_array.push(product);
            }

            let message = 'Result Array: ' + new_array.toString();

            this.$alert(message, 'Information', { confirmButtonText: 'OK' });
        },
        onSubmitThree: function() {
            /**
             * The Problem:
             *      From a string, check if there's any reoccuring letters/characters
             */

            let string_input = this.form.input1;

            let tmparray = [];
            let occurance = [];

            for(let i = 0; i < string_input.length; i++) {
                let character = string_input.charAt(i);

                if (tmparray.includes(character)) {
                    if (!occurance.includes(character))
                        occurance.push(character);
                } else {
                    tmparray.push(character);
                }
            }

            occurance.sort();

            this.$alert('Reoccuring letter(s) is/are: ' + occurance.toString(), 'Information', {
                confirmButtonText: 'OK'
            });
        },
        onSubmitFour: function() {
            /**
             * The Problem:
             *      There's a staircase with N steps, and you can climb 1 or 2 steps at a time. 
             *      Given N, write a function that returns the number of unique ways you can climb 
             *      the staircase. The order of the steps matters.
             * 
             */

            let array_input = this.form.input1.split(',');
            let num_input = parseInt(this.form.input2);

            let result = 0;

            if(num_input == 0 /*|| num_input == 1*/) {
                result = 1;
            } else {
                let nums = [];
                nums.push(1);
                //nums.push(1);
                for(let i = 1; i < num_input+1; i++) {
                    let total = 0;

                    array_input.forEach(function(v) {
                        let steps = parseInt(v);
                        if((i-steps >= 0)){
                            total += nums[i-steps];
                        }
                    });

                    //let sum = parseInt(nums[i-1]) + parseInt(nums[i-2]);
                    nums.push(total);
                    console.log('Number pushed: ' + nums[i].toString());
                }

                result = nums[num_input];
            }

            this.$alert('Number of ways is : ' + result, 'Information', { confirmButtonText: 'OK' });
        },
        onSubmitFive: function() {

        },
        serialize: function (root) {

        },
        deserialize: function (str) {

        },
        onSubmitSix: function() {
            let array_input = this.form.input1.split(',');

            array_input.sort();

            let first_positive_integer = null;
            let counter = 1;

            while(first_positive_integer == null){
                if(array_input.includes(counter.toString()))
                    counter++;
                else
                    first_positive_integer = counter;
            }

            this.$alert('The lowest positive integer inexistent is: ' + first_positive_integer);
        }
    }
}
</script>