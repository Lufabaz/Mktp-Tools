import React from 'react'
import css from './resultitems.module.css'

/* import * as pretty from '../../Helpers/jsonBeauty.ts'
import parse from 'html-react-parser' */
import JSONPretty from 'react-json-pretty'
import acai from 'react-json-pretty/themes/acai.css';

export default function ResultItems({onGetResult}) {
/*     let stringResult = JSON.stringify(onGetResult)
    let stringPretty = pretty.prettyJson(onGetResult)
    let htmlParse = parse(stringPretty) */

 /*    let htmlParse = parse(onGetResult)
    let stringPretty = pretty.prettyJson(onGetResult)
    let highligth = pretty.syntaxHighlight(stringPretty)
    
    console.log(typeof onGetResult) */
/*     console.log(htmlParse)
 */

    return (
        <div className={css.content}>
            <hr style={styles.hr} />
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

const styles = {
    div: {
        width: 'auto',
    },
    string: {
        color: 'green' 
    },
    number: {
        color: 'darkorange'
    },
    boolean: {
        color: 'blue'
    },
    null: {
        color: 'magenta'
    },
    key: {
        color: 'red'
    },
    hr: {
        width: 'auto',
        border: '1px solid lightgray'
    }
}

