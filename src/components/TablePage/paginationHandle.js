/**
* 分页处理
* @param {reactiveObject} getListProps 分页相关参数
* @param {function} getList 请求数据方法
*/
export const paginationHandle = ({ getListProps, getList }) => {
    const paginationEvents = {
        'size-change': val => {
            // console.log(`每页 ${val} 条`)
            getListProps.pageSize = val
            getListProps.pageNum = 1
            getList()
        },
        'current-change': val => {
            // console.log(`当前页: ${val}`)
            getListProps.pageNum = val
            getList()
        },
    }

    return {
        paginationEvents,
    }
}