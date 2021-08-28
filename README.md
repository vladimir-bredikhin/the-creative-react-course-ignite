Things learnt during current project:

- redux concepts and the idea of state management
- redux-thunk to add async functionality to redux which is sync in its nature

Things made in different way:

- project generated with `yarn create @vitejs/app`
- using TypeScript
- environment variables used in [vite way](https://vitejs.dev/guide/env-and-mode.html)
- add local simple express proxy to bypass CORS issues and not publishing the API KEY (uncommited)
- used 'gap' CSS property for Games grid
- using useParams from react-router-dom instead of splitting pathname by / in Home component

Thing might be improved:

- use [Redux Toolkit](https://redux-toolkit.js.org/) for initial redux setup
- split fetch games to separate actions
- make game actions a type like 'FETCH_GAMES | FETCH_GAME_DETAILS'

To fix:
