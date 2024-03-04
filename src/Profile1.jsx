import { getImageUrl } from './utils.jsx';

let currentPerson;

export default function Profile1({ person }) {
  currentPerson = person;
  return (
    <div>
      <Header />
      <Avatar />
    </div>
  )
}

function Header() {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar() {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}
