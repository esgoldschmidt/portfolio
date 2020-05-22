import Background from '../../resources/background.png' 

export default {
    colorContainer:{
        //backgroundColor: '#fa5f3d',
        background: 'linear-gradient(180deg, #788e7b, #fc733f)',
        //backgroundColor: '#fc733f',
        height: '100vh',
    },
    splashContainer: {
        //height: '100vh'
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashText: {
        fontFamily: 'Quicksand',
        fontSize: '27vw',
        background: 'linear-gradient(#ffffff00, aqua)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        letterSpacing: '-10px',
        lineHeight: '150%'
        
    },
    transitionContainer: {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',

    }
}