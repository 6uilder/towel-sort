
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === [] || matrix === undefined || matrix.length<2) {
    return [];
  }
  let myMatrix = [...matrix];
  for (let i = 1; i < myMatrix.length; i+=2) {
  	myMatrix[i] = myMatrix[i].sort((a,b)=> b-a);
  }
  
	myMatrix = myMatrix.join(',').split(',').map(e=> +e)
  
  return myMatrix;
}
