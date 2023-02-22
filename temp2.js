const arrangeArray = (temp) => {
    let newTemp = []
    while (temp.length > 1) {
        newTemp.push(temp[temp.length - 1])
        newTemp.push(temp[0])
        temp.pop()
        temp.shift()
    }
    newTemp.push(temp[0])
    console.log(newTemp)
}
arrangeArray([2, 4, 6, 8, 10])
arrangeArray([1, 2, 3, 4, 5, 6, 7, 8, 9])