import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {  fetchQuestion, postAnswer } from '../actions/questionActions'
import { connect } from 'react-redux'
import { Question } from '../components/Question'
import JoditEditor from 'jodit-react'
import firebase from '../firebase/firebase_config'

const FormPage = ({ dispatch, loading, redirect, match,hasErrors, question, userId }) => {
    const { register, handleSubmit } = useForm();
    const { id } = match.params
     const [content, setContent] = useState("");
    const history = useHistory();

    const onSubmit = data => {
        if(content != ""){
            data.userId =  userId;
            data.answer = content.slice(3, -4)
            data.questionId = id;
            dispatch(postAnswer(data));
        }    
    };

    useEffect(() => {
        dispatch(fetchQuestion(id))
    }, [dispatch, id])

    useEffect(() => {
        if (redirect) {
            history.push(redirect);
        }
    }, [redirect, history])

    const renderQuestion = () => {
        if (loading.question) return <p>Loading question...</p>
        if (hasErrors.question) return <p>Unable to display question.</p>

        return <Question question={question} />
    }


    return (
        <section>
            {renderQuestion()}
            <h1>New Answer</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label for="answer">Answer</label>
                    <JoditEditor
                        id="question"
                        tabIndex={1}
                        onBlur={newContent => setContent(newContent)} 
                        //onChange={newContent => {setContent(newContent)}}
                    />
                </div>
                <button type="submit" className="button" disabled={loading} >{
                    loading ? "Saving ...." : "Save"
                }</button>
            </form>
        </section>

    );
}

const mapStateToProps = state => ({
    loading: state.question.loading,
    redirect: state.question.redirect,
    question: state.question.question,
    hasErrors: state.question.hasErrors,
    userId: state.auth.uid
})

export default connect(mapStateToProps)(FormPage)