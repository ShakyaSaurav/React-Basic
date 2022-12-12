import React from 'react'
import Person from './Person'
function NameList() {
    const names=['saurav', 'saugat', 'aman']
    const persons=[
        {
            id:1,
            name:'Saurav',
            age:23,
            job:'react',
        },
        {
            id:2,
            name:'Aman',
            age:23,
            job:'.net',
        },
        {
            id:3,
            name:'saugat',
            age:28,
            job:'wordpress',
        }
    ]
    //const personList= persons.map(person=><Person key={person.id} person={person}/>
    //)
    const nameList = names.map(name=><h2>{name}</h2>)
  return (
    <div>
        {nameList}
    </div>
  )
}

export default NameList