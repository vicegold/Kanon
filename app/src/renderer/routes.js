export default [
  {
    path: '/',
    name: 'player',
    component: require('components/Player')
  },
  {
    path: '*',
    redirect: '/'
  }
]
