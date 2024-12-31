import { useState } from 'react'
import arrowLeft from '../../../../assets/common-assets/arrow-left.svg'
import arrowRight from '../../../../assets/common-assets/arrow-right.svg'
import check from '../../../../assets/common-assets/check.svg'

import depressionEmoji from '../../../../assets/emojis-card/depression-emotion.svg'
import excitedEmoji from '../../../../assets/emojis-card/excited-emotion.svg'
import happyEmoji from '../../../../assets/emojis-card/happy-emotion.svg'
import neutralEmoji from '../../../../assets/emojis-card/neutral-emotion.svg'
import sadEmoji from '../../../../assets/emojis-card/sad-emotion.svg'

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
  'very_happy' = '#dede6a',
}

const EmojiEnum = {
  very_sad: depressionEmoji,
  sad: sadEmoji,
  neutral: neutralEmoji,
  happy: happyEmoji,
  very_happy: excitedEmoji,
} as const

type Mood = keyof typeof EmojiEnum

interface MoodCardProp {
  index: number
  mood: MoodEnum
  color: ColorEnum
  emoji: (typeof EmojiEnum)[Mood]
  status: boolean
}

export function MoodCard() {
  const [index, setIndex] = useState(1)
  const [moods, setMoods] = useState<MoodCardProp[]>([
    {
      index: 1,
      mood: MoodEnum.very_sad,
      color: ColorEnum.very_sad,
      emoji: EmojiEnum.very_sad,
      status: true,
    },
    {
      index: 2,
      mood: MoodEnum.sad,
      color: ColorEnum.sad,
      emoji: EmojiEnum.sad,
      status: false,
    },
    {
      index: 3,
      mood: MoodEnum.neutral,
      color: ColorEnum.neutral,
      emoji: EmojiEnum.neutral,
      status: false,
    },
    {
      index: 4,
      mood: MoodEnum.happy,
      color: ColorEnum.happy,
      emoji: EmojiEnum.happy,
      status: false,
    },
    {
      index: 5,
      mood: MoodEnum.very_happy,
      color: ColorEnum.very_happy,
      emoji: EmojiEnum.very_happy,
      status: false,
    },
  ])

  function getMoodIndex(index: number) {
    const moods = [
      MoodEnum.very_sad,
      MoodEnum.sad,
      MoodEnum.neutral,
      MoodEnum.happy,
      MoodEnum.very_happy,
    ]

    const colors = [
      ColorEnum.very_sad,
      ColorEnum.sad,
      ColorEnum.neutral,
      ColorEnum.happy,
      ColorEnum.very_happy,
    ]

    const emojiIcons = [
      EmojiEnum.very_sad,
      EmojiEnum.sad,
      EmojiEnum.neutral,
      EmojiEnum.happy,
      EmojiEnum.very_happy,
    ]

    return {
      mood: moods[index - 1],
      color: colors[index - 1],
      emoji: emojiIcons[index - 1],
    }
  }

  function updateMoodCardIndex(direction: 'increase' | 'decrease') {
    const newIndex =
      direction === 'increase'
        ? index >= 5
          ? 1
          : index + 1
        : index <= 1
          ? 5
          : index - 1

    setIndex(newIndex)

    setMoods((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        status: card.index === newIndex,
      }))
    )
  }

  const { mood, color, emoji } = getMoodIndex(index)

  return (
    <div
      style={{ backgroundColor: color }}
      className="h-full flex-1 flex flex-col items-center justify-evenly rounded-2xl p-2"
    >
      <header>
        <h3 className="text-center">Como você está se sentindo hoje?</h3>
      </header>
      <div>
        <img src={emoji} alt="" />
      </div>
      <span className="font-poppins text-white text-xl">Estou {mood}</span>
      <div className="flex gap-2">
        {moods.map((card) => {
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
