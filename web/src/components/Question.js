import React from 'react'
import { Link } from 'react-router-dom'

export const Question = ({ question, excerpt, onDelete }) => (
  <article className={excerpt ? 'question-excerpt' : 'question'}>
    <h2>{question.question}</h2>
    <p>{question.category}  - <small>{question.type}</small></p>
    {onDelete && (
      <button className="button right" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        DELETE
      </button>
    )}
    {excerpt && (
      <Link to={`/question/${question.id}`} className="button">
        View Question
      </Link>
    )}
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"><b>Mensaje de confirmación.</b></h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>¿Estás seguro que deseas eliminar está pregunta?</p>
          </div>
          <div className="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => onDelete(question.id)}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </article>
)
