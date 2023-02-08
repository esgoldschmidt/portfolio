
export default {
    colorContainer:{
        background: 'linear-gradient(0deg, #e7eeed, #f7ecb7, #f7ecb7, #f7ecb7, #f7ecb7)', // e2cd31 fee731 //#ffe100
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
        //lineHeight: '150%',
        position: 'absolute',
        zIndex: '2',
        textAlign: 'center',
        top: '6rem',
    },
    splashStack: {
        position: 'absolute',
        top: '10rem',
        zIndex: '1',
        width: '100%',
        maxWidth: '500px',
        textAlign: 'center'
    },
    transitionContainer: {
        backgroundColor: '#e7eeed',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
    },
}