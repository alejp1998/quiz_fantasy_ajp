'use strict';

module.exports = {
  up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('quizzes', [
      {   
          choice: false, 
          question: 'Who invented the telephone?',
          answer: 'Bell',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          choice: false,
          question: 'Which nail grows fastest?',
          answer: 'Middle',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'What temperature does water boil at?',
          answer: '100C',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'Who discovered penicillin?',
          answer: 'Fleming',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'What Spanish artist said he would eat his wife when she died? ',
          answer: 'Dali',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'Who wrote Julius Caesar, Macbeth and Hamlet?',
          answer: 'Shakespeare',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: ' Who wrote Lazarillo de Tormes?',
          answer: 'anonymous',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'What did the crocodile swallow in Peter Pan',
          answer: 'alarm clock',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'Where was Lope de Vega born?',
          answer: 'Madrid',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'Who did Lady Diana Spencer marry?',
          answer: 'Prince Charles',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'Where is Mulhacen?',
          answer: 'Granada Spain',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'How many states are there in the United States of America?',
          answer: '50',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'Which river passes through Madrid?',
          answer: 'Manzanares',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'Which German city is famous for the perfume it produces? ',
          answer: 'Cologne',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'Who did Prince Rainier of Monaco marry?',
          answer: 'Grace Kelly',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'What year did the Spanish Civil War end?',
          answer: '1939',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'When did the First World War start?',
          answer: '1914',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'What did Joseph Priesley discover in 1774?',
          answer: 'Oxygen',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'Where is the smallest bone in the body',
          answer: 'ear',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'Which is the only mammal that can’t jump',
          answer: 'elephant',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'What does the roman numeral C represent?',
          answer: '100',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'What colour is a panda?',
          answer: 'black and white',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          choice: false,
          question: 'What nationality was Chopin?',
          answer: 'Polish',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          choice: false,
          question: 'What’s the best known artificial international language?',
          answer: 'esperanto',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          choice: false,
          question: 'Who lived at 221B, Baker Street, London?',
          answer: 'Sherlock Holmes',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: false,
          question: 'Who cut Van Gogh’s ear?',
          answer: 'he did',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          choice: false,
          question: 'Where did Salvador Dali live?',
          answer: 'Figueras',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          choice: false,
          question: 'Who painted the Mona Lisa?',
          answer: 'Da Vinci',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      { 
          choice: false,
          question: 'How many dots are there on two dice?',
          answer: '42',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          choice: false,
          question: 'What horoscope sign has a crab?',
          answer: 'Cancer',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      { 
          choice: false,
          question: 'What are the first three words of the bible?',
          answer: 'In the beginning',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      { 
          choice: false,
          question: 'Where was Christopher Columbus born?',
          answer: 'Genoa',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          choice: false,
          question: 'When did the American Civil War end?',
          answer: '1865',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          choice: false,
          question: 'What did the 7 dwarves do for a job?',
          answer: 'miners',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: true,
          question: 'What is used to play mahjong?',
          answer: 'tiles',
          answer1: 'tiles',
          answer2: 'chess pieces',
          answer3: 'cards',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: true,
          question: 'What is mortadella?',
          answer: 'sausage',
          answer1: 'bread',
          answer2: 'sausage',
          answer3: 'cheese',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: true,
          question: 'In ancient Egypt, how did Pharaohs keep flies at bay?',
          answer: 'They smeared honey on their servants',
          answer1: 'They burned inciense',
          answer2: 'They ate a diet rich in garlic and onion to repel them naturally',
          answer3: 'They smeared honey on their servants',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: true,
          question: 'Before getting into politics, Abraham Lincoln was a...',
          answer: 'Champion wrestler',
          answer1: 'Circus performer',
          answer2: 'Champion wrestler',
          answer3: 'Butcher',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: true,
          question: 'In Renaissance France, a woman could take her husband to court if he was ...',
          answer: 'Impotent',
          answer1: 'Impotent',
          answer2: 'Caught being unfaithful',
          answer3: 'Bankrupt',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: true,
          question: 'All British tanks since 1945 have included equipment to do what?',
          answer: 'Make tea',
          answer1: 'Store hazardous materials',
          answer2: 'Acommodate a suport dog',
          answer3: 'Make tea',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {   
          choice: true,
          question: 'Which of the following leaders has been nominated for a Nobel Peace Prize?',
          answer: 'Both',
          answer1: 'Adolph Hitler',
          answer2: 'Joseph Stalin',
          answer3: 'Both',
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ]);
  },

  down(queryInterface, Sequelize) {

    return queryInterface.bulkDelete('quizzes', null, {});
  }
};
