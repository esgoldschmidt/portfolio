

export default {
    colorContainer:{
        background: 'linear-gradient(0deg, #e7eeed, #cc9bd9, #cc9bd9, #cc9bd9, #cc9bd9)', //#6119c0
        height: '100vh',
        minHeight: '650px'
    },
    splashContainer: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    },
    splashText: {
        fontFamily: 'Quicksand',
        fontSize: '27vw',
        color: 'linear-gradient(white, #f2f2f2)',
        background: 'linear-gradient(gray, #ffffff, gray)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        letterSpacing: '-9px',
        //lineHeight: '170%',
        position: 'absolute',
        zIndex: '2',
        textAlign: 'center',
        top: '6rem',
    },
    splashStack: {
        position: 'absolute',
        top: '33%',
        left: '0%',
        zIndex: '1',
        width: '50%',
        maxWidth: '500px',
        minWidth: '350px'
    },
    transitionContainer: {
        backgroundColor: '#e7eeed',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1em 0 0 0 '
    },
    resume: {
        maxWidth: '816px',
        width: '100%',
        height: 'auto',
        minWidth: '390px',
        borderRadius: '1em',
        boxShadow: '4px 0 8px 0 rgba(0, 0, 0, 0.2), 6px 0 20px 0 rgba(0, 0, 0, 0.19)',
        margin: '1em'

        
    }
}