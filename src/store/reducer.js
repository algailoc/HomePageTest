export const initialState = {
  lessons: [
    {
      id: 1,
      title: 'Фонетика и графика',
      image: require('../../assets/image/Book.png'),
      time: '0 ч 55 мин',
    },
    {
      id: 2,
      title: 'Словарный запас',
      image: require('../../assets/image/Vocabular.png'),
      time: '32 д 1 ч 15 мин',
    },
    {
      id: 3,
      title: 'Грамматика',
      image: require('../../assets/image/Diploma.png'),
      time: '0 ч 25 мин',
    },
    {
      id: 4,
      title: 'Словарь',
      image: require('../../assets/image/Dictionary.png'),
      time: '0 ч 25 мин',
    },
    {
      id: 5,
      title: 'Общение',
      image: require('../../assets/image/Conversation.png'),
      time: '3 ч 18 мин',
    },
  ],
  latest: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return {
        ...state,
        latest: state.lessons[0],
      };
    }
  }
};
