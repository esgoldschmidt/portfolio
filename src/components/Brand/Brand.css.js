export default {
    colorContainer:{
        background: 'linear-gradient(0deg, #e7eeed, #a1ccdd, #a1ccdd, #a1ccdd, #a1ccdd)', //#e7eeed
        height: '100vh',
        minHeight: '650px'
    },
    splashContainer: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    },
    /*textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        textAlign: 'center'
    },*/
    splashText: {
        fontFamily: 'Quicksand',
        fontSize: '27vw',
        color: 'linear-gradient(white, #f2f2f2)',
        background: 'linear-gradient(gray, #ffffff, gray)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        //lineHeight: '150%',
        position: 'absolute',
        top: '6rem',
        zIndex: '2',
        textAlign: 'center'
    },
    splashStack: {
        position: 'absolute',
        top: '25%',
        zIndex: '1',
        width: '100%',
        maxWidth: '600px',
        textAlign: 'center'
    },
    transitionContainer: {
        backgroundColor: '#e7eeed',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    projectBack: {
        borderRadius: '1em 1em 0 0',
        //backgroundColor: 'rgba(0,0,0,.1)',
        width: '100%',
        padding: '1em'
    },
    projects:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    }, 
    projectContainer: {
        //backgroundColor: 'rgba(0,0,0,.1)',
        //borderRadius: '1em 1em 0 0',
        //margin: '1em',
        padding: '1em',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position:'relative',
    },
    image: {
        //boxShadow: '4px 0 8px 0 rgba(0, 0, 0, 0.2), 6px 0 20px 0 rgba(0, 0, 0, 0.19)',
        //margin: '1em 1em 1em 0',
        width: '75%',
        minWidth: '800px',
    },
    mobileImage: {
        //boxShadow: '4px 0 8px 0 rgba(0, 0, 0, 0.2), 6px 0 20px 0 rgba(0, 0, 0, 0.19)',
        //margin: '1em 1em 1em 0',
        minWidth: '420px',
        maxWidth: '450px'
    },
    button:{
        borderRadius: '1em',
        border: '1px solid gray',
        padding: '.5em 1.5em',
        fontWeight: '600',
        color: 'gray',
        position: 'absolute', 
        bottom: '4.5em',
        //boxShadow: '1px 1px gray',
       // textShadow: '1px 1px gray',
        backgroundColor: 'rgba(255,255,255,.3)',
        fontSize: '.75em',
        textTransform: 'uppercase'
    },
    mobileButton:{
        borderRadius: '1em',
        border: '1px solid gray',
        padding: '.5em 1.5em',
        fontWeight: '600',
        color: 'gray',
        position: 'absolute', 
        bottom: '4.3em',
        //boxShadow: '1px 1px gray',
       // textShadow: '1px 1px gray',
        backgroundColor: 'rgba(255,255,255,.3)',
        fontSize: '.75em',
        textTransform: 'uppercase'
    },
    showMoreContainer: {
        display:'flex',
        justifyContent: 'center', 
    },
    more: {
        backgroundColor: 'rgba(255,255,255,.7)',
        height: '500px',
        overflow: 'scroll',
        width: '65%',
        minWidth: '700px',
        margin: '-2em 0 0 0',
        borderRadius: '0 0 1em 1em'

    },
    moreMobile: {
        backgroundColor: 'rgba(255,255,255,.7)',
        height: '500px',
        overflow: 'scroll',
        width: '380px',
        margin: '-2em 0 0 -1em',
        borderRadius: '0 0 1em 1em'
    },
    moreImage: {
        width: '100%'
    },
    brandHead: {
        fontFamily: 'Quicksand',
        fontSize: '2em',
        color: '#b3b9b9',
        padding: '.25em 0',
        textShadow: '.7px .7px gray',
    },
    brandSub: {
        fontFamily: 'Quicksand',
        fontSize: '1em',
        fontWeight: '900',
        color: '#f9956e', // #64e0dd
        textTransform: 'uppercase',
        padding: '.15em 0',
        textShadow: '.5px .5px gray',
    },
    brandBody: {
        color: '#b3b9b9',
        padding: '1em',
        fontSize: '1.2em',
        lineHeight: '2em',
        textShadow: '.4px .4px gray',
        width: '65%',
        minWidth: '360px'

    },
    special: {
        color: '#7a98ee',
        fontStyle: 'italic',
        fontSize: '1.2em'
    }
}