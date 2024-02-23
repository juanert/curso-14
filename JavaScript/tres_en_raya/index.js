class TikTakToe {
  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.turn = 0;
    this.buttons = document.querySelectorAll("button");
  }

  play(x, y) {
    if (this.board[x][y] === "") {
      this.board[x][y] = this.turn % 2 === 0 ? "X" : "O";
      if (this.checkWinner()) {
        document.getElementById("message").innerText = `Player ${
          this.turn % 2 === 0 ? "X" : "O"
        } wins!`;
      } else if (this.tie()) {
        document.getElementById("message").innerText = "It's a tie!";
      }
      let button_number = x * 3 + y;
      this.buttons[button_number].innerText = this.board[x][y];
      this.turn++;
    }
  }

  checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] !== "" &&
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2]
      ) {
        // Return true if there is a winner
        return true;
      }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        this.board[0][i] !== "" &&
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i]
      ) {
        // Return true if there is a winner
        return true;
      }
    }
    // Check diagonal left to right
    if (
      this.board[0][0] !== "" &&
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2]
    ) {
      // Return true if there is a winner
      return true;
    }
    // Check diagonal right to left
    if (
      this.board[0][2] !== "" &&
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0]
    ) {
      // Return true if there is a winner
      return true;
    }
  }

  tie() {
    let tie = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === "") {
          tie = false;
        }
      }
    }
    return tie;
  }

  reset() {
    for (let i = 0; i < 9; i++) {
      this.buttons[i].innerText = "";
    }
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.turn = 0;
    document.getElementById("message").innerText = "";
  }
}

let game = new TikTakToe();
