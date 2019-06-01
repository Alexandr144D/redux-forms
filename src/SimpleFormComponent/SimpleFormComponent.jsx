import React from 'react';
import {Field, reduxForm} from 'redux-form';
import renderField from './renderField';
import {validate} from './validation';


class SimpleFormComponent extends React.Component {

    handleSubmit(values) {
        console.log(JSON.stringify(values))
    }

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;
        return (
            <form className='simple-form' onSubmit={handleSubmit(this.handleSubmit)}>
                <h1 className='form-name'>Simple Form</h1>
                <Field type="text" name="userName" label="userName" component={renderField}/>
                <Field type="email" name="userEmail" label="userEmail" component={renderField}/>
                <Field type="number" name="userAge" label="userAge" component={renderField}/>
                <div className="btn-wrapper">
                    <button
                        disabled={submitting}
                        type="submit">Submit
                    </button>
                    <button
                        disabled={pristine || submitting}
                        onClick={reset}
                    >Clear Values
                    </button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'simpleForm',
    validate
})(SimpleFormComponent)
