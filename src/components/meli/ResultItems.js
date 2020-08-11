import React, {useState} from 'react'

export default function ResultItems({onGetResult}) {
    let stringfyResult = JSON.stringify(onGetResult)
    console.log(onGetResult)

    return (
        <div>
            {stringfyResult}
 {/*            {onGetResult.length > 0 && onGetResult.foreach((res) => {
                return (
                    res
                )
            })} */}
        </div>
    )
}