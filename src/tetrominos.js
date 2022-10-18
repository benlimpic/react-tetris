export const TETROMINOS = {

  0: { 
    shape: [[0]],  
    color: '21, 3, 0'},

  I: {
    shape:  [
              [0, 'I', 0, 0],
              [0, 'I', 0, 0],
              [0, 'I', 0, 0],
              [0, 'I', 0, 0]
            ],
    color: '247, 52, 52',
  },

  J: {
    shape:  [
              [0, 'J', 0],
              [0, 'J', 0],
              ['J', 'J', 0]
            ],
    color: '250, 0, 255',
  },

  L: {
    shape:  [
              [0, 'L', 0],
              [0, 'L', 0],
              [0, 'L', 'L']
            ],
    color: '255, 92, 0',
  },

  O: {
    shape:  [
              ['O', 'O'],
              ['O', 'O']
            ],
    color: '255, 229, 0',
  },

  S: {
    shape:  [
              [0, 'S', 'S'],
              ['S', 'S', 0],
              [0, 0, 0]
            ],
    color: '18, 209, 252',
  },

  T: {
    shape:  [
              [0, 0, 0],
              ['T', 'T', 'T'],
              [0, 'T', 0]
            ],
    color: '52, 120, 247',
  },

  Z: {
    shape:  [
              ['Z', 'Z', 0],
              [0, 'Z', 'Z'],
              [0, 0, 0]
            ],
    color: '128, 0, 255',
  }
}
export const randomTetromino = () => {
  const tetrominos = 'IJLOSTZ';
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};