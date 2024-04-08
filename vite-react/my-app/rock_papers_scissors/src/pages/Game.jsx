import options from "../Resources/js/options";
import propTypes from "prop-types";

function Game() {
  return (
    <section>
      <h1>Rock Papers and Scissors</h1>
      <Container>
        {options.map((option, index) => (
          <button onClick={() => {play(option.emoji)}} key={index}>{option.emoji}</button>
        ))}
      </Container>
    </section>
  );
}

function Container({children}){
  return(
    <div>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: propTypes.node
}

function play(choice){
  const randomOption = options[Math.floor(Math.random() * options.length)];
  if(choice === randomOption.emoji){
    alert(`It's a tie! You both chose ${choice}!`);
  } else if((choice == "✊🏻" && randomOption.emoji == "✌🏻") || (choice == "✌🏻" && randomOption.emoji == "✋🏻") || (choice == "🤚🏻" && randomOption.emoji == "✊🏻")){
    alert(`You win! You chose ${choice} and the computer chose ${randomOption.emoji}!`);
  } else {
    alert(`You lose! You chose ${choice} and the computer chose ${randomOption.emoji}!`);
  }
}

export default Game;
