
export default {
    colorContainer:{
        background: 'linear-gradient(0deg, #e7eeed, #fe968a, #fe968a, #fe968a, #fe968a)', //#fc733f
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
        background: 'linear-gradient(gray, #ffffff, gray)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        //lineHeight: '170%',
        position: 'absolute',
        top: '6rem',
        zIndex: '2',
        textAlign: 'center'
        
    },
    splashStack: {
        position: 'absolute',
        top: '13rem',
        zIndex: '1',
        width: '100%',
        maxWidth: '450px',
        textAlign: 'center'
    },
    transitionContainer: {
        backgroundColor: '#e7eeed',
        //backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',

    }
}