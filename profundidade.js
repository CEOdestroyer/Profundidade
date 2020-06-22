function Profundidade(){
  var queue = [];
  
  start.searched=true
  queue.push(start);
  while (queue.length > 0) {
    var current = queue.pop();
    if (current === end) {
      createP('Chegou ao destino!');
      break;
    }

    var edges = current.neighbors;
    for (var i = edges.length-1; i > -1 ; i--) {
      var neighbor = edges[i];

      if (!neighbor.searched && !neighbor.wall) {
        neighbor.searched = true;
        neighbor.previous = current;
        
        queue.push(neighbor);

      }
    }
  } 
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
  
  path = [];
  path.push(end);
  var next = end.previous;
  while (next != null) {
    path.push(next);
    next = next.previous;
  }
}
