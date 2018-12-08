import React from 'react'

class Card extends React.Component {

    render () {
        console.log(this.props.children)
        return (
            <div className="card">
                <div className="card-content">
                    { this.props.children[0] }
                </div>
                <h1>
                    {this.props.children[1]}
                </h1>
            </div>
        )
    }
}

export default () => {
    const a = ['大兄弟', '小老弟']
    return (
        <Card>
            {
                a.map((item, index) => {
                    return <div className="item" key={ index }>{ item }</div>
                })
            }
        </Card>
    )
}
