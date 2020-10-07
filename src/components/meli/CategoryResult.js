import React from 'react'
import css from './categoryresult.module.css'
import JSONPretty from '../../Helpers/react-json-pretty'
import acai from '../../Helpers/react-json-pretty/themes/acai.css'

export default function CategoryResult({ onGetResult }) {
    return (
        <div className={css.content}>
            <hr style={css.hr} />
            <div className={css.tabcontents}>
                <section>
                    <span className={css.collapsible}>
                        <JSONPretty data={onGetResult} theme={acai}></JSONPretty>
                    </span>
                </section>
            </div>
        </div>
    )
}
