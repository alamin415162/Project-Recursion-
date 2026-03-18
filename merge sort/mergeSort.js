const mergeSort = function(arr,l,r){
    
    const n = arr.length
    console.log('called')
    if(n < 2){
        return arr;
    }
    l = 0;
    r = n - 1
    if (l < r) {
        let mid = parseInt(n/2)
        let left = mergeSort(arr.slice(l,mid))
        let right = mergeSort(arr.slice(mid,n))
        return merge(left,right)

    }

    
}

function merge(list1,list2){
  let l = 0
  let r = 0

  while (l < list1.length && r < list2.length) {
    if (list1[l] < list2[r]) {
        list.push(list1[l])
        l++;
    }else{
        list.push(list2[r])
        r++
    }
  }
  return [...list,...list1.slice(l),...list2.slice(r)]
}
