import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

type PieceType = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';
type PieceColor = 'white' | 'black';

interface Piece {
  type: PieceType;
  color: PieceColor;
}

interface Square {
  piece: Piece | null;
  position: string;
}

const pieceSymbols: Record<PieceColor, Record<PieceType, string>> = {
  white: {
    king: '♔',
    queen: '♕',
    rook: '♖',
    bishop: '♗',
    knight: '♘',
    pawn: '♙',
  },
  black: {
    king: '♚',
    queen: '♛',
    rook: '♜',
    bishop: '♝',
    knight: '♞',
    pawn: '♟',
  },
};

const initializeBoard = (): Square[][] => {
  const board: Square[][] = [];
  
  for (let row = 0; row < 8; row++) {
    board[row] = [];
    for (let col = 0; col < 8; col++) {
      const position = `${String.fromCharCode(97 + col)}${8 - row}`;
      let piece: Piece | null = null;

      if (row === 1) {
        piece = { type: 'pawn', color: 'black' };
      } else if (row === 6) {
        piece = { type: 'pawn', color: 'white' };
      } else if (row === 0 || row === 7) {
        const color: PieceColor = row === 0 ? 'black' : 'white';
        if (col === 0 || col === 7) piece = { type: 'rook', color };
        else if (col === 1 || col === 6) piece = { type: 'knight', color };
        else if (col === 2 || col === 5) piece = { type: 'bishop', color };
        else if (col === 3) piece = { type: 'queen', color };
        else if (col === 4) piece = { type: 'king', color };
      }

      board[row][col] = { piece, position };
    }
  }
  
  return board;
};

export default function ChessBoard() {
  const [board, setBoard] = useState<Square[][]>(initializeBoard);
  const [selectedSquare, setSelectedSquare] = useState<{ row: number; col: number } | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<PieceColor>('white');
  const [moveHistory, setMoveHistory] = useState<string[]>([]);

  const handleSquareClick = (row: number, col: number) => {
    if (selectedSquare) {
      const fromPiece = board[selectedSquare.row][selectedSquare.col].piece;
      
      if (fromPiece && fromPiece.color === currentPlayer) {
        const newBoard = board.map(r => r.map(s => ({ ...s, piece: s.piece ? { ...s.piece } : null })));
        const toPiece = newBoard[row][col].piece;
        
        newBoard[row][col].piece = fromPiece;
        newBoard[selectedSquare.row][selectedSquare.col].piece = null;
        
        const moveNotation = `${board[selectedSquare.row][selectedSquare.col].position}-${board[row][col].position}`;
        setMoveHistory([...moveHistory, moveNotation]);
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');
      }
      
      setSelectedSquare(null);
    } else {
      const piece = board[row][col].piece;
      if (piece && piece.color === currentPlayer) {
        setSelectedSquare({ row, col });
      }
    }
  };

  const resetGame = () => {
    setBoard(initializeBoard());
    setSelectedSquare(null);
    setCurrentPlayer('white');
    setMoveHistory([]);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      <div className="flex-1">
        <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20">
          <div className="grid grid-cols-8 gap-0 w-full max-w-[600px] mx-auto aspect-square border-4 border-primary/30 rounded-lg overflow-hidden shadow-2xl">
            {board.map((row, rowIndex) =>
              row.map((square, colIndex) => {
                const isLight = (rowIndex + colIndex) % 2 === 0;
                const isSelected = selectedSquare?.row === rowIndex && selectedSquare?.col === colIndex;
                
                return (
                  <button
                    key={`${rowIndex}-${colIndex}`}
                    onClick={() => handleSquareClick(rowIndex, colIndex)}
                    className={`
                      aspect-square flex items-center justify-center text-5xl sm:text-6xl font-bold
                      transition-all duration-200 hover:scale-105 relative
                      ${isLight ? 'bg-muted/60' : 'bg-muted/30'}
                      ${isSelected ? 'ring-4 ring-primary animate-pulse-glow' : ''}
                      ${square.piece?.color === currentPlayer ? 'hover:bg-primary/20' : ''}
                    `}
                  >
                    {square.piece && (
                      <span className={`${square.piece.color === 'white' ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' : 'text-foreground/90'}`}>
                        {pieceSymbols[square.piece.color][square.piece.type]}
                      </span>
                    )}
                  </button>
                );
              })
            )}
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full ${currentPlayer === 'white' ? 'bg-white' : 'bg-foreground'} animate-pulse-glow`} />
              <span className="text-lg font-heading font-semibold">
                Ход: {currentPlayer === 'white' ? 'Белые' : 'Черные'}
              </span>
            </div>
            
            <Button onClick={resetGame} variant="outline" className="gap-2">
              <Icon name="RotateCcw" size={18} />
              Новая игра
            </Button>
          </div>
        </Card>
      </div>
      
      <Card className="w-full lg:w-80 p-6 bg-card/50 backdrop-blur-sm border-primary/20">
        <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
          <Icon name="History" size={24} className="text-primary" />
          История ходов
        </h3>
        
        <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
          {moveHistory.length === 0 ? (
            <p className="text-muted-foreground text-sm">Сделайте первый ход</p>
          ) : (
            moveHistory.map((move, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2 rounded-md bg-muted/30 animate-fade-in"
              >
                <span className="text-xs font-bold text-primary w-8">#{index + 1}</span>
                <span className="text-sm font-mono">{move}</span>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}
