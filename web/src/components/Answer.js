import React from 'react'

export const Answer = ({ answer, userId, questionId, onDelete }) => (
  <aside className="answer">
    <section>
      <p style={{textAling: 'left'}}>{answer.answer}</p>
    </section>
    <section>
      {userId === answer.userId ?
        <button className='btn btn-danger' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1">
          DELETE
        </button>
        : null
      }
    </section>
    <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"><b>Mensaje de confirmación.</b></h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>¿Estás seguro que deseas eliminar está respuesta?</p>
          </div>
          <div className="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => onDelete(answer.questionId, questionId)}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </aside>
)
