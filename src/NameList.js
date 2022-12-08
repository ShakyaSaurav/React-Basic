import React from 'react'

function NameList() {
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
    const personList= persons.map(person=>(
        <h2> I am {person.name} and {person.age} years old. i work with {person.job}</h2>
    ))
  return (
    <div>
        {personList};
    </div>
  )
}

export default NameList