import PeopleListItem from './PeopleListItem'

function PeopleList({people, hired}) {

  return (
    <ul>
      {people.map((person) => (
        <PeopleListItem key={person.email} person={person} hired={hired} />
      ))}
    </ul>
  )
}

export default PeopleList
