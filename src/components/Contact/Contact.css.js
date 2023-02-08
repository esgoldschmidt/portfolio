import map from '../../resources/map.png'

export default {
    colorContainer:{
        background: 'linear-gradient(0deg, #e7eeed, #fec478, #fec478, #fec478, #fec478)', //#ff9d00
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
        letterSpacing: '-5px',
        //lineHeight: '170%',
        position: 'absolute',
        top: '6rem',
        zIndex: '2'
    },
    splashStack: {
        position: 'absolute',
        top:'25%',
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
    map:{
        width: "100%",
        height: "350px",
        backgroundImage: `url(${map})`,
        backgroundSize: 'cover',
        backgroundPosition: ' right',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        //margin: '1em',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '.5em'
        
    },
    blend: {
        backgroundColor: 'rgba(0,0,0,.1)',
        height: '400px',
        padding: '1em',
        borderRadius: '1em 1em 0 0'
    },
}