export const TETROMINOS = {

  0: { 
    shape: [[0]],  
    color: '33, 37, 41'},

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
    color: '247, 143, 52',
  },

  L: {
    shape:  [
              [0, 'L', 0],
              [0, 'L', 0],
              [0, 'L', 'L']
            ],
    color: '15, 217, 35',
  },

  O: {
    shape:  [
              ['O', 'O'],
              ['O', 'O']
            ],
    color: '247, 241, 52',
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
    color: '156, 52, 247',
  }
}
export const randomTetromino = () => {
  const tetrominos = 'IJLOSTZ';
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};