import { useState } from "react";
import Card from "./Card";


export default function GameBoard() {
  const cardArray = []
  const selectedCards = []

  // array holding values displayed in the game - amount of cards rendered will always be a double of the amount of values inside
  const cardContentItems = ['1', '2', '3', '4', '5', '6', '7', '8']
  const returnPairs = (arr) => {
    const pairs = []
    for (const item of arr) {
      const pair = [item, item]
      pairs.push(...pair)
    }
    return pairs
  }
  const populateBoard = () => {
    for (let i = 0; i < (cardContentItems.length * 2); i++) {
      cardArray.push(<Card key={i + 1} content={returnPairs(cardContentItems)[i]} />)
    }
    // randomize order in which elements are in the array, so they don't always render the same
    const shuffleValues = () => {
      for (let i = cardArray.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        if (j) {
          [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]]
        }
      }
    }
    shuffleValues()
    console.log(cardArray)
  }
  const addToSelected = (element) => {
    selectedCards.push(element)
    console.log(selectedCards)
  }


  populateBoard()
  console.log(returnPairs(cardContentItems))
  return (
    <section className="game_board">
      {cardArray.map((e) => {
        return (<Card onClick={() => addToSelected(e.props.content)} key={e.key} content={e.props.content} ></Card >)
      })}
    </section >

  )
}
/*
1) need for cards to have an active state
2) need for this state to be detectable by board
3) board must detect state of different cards (up to 2 at once)
4) board must compare the state to judge if a match is found
*/
