import React from 'react'

export default function Preloader() {
    return (
        <div>
            <div style={styles.divLoader}>
                <div>Selecione um marketplace no menu acima.</div>
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    divLoader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px',
        width: 'auto'
    }
}
