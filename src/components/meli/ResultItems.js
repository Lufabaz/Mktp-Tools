import React from 'react'
/* import * as pretty from '../../Helpers/jsonBeauty.ts' */

export default function ResultItems({onGetResult}) {
/*     let stringPretty = pretty.prettyJson(onGetResult)
    let highligth = pretty.syntaxHighlight(stringPretty)
    let convertToString = JSON.stringify(highligth)
    console.log(highligth) */

    console.log(onGetResult)

    return (
        <div>
            <div style={styles.div}>
                {onGetResult}
            </div>
        </div>
    )
}

const styles = {
    div: {
        width: '970px',
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
    }
}