var chunlin9527 = {
    // 拆分数组，并组成一个新数组
    chunk: function chunk(array, size) {
        var result = []
        var count = 0
        for (var i = 0; i < array.length; i++) {
            result[i] = [] 
            for (var j = 0; j < size; j++) {
                result[i].push(array[count]) 
                count++
                if (count == array.length) {
                    return result
                }
            }
        }
    },

    // 输出原数组中所有的非假值元素
    compact: function compact(array) {
        var result = []
        return result = array.filter(Boolean)
    },

    // 去除数组前面的n个元素
    drop: function drop(array, n = 1) {
        var result = []
        return result = array.slice(n)
    },

    // 去除数组尾部的n个元素
    dropRight: function dropRight(array, n = 1) {
        var result = []
        var m = array.length - n
        if (m <= 0) {
            return []
        }   else {
            return result = array.slice(0, m)
        }
    },

    // 填充（替换）数组中，从start位置到end位置的值
    fill: function fill(array, value, start = 0, end = array.length) {
        for (var i = start; i < end; i++) {
            array[i] = value
        }
        return array
    },


    findIndex: function findIndex(array, predicate, fromIndex) {

    },

    findLastIndex: function findLastIndex(array, predicate, fromIndex) {

    },

    // 减少一级数组嵌套深度
    flatten: function flatten(array) {
        var i = 0
        while (i < array.length) {
            if (array[i].length !== undefined) {
                break
            }
            i++
        }
        var part = array[i]
        array.splice(i, 1)
        for (var j = 0; j < part.length; j++) {
            array.splice(i, 0, part[j])
            i++
        }
        return array
    },

    // 将数组递归为一维数组
    flattenDeep: function flattenDeep(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].length !== undefined) {
                array = this.flatten(array)
            }  
        }
        return array
    },

    // 减少数组的depth嵌套层级
    flattenDepth: function flattenDepth(array, depth = 1) {
        for (var i = 0; i < depth; i++) {
            var result = this.flatten(array)
            array = result
        }
        return result
    },

    // 数组返回对象
    fromPairs: function fromPairs(pairs) {   
        var result = {}
        for (var i = 0; i < pairs.length; i++) {
            result[pairs[i][0]] = pairs[i][1]
        }
        return result
    },

    // 获取数组第一个元素
    head: function head(array) {
        return array[0]
    },

    // value在数组中的索引值
    indexOf: function indexOf(array, value, fromIndex = 0) {
        if (fromIndex < 0) {
            if (array.lastIndexOf(value) == -1) {
                return -1
            }   else {
                return array.indexOf(value)
            }
        }
        var index = array.slice(fromIndex).indexOf(value)
        if (index == -1) {
            return -1
        }
        return index + fromIndex
    },

    // 去除数组中的最后一个元素
    initial: function initial(array) {
        return array.slice(0, array.length - 1)
    },

    // 将数组中所有元素转换为由separator分隔的字符串
    join: function join(array, separator) {
        return array.join(separator)
    },

    // 获取数组最后一个元素
    last: function last(array) {
        return array[array.length - 1]
    },

    // 从右到左遍历数组，检索value的索引值
    lastIndexOf: function lastIndexOf(array, value, fromIndex) {
        if (array.slice(fromIndex).lastIndexOf(value) == -1 || fromIndex < 0) {
            return -1
        }   else {
            return array.slice(fromIndex).lastIndexOf(value)
        }
    },

    // 反转数组
    reverse: function reverse(array) {
        return array.reverse()
    },

    // 使用二进制的方式，检索value值插入到数组中尽可能小的索引位置
    sortedIndex: function sortedIndex(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (value <= array[i]) {
                return i
            }
        }
        return array.length
    },
}