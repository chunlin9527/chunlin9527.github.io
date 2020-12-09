var chunlin9527 = {
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

    compact: function compact(array) {
        var result = []
        return result = array.filter(Boolean)
    },

    drop: function drop(array, n) {
        n === undefined ? n = 1 : n
        var result = []
        return result = array.slice(n)
    },

    dropRight: function dropRight(array, n) {
        n === undefined ? n = 1 : n
        var result = []
        var m = array.length - n
        if (m <= 0) {
            return []
        }   else {
            return result = array.slice(0, m)
        }
    },

    fill: function fill(array, value, start, end) {
        start === undefined ? start = 0 : start
        end === undefined ? end = array.length : end
        for (var i = start; i < end; i++) {
            array[i] = value
        }
        return array
    },

    findIndex: function findIndex(array, predicate, fromIndex) {

    },

    findLastIndex: function findLastIndex(array, predicate, fromIndex) {

    },

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

    flattenDeep: function flattenDeep(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].length !== undefined) {
                array = this.flatten(array)
            }  
        }
        return array
    },

    flattenDepth: function flattenDepth(array, depth) {
        if (depth === undefined) {
            return this.flatten(array)
        }   else {
            for (var i = 0; i < depth; i++) {
                var result = this.flatten(array)
                array = result
            }
        }
        return result
    },

    fromPairs: function fromPairs(pairs) {   
        var result = {}
        for (var i = 0; i < pairs.length; i++) {
            result[pairs[i][0]] = pairs[i][1]
        }
        return result
    },

    head: function head(array) {
        return array[0]
    },

    indexOf: function indexOf(array, value, fromIndex) {
        if (fromIndex < 0) {
            var lastIndex = array.lastIndexOf(value)
            if (lastIndex == -1) {
                return -1
            }   else {
                return lastIndex
            }
        }
        fromIndex === undefined ? fromIndex = 0 : fromIndex
        var index = array.slice(fromIndex).indexOf(value)
        if (index == -1) {
            return -1
        }
        return index + fromIndex
    },

    initial: function initial(array) {
        return array.slice(0, array.length - 1)
    },

    reverse: function reverse(array) {
        return array.reverse()
    },

    sortedIndex: function sortedIndex(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (value <= array[i]) {
                return i
            }
        }
        return array.length
    },
}