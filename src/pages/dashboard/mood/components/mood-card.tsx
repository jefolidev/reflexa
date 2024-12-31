import { useState } from 'react'
import arrowLeft from '../../../../assets/common-assets/arrow-left.svg'
import arrowRight from '../../../../assets/common-assets/arrow-right.svg'
import check from '../../../../assets/common-assets/check.svg'
import happy from '../../../../assets/emojis-card/happy-emotion.svg'

enum MoodEnum {
  'very_sad' = 'Muito Triste',
  'sad' = 'Triste',
  'neutral' = 'Neutro',
  'happy' = 'Feliz',
  'very_happy' = 'Muito Feliz',
}

enum ColorEnum {
  'very_sad' = '#373882',
  'sad' = '#4E8CFF',
  'neutral' = '#171717',
  'happy' = '#E4E452',
  'very_happy' = '#126D24',
}

interface MoodCardProp {
  index: number
  mood: MoodEnum
  color: ColorEnum
  status: boolean
}

export function MoodCard() {
  const [index, setIndex] = useState(1)

  const moods: { mood: MoodEnum; color: ColorEnum }[] = [
    { mood: MoodEnum.very_sad, color: ColorEnum.very_sad },
    { mood: MoodEnum.sad, color: ColorEnum.sad },
    { mood: MoodEnum.neutral, color: ColorEnum.neutral },
    { mood: MoodEnum.happy, color: ColorEnum.happy },
    { mood: MoodEnum.very_happy, color: ColorEnum.very_happy },
  ]

  const [cards, setCards] = useState<MoodCardProp[]>(
    moods.map((m, i) => ({
      index: i + 1,
      mood: m.mood,
      color: m.color,
      status: i + 1 === index,
    }))
  )

  const updateMoodCardIndex = (direction: 'increase' | 'decrease') => {
    const newIndex =
      direction === 'increase'
        ? (index % moods.length) + 1
        : ((index - 2 + moods.length) % moods.length) + 1

    setIndex(newIndex)
    setCards((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        status: card.index === newIndex,
      }))
    )
  }

  const currentCard = cards.find((card) => card.status)

  return (
    <div
      style={{ backgroundColor: currentCard?.color }}
      className="h-full flex-1 flex flex-col items-center justify-evenly rounded-2xl p-2"
    >
      <header>
        <h3 className="text-center">Como você está se sentindo hoje?</h3>
      </header>
      <div>
        <img src={happy} alt="" />
      </div>
      <span className="font-poppins text-white text-xl">
        Estou {currentCard?.mood}
      </span>
      <div className="flex gap-2">
        {cards.map((card) => {
          return card.status ? (
            <div
              key={card.color}
              className="bg-yellow-100 rounded-full w-1.5 h-1.5"
            />
          ) : (
            <div
              key={card.color}
              className="bg-stone-600 rounded-full w-1.5 h-1.5"
            />
          )
        })}
      </div>

      <div className="flex gap-2">
        <div className="flex gap-1">
          <button
            type="button"
            className="btn-main btn-default btn-default w-8 h-8"
            onClick={() => updateMoodCardIndex('decrease')}
          >
            <img src={arrowLeft} alt="" />
          </button>
          <button
            type="button"
            className=" btn-main btn-default w-8 h-8"
            onClick={() => updateMoodCardIndex('increase')}
          >
            <img src={arrowRight} alt="" />
          </button>
        </div>
        <button type="button" className=" btn-main btn-default w-8 h-8">
          <img src={check} alt="" className="" />
        </button>
      </div>
    </div>
  )
}
