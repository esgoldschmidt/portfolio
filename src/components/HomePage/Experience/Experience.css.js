export default {
    experienceMain:{
        display: 'flex',
        alignItems: 'center',
        padding: '4em 0',
        flexDirection: 'column',
    },
    experienceContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    mobileExperienceContainer: {
        display: 'block',
        flexDirection: 'row',
    },
    experienceHead: {
        color: 'gray',
        fontFamily: 'Quicksand',
        fontSize: '1.2em',
        fontWeight: '500',
        textTransform: 'uppercase'

    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '.8em',
        margin: '1em',
        backgroundColor: 'rgba(0,0,0,.1)',
        borderRadius: '1em',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        minWidth: '275px',
        alignItems: 'center',
        color: 'gray',
        //fontWeight: '600'
        //textShadow: '.7px .7px gray',
    },
    mobileRowContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '.8em 0',
        margin: '1.5em 0' ,
        backgroundColor: 'rgba(0,0,0,.1)',
        borderRadius: '1em',
        boxShadow: '4px 0 8px 0 rgba(0, 0, 0, 0.2), 6px 0 20px 0 rgba(0, 0, 0, 0.19)',
        //width: '100vw',
        alignItems: 'center',
        color: 'gray',
        //textShadow: '.7px .7px gray',
    },
    slash: {
        width: '40px',
        height: '2px',
        backgroundColor: '#b3b9b9',
        margin: '.25em'
    },
    rowHead: {
        fontSize: '1.5em',
        //textDecoration: 'underline',
        fontFamily: 'Quicksand',
        textTransform: 'uppercase',
        padding: '1em',
        textDecoration:'underline',
        color: '#fd968a',
        fontWeight: '400'
    },
    listContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    list:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mobileList:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    listItem: {
        //padding: '.5em 0',
        margin: '1em',
        fontSize: '1em',
        textTransform: 'uppercase'
    },
}
