import React from "react"
class Async extends React.Component {
    constructor(props) {
        super(props)
    }
    async componentDidMount() {
        console.log(this.props)
        let data = await this.async();
        console.log(data)
    }
    async = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("desde await")
            }, 100)
        })
    }
    render() {
        return (<h2>NUEVO</h2>)
    }

}
export default Async;