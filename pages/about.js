import Layout from '../components/Layout'

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = { 
            date: new Date()
        }
    }
    render() {
        let month = months[this.state.date.getMonth()]

        return (
            <Layout>
                <div>{this.state.date.toString()}</div>
                <div>{month}</div>
            </Layout>
        )
    }
}

export default Calendar
