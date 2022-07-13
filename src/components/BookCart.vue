<template>

  <div id="app_book_car">
    <hr/>
    <h1>表格</h1>
    <table>
      <thead>
        <tr>
          <th>
            名称
          </th>
          <th>
            日期
          </th>
          <th>
            价格
          </th>
          <th>
            数量
          </th>
          <th>
            操作
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData " :key="index">
          <td>
            {{item.name}}
          </td>
          <td>
            {{item.day}}
          </td>
          <td>
            {{getShowPrice(item.price)}}>> {{item.price | showPriceFilter}}
          </td>
          <td>
            <button @click="decrement(index)" :disabled="item.count<=1">-</button>
            {{item.count}}
            <button @click="increment(index)">+</button>
          </td>
          <td>
            <button @click="removeItem(index)">移除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      总价格：{{getTotalPrice | showPriceFilter}}
    </div>
    <hr/>
    <h1>checkBoxGroup</h1>
    <el-checkbox-group v-model="checkGroupModel">
      <el-checkbox v-for="(item) in checkBoxList" :label="item.name" :key="item.id" :checked="checkOrNot(item.id)">
        {{item.name}}
      </el-checkbox>
    </el-checkbox-group>
    <h2>选择的：{{checkGroupModel}}</h2>


    <hr/>
    <h1>父子组件传值</h1>
    <h2>{{parentVal}}</h2>
    <el-button @click="printChildValInChild">传递值至父组件..</el-button>

    <el-button @click="callParentMethod">访问父组件..</el-button>
  </div>
</template>

<script>
export default {
  name: "BookCart",
  data () {
    return{
      totalPrice: 0,
      tableData:[
        {
          "name":"111",
          "day":"2022-06-07",
          "price": 10,
          "count": 2
        },
        {
          "name":"222",
          "day":"2022-06-06",
          "price": 11,
          "count": 3
        },
        {
          "name":"333",
          "day":"2022-06-06",
          "price": 11,
          "count": 3
        }
      ],

      checkGroupModel:[],
      checkBoxList:[
        {
          'name':'苹果',
          'id':'1'
        },
        {
          'name':'橘子',
          'id':'2'
        }
      ],
      checkBoxList2:[
        {
          'name':'香蕉',
          'id':'2'
        }
      ]

    }
  },
  props:
    {
      'parentVal':{
        type: String,
        default: ()=>''
      }
    }
  ,
  computed:{
    getTotalPrice(){
      // way1: arr.map
      let sum = 0
      // this.tableData.map(item=> sum += item.count * item.price)
      // return sum
      // way2: for loop with of | in
      // for (let item of this.tableData) {
      //   sum+=item.count*item.price
      // }
      // way3: reduce
      sum = this.tableData.reduce((sum1, curr) => sum1+curr.price * curr.count,0)
      return sum
    }
  },
  methods:{
    /**
     * 通过method实现价格的格式化，也可以通过过滤器实现此功能
     * @param val
     * @returns {string}
     */
    getShowPrice (val) {
      return '￥' + val.toFixed(2);
    },
    decrement (index) {
      if(this.tableData[index].count>1){
        this.tableData[index].count--
      }
    },
    increment (index) {
      this.tableData[index].count++
    },
    removeItem (item) {
      this.tableData.splice(item, 1)
    },
    checkOrNot(currId){
      return this.checkBoxList2.filter(item => item.id === currId).length >=1
    },
    printChildValInChild () {
      // 下面的event名称要和父组件中定义的事件名称一致
      this.$emit('printChildValInChild', '子组件的值...')
    },
    calledByParent(){
      alert('被父组件通过$refs方式调用...')
    },
    printMsg(){
      console.log(this.parentVal);
    },
    callParentMethod(){
      console.log('this.$parent===', this.$parent)
      console.log(this.$parent.parentMsg);
    }
  },
  filters:{
    showPriceFilter(val){
      return '￥' + val.toFixed(2);
    }
  }
}
</script>

<style scoped>

</style>