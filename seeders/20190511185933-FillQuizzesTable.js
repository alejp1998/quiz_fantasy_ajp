'use strict';

module.exports = {
  up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('quizzes', [
      {
          question: 'Who invented the telephone?',
          answer: 'Bell',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Which nail grows fastest?',
          answer: 'Middle',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'What temperature does water boil at?',
          answer: '100C',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Who discovered penicillin?',
          answer: 'Fleming',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'What Spanish artist said he would eat his wife when she died? ',
          answer: 'Dali',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Who wrote Julius Caesar, Macbeth and Hamlet?',
          answer: 'Shakespeare',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: ' Who wrote Lazarillo de Tormes?',
          answer: 'anonymous',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'What did the crocodile swallow in Peter Pan',
          answer: 'alarm clock',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Where was Lope de Vega born?',
          answer: 'Madrid',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Who did Lady Diana Spencer marry?',
          answer: 'Prince Charles',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Where is Mulhacen?',
          answer: 'Granada Spain',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'How many states are there in the United States of America?',
          answer: '50',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Which river passes through Madrid?',
          answer: 'Manzanares',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Which German city is famous for the perfume it produces? ',
          answer: 'Cologne',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Who did Prince Rainier of Monaco marry?',
          answer: 'Grace Kelly',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'What year did the Spanish Civil War end?',
          answer: '1939',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'When did the First World War start?',
          answer: '1914',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'What did Joseph Priesley discover in 1774?',
          answer: 'Oxygen',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Where is the smallest bone in the body',
          answer: 'ear',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Which is the only mammal that can’t jump',
          answer: 'elephant',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'What does the roman numeral C represent?',
          answer: '100',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'What colour is a panda?',
          answer: 'black and white',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'What nationality was Chopin?',
          answer: 'Polish',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'What’s the best known artificial international language?',
          answer: 'esperanto',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Who lived at 221B, Baker Street, London?',
          answer: 'Sherlock Holmes',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Who cut Van Gogh’s ear?',
          answer: 'he did',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Where did Salvador Dali live?',
          answer: 'Figueras',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Who painted the Mona Lisa?',
          answer: 'Da Vinci',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'How many dots are there on two dice?',
          answer: '42',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'What horoscope sign has a crab?',
          answer: 'Cancer',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'What are the first three words of the bible?',
          answer: 'In the beginning',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Where was Christopher Columbus born?',
          answer: 'Genoa',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'When did the American Civil War end?',
          answer: '1865',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'What did the 7 dwarves do for a job?',
          answer: 'miners',
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ]);
  },

  down(queryInterface, Sequelize) {

    return queryInterface.bulkDelete('quizzes', null, {});
  }
};
