import Background from '../../resources/backgroundYellow.png'

export default {
    colorContainer:{
        background: 'linear-gradient(180deg, #788e7b, #fee731)',
        height: '100vh',
    },
    splashContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    splashText: {
        fontFamily: 'Quicksand',
        fontSize: '27vw',
        color: 'linear-gradient(white, #f2f2f2)',
        background: 'linear-gradient(#ffffff00, aqua)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        letterSpacing: '-15px',
        lineHeight: '150%'
    },
    transitionContainer: {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
    },
}