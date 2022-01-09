import React from 'react'

export const Answer = ({ answer }) => (
  <aside className="answer">
    <section>
      <p style={{textAling: 'left'}}>{answer.answer}</p>
    </section>
    <section>
      <button>Votar</button>
    </section>
  </aside>
)
