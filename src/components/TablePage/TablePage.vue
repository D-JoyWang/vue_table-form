<template>
    <div class="table-page">
        <div class="table">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column v-bind="item" v-for="(item, index) in columns" :key="index">
                    <template slot-scope="scope">
                        <slot v-if="!item.render" :name="item.prop" :row="scope.row">
                            {{item.formatter ? item.formatter(scope.row) : scope.row[item.prop] }}
                        </slot>
                        <template v-else>
                            <Render :scope="scope" :render="item.render" v-on="renderEvents"></Render>
                        </template>
                    </template>
                </el-table-column>
                <el-pagination background layout="prev, pager, next" :total="1000">
                </el-pagination>
            </el-table>
        </div>
        <div class="page" v-if="!hiddenPagination">
            <el-pagination style="height: 80px" v-bind="paginationProps" v-on="paginationEvents"
                :page-sizes="[10, 20, 50, 100]" :page-size="10" layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>

    </div>
</template> 
  
<script>
import Render from './render.vue'
export default {
    methods: {
        handleClick(row) {
            console.log(row);
        },
    },
    props: {
        // render事件
        renderEvents: {
            type: Object,
            default: () => { },
        },
        columns: {
            type: Array,
            default: () => [],
        },
        tableData: [],
        hiddenPagination: {
            type: Boolean,
            default: false
        },
        // element 分页组件提供的 Attributes
        paginationProps: {
            type: Object,
            default: () => { },
        },
        // element 分页组件提供的 Events
        paginationEvents: {
            type: Object,
            default: () => { },
        },
    },
    components: { Render },

    data() {
        return {

        };
    },
};
</script>
<style scoped>
.color-red {
    color: red;
    border: 1px solid cyan;
    padding: 0px 10px;
}

.page {
    text-align: right;
    padding-right: 24px;
    margin-top: 40px;
}
</style>