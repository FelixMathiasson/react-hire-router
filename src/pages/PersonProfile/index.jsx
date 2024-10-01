import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

function PersonProfile({onSelection, hired}) {
  const [person, setPerson] = useState(null)
  const {id}=useParams()
  const loc = useLocation()
  const nav = useNavigate()

  useEffect(() => {
    setPerson(loc.state.person)
  }, [id, loc.state])
  if (!person) return <p>Loading...</p>

  const manageSelection = (wage) => {
    onSelection({...person, wage})
    nav('/')
  }

  return (
    <>
    {hired ? (
      <article>
        <h2>
          {person.name.first} {person.name.last}
        </h2>
        {/*edit form here later*/}
      </article>
    ) : (
      <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm className = 'form' person={person} onHire={manageSelection}/>
    </article>
    )}
    </>
  )
}

export default PersonProfile
