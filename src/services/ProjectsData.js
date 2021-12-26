import triviaImg from '../assets/projects/trivia-game-pedro-guarize.png';
import musicAppImg from '../assets/projects/trybetunes-preview.png';
import topTrumpsImg from '../assets/projects/tryunfo-preview2.png';
import flexblogImg from '../assets/projects/flexblog.png';
import expensesManagerImg from '../assets/projects/expenses-manager-login.png';
import todoListImg from '../assets/projects/todo-list-guarize.png';

const portfolio = [
  {
    name: 'Music App',
    image: musicAppImg,
    description:
      'In this project I created an application capable of playing music from a wide variety of bands and artists, creating a list of favorite songs and editing the logged in user`s profile.',
    tools: ['React', 'CSS'],
    liveProject: 'https://guarize-music-app.vercel.app/',
    githubCode: 'https://github.com/guarize/music-app-react',
  },
  {
    name: 'Expenses Manager',
    image: expensesManagerImg,
    description:
      'In the Expenses Manager project I developed an expense control wallet with a currency converter.',
    tools: ['React', 'Redux', 'CSS'],
    liveProject: 'https://expenses-manager.vercel.app/',
    githubCode: 'https://github.com/guarize/expenses-manager',
  },
  {
    name: 'ToDo List',
    image: todoListImg,
    description:
      'This is a solution to the Todo app challenge on Frontend Mentor',
    tools: ['React', 'Hooks', 'CSS'],
    liveProject: 'https://todo-list-guarize.vercel.app/',
    githubCode: 'https://github.com/guarize/todo-list-2.0',
  },
  {
    name: 'Flexblog',
    image: flexblogImg,
    description:
      'This was the first responsive website I developed only using Flexbox, in order to practice my CSS skills.',
    tools: ['HTML', 'CSS'],
    liveProject: 'https://guarize.github.io/projetos/flexblog/',
    githubCode: 'https://github.com/guarize/flexblog',
  },
  {
    name: 'Trivia Game',
    image: triviaImg,
    description:
      'This was a group project in which we developed a trivia-based quiz game using React and Redux, developing its functionality in groups according to the demands defined in a Kanban board.',
    tools: ['React', 'Redux', 'CSS'],
    liveProject: 'https://trivia-game-drab.vercel.app/',
    githubCode: 'https://github.com/guarize/trivia-game-react',
  },
  {
    name: 'Top Trumps',
    image: topTrumpsImg,
    description: `This was the second React project developed during Trybe's Front-End module. 
    A digital version of Top Trumps written in react, in which you are able to create and save custom cards.`,
    tools: ['React', 'CSS'],
    liveProject: 'https://guarize-music-app.vercel.app/',
    githubCode: 'https://github.com/guarize/music-app-react',
  },
];

export default portfolio;
