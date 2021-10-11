<template>
  <div class="draggable-box">
    <aside>
      Demo draggable-next
      <a
        href="//github.com/SortableJS/Vue.Draggable"
        target="_black"
      >Vue.Draggable</a>
    </aside>
    <div class="draggableList">
      <draggable @change="listChange" group="article" class="draggable">
        <div class="list-complete-item" v-for="(item,index) in tableData" :key="index">
          <div class="draggableList-item">{{ index }} {{ item.name }} {{ item.date }}</div>
        </div>
      </draggable>
      <draggable group="article" class="draggable">
        <div class="list-complete-item" v-for="(item,index) in tableData" :key="index">
          <div class="draggableList-item">{{ index }} {{ item.name }} {{ item.date }}</div>
        </div>
      </draggable>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next'
export default defineComponent({
  components: {
    draggable: VueDraggableNext
  },
  setup(props, ctx) {
    const dataMap = reactive({
      enabled: true,
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
      dragging: false,
    })
    const method = reactive({
      listChange(event: any) {
        console.log(event);

      }
    })
    return {
      ...toRefs(dataMap),
      ...toRefs(method)
    };
  },
});
</script>
<style lang="less" scoped>
@import "@/styles/common.less";
.draggable-box {
  padding: @globalPadding;
}
.draggableList {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .draggable {
    flex: 1;
    .list-complete-item {
      margin-right: 30px;
      .draggableList-item {
        border: 1px solid #ccc;
        margin-top: 10px;
        padding: 5px;
        cursor: pointer;
      }
    }
  }
}
.list-complete-item.sortable-chosen {
  background: #4ab7bd;
}
.list-complete-item.sortable-ghost {
  background: #30b08f;
}
.list-complete-enter,
.list-complete-leave-active {
  opacity: 0;
}
</style>