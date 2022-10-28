class node {
  
}


class traverseBst {
  
inOrder(node, array){
  if (!node) return;
  this.inOrder(node.left, array);
  array.push(node.value);
  this.inOrder(node.right,array);
  return array;
} 

  preOrder(node,array){
    if(!node) return;
    array.push(node.value);
    this.preOrder(node.left, array);
    this.postOrder(node.right, array);
    return array;
  }

  postOrder(node, array){
    if(!node) return;
    array.push(node.value);
    this.postOrder(node.left, array);
    this.postOrder(node.right, array);
    array.push(node.value);
    return array;
  }
    

}



const head = new node(15);

const traverse = new traverseBst();

head.add (10);
head.add (12);
head.add (8);
head.add (18);
head.add (20);
head.add (16);


console.log(traverse.preOrder(head,[]));


//         15
//        /  \
//    10        18
//  /    \    /    \
// 8     12  16     20
//
//
//