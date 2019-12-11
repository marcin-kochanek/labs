import React from 'react';
import MultiStep from '../components/MultiStep/MultiStep';

const Contact = () => {
    return (
        <MultiStep.Wizard>
            <MultiStep.Page pageIndex={1}>
                <div className="box">
                    <p className="title">
                        What's your name?
                    </p>
                    <input type="text" name="name" placeholder="name" />
                </div>
            </MultiStep.Page>
            <MultiStep.Page pageIndex={2}>
                <div className="box">
                    <p className="title">
                        And your last name?
                    </p>
                    <input type="text" name="lastName" placeholder="last name" />
                </div>
            </MultiStep.Page>
            <MultiStep.Page pageIndex={3}>
                <div className="box">
                    <p className="title">
                        What about your e-mail?
                    </p>
                    <input type="text" name="email" placeholder="email" />
                </div>
            </MultiStep.Page>
            <br />
            <MultiStep.Controls />
        </MultiStep.Wizard>
    )
}

export default Contact;