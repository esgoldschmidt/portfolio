export default {
    colorContainer:{
        background: 'linear-gradient(0deg, #e7eeed, #c3e6d4, #c3e6d4, #c3e6d4, #c3e6d4)', //#1cb30e
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
        //lineHeight: '170%',
        position: 'absolute',
        top: '6rem',
        zIndex: '2'
    },
    splashStack: {
        position: 'absolute',
        top: '30%',
        tansform: 'translate(-50%, -50%)',
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
    projects:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    projectsHead: {
        color: 'gray',
        fontFamily: 'Quicksand',
        fontSize: '1.2em',
        fontWeight: '500',
        textTransform: 'uppercase'
    },
    slash: {
        width: '60px',
        height: '2px',
        backgroundColor: '#b3b9b9',
        margin: '.25em',
        marginTop: '1em',
    },
    codeHead:{
        color: '#8cc5a8',
        fontFamily: 'Quicksand',
        fontSize: '1em',
        fontWeight: '500',
        textTransform: 'uppercase',
        margin: '1em 0 0 0',

    },
    headContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '70%',
    },
    codeBlock:{
        width: '70%',
        maxHeight: '400px',
        overflow: 'scroll',
        margin: '.25em 0 1em 0'
    },
    linkContainer:{
        color: '#626060',
        margin: '1em', 
        display: 'flex',
        flexDirection: 'column'
    },
    link: { 
        color: '#626060',
        margin: '.3em', 
        display: 'flex',
        flexDirection: 'column',
        textTransform: 'uppercase',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'underline'
    }
    
}