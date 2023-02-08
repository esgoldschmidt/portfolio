export default {
    infoMain: {
        display: 'flex',
        justifyContent: 'center'
    },
    mobileInfoMain: {
        display: 'flex',
        flexDirection: 'column'
    },
    infoContainer:{
        display: 'flex',
        flexDirection: 'column',
        padding: '0 0 0 2em',
        justifyContent: 'center'
    },
    infoHead: {
        fontFamily: 'Quicksand',
        fontSize: '3em',
        lineHeight: '1em',
        fontWeight: '900',
        color: '#b3b9b9',
        padding: '0 0 .5em 0',
        textShadow: '1px 1px gray',
        //maxWidth: '40%'
    },
    infoSub: {
        fontFamily: 'Quicksand',
        fontSize: '1em',
        fontWeight: '900',
        color: '#fccc7f', // #64e0dd
        textTransform: 'uppercase',
        padding: '.15em 0',
        textShadow: '.5px .5px black',
    },
    infoBody: {
        color: '#b3b9b9',
        //padding: '1em',
        fontSize: '1.2em',
        lineHeight: '2em',
        textShadow: '.5px .5px gray',
        width: '65%',
        minWidth: '360px'

    },
    workStation: {
       maxHeight: '375px',
       maxWidth: '50%',
       width: 'auto',
       objectFit: 'cover',
       borderRadius: '1em',
       margin: '1em',
       boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    mobileWorkStation: {
        maxHeight: '375px',
       maxWidth: '100%',
       width: 'auto',
       objectFit: 'cover',
       borderRadius: '1em',
       margin: '1em',
       boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },

    link: {
        color: '#b3b9b9',
    },
    socialIcon: {
        height: '25px',
        padding: '.2em',
        margin: '.2em',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '5px',
        backgroundColor: '#b3b9b9'
    },
}