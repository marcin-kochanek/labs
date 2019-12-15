import React from 'react';
import cx from "classnames";
import styles from "./Contact.module.scss";
import MultiStep from '../components/MultiStep/MultiStep';

const Contact = () => {
    return (
        <div className="columns is-centered">
            <div className="column is-half">
                <MultiStep.Wizard>
                    <MultiStep.ProgressBar />
                    <MultiStep.Page pageIndex={1}>
                        <div className={cx("box", [styles.box])}>
                            <p className="title">
                                What's your name?
                            </p>
                            <input className="input" type="text" name="name" placeholder="name" />
                        </div>
                    </MultiStep.Page>
                    <MultiStep.Page pageIndex={2}>
                        <div className={cx("box", [styles.box])}>
                            <p className="title">
                                And your last name?
                            </p>
                            <input className="input" type="text" name="lastName" placeholder="last name" />
                        </div>
                    </MultiStep.Page>
                    <MultiStep.Page pageIndex={3}>
                        <div className={cx("box", [styles.box])}>
                            <p className="title">
                                What about your e-mail?
                            </p>
                            <input className="input" type="text" name="email" placeholder="email" />
                        </div>
                    </MultiStep.Page>
                    <br />
                    <MultiStep.Controls />
                </MultiStep.Wizard>
            </div>
        </div>
    )
}

export default Contact;