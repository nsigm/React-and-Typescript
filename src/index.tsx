import ReactDOM from 'react-dom';
import UserSearch from './refs/UserSearch';
// import EventComponent from './events/EventComponent';
// import UserSearch from './state/UserSearch';
// import GuestList from './state/GuestList';

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <UserSearch/>
      {/* <EventComponent/> */}
      {/* <UserSearch/> */}
      {/* <GuestList/> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
