
export default {
    copyPhotoContainer: {
        display: 'flex',
        alignItems: 'flex-start'
    },
    copyPhotoContainerMobile: {
        display: 'block',
        alignItems: 'flex-start'
    },
    photo:{
        maxHeight: '600px',
        padding: '1.5em 0 0 0'
    },
    photoMobile: {
        maxHeight: '600px',
        minHeight: '600px',
        padding: '1em 0 0 6em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },

    aboutEricContainer:{
        display: 'flex',
        flexDirection: 'column',
        //alignItems: 'center',
        maxWidth: '65%',
        justifyContent: 'center',
        padding: '0 0 1em 5em'
    },
    aboutEricContainerMobile:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 0 1em 1em'
    },
    aboutEricHead: {
        fontFamily: 'Quicksand',
        fontSize: '2em',
        color: '#b3b9b9',
        padding: '1em 0 .25em 0',
        textShadow: '.7px .7px gray',

    },
    aboutEricSub: {
        fontFamily: 'Quicksand',
        fontSize: '1em',
        fontWeight: '900',
        color: '#e9d024', // #64e0dd
        textTransform: 'uppercase',
        padding: '.15em 0',
        textShadow: '.5px .5px gray',
    },
    aboutEricBody: {
        color: '#b3b9b9',
        padding: '.3em',
        fontSize: '1.2em',
        lineHeight: '1.7em',
        textShadow: '.4px .4px gray',
        //width: '65%',
        minWidth: '360px',
        textIndent: '35px',

    },
    special: {
        color: '#e9d024',
        fontStyle: 'italic',
        fontSize: '1.2em'
    }
}