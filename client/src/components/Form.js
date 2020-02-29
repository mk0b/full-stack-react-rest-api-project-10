//exports a function that renders validation errors
//also handles submit and cancel buttons for forms
//try to rename it but form makes the most sense.
import React from 'react';

//TODO: Check after and make sure css lines up.

export default (props) => {
    const {
        cancel,
        errors,
        submit,
        submitButtonText,
        elements,
    } = props;

    function handleSubmit(event) {
        event.preventDefault();
        submit();
    }

    function handleCancel(event) {
        event.preventDefault();
        cancel();
    }

    return (
        <div>
        <ErrorsDisplay errors={errors} />
        <form onSubmit={handleSubmit}>
            {elements()}
            <div className="grid-100 pad-bottom">
            <button className="button" type="submit">{submitButtonText}</button>
            <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
        </div>
    );
}

function ErrorsDisplay({ errors }) {
  let errorsDisplay = null;
  console.log('Errors:', errors);
  console.log('Errors:', typeof errors);
  if (errors.length && typeof errors !== 'string') {
    errorsDisplay = (
      <div>
        <h2 className="validation--errors--label">Validation errors</h2>
        <div className="validation-errors">
          <ul>
            {errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </div>
      </div>
    );
  } else {
    errorsDisplay = (
      <div>
        <h2 className="validation--errors--label">Validation errors</h2>
        <div className="validation-errors">
          <ul>
            <li key={1}>{errors}</li>
          </ul>
        </div>
      </div>
    );
  }

  return errorsDisplay;
}