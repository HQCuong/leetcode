/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  let fibos = [0];
  let index = -1;

  while(true) {
      let fiboVal = fibos.length === 1
          ? 1
          : fibos[fibos.length - 1] + fibos[fibos.length - 2];
      
      fibos.push(fiboVal);
  
      index += 1;

      yield fibos[index];
  }
};

/**
* const gen = fibGenerator();
* gen.next().value; // 0
* gen.next().value; // 1
*/
