import React, { Component } from 'react'
import { Card, Button } from 'antd'
import { connect } from 'dva'

const namespaces = 'puzzlecards'

const mapStateToProps = (state) => {
    const cardList = state[namespaces].data
    return { cardList }
}

// const mapDispatchToProps = (dispatch => {
//     return {
//         onClickAdd: (newCard => {
//             const action = {
//                 type: `${ namespaces }/addNewCard`,
//                 payload: newCard
//             }
//             dispatch(action)
//         })
//     }
// })

const mapDispatchToProps = dispatch => {
    return {
        onDidMount: () => {
            dispatch({
                type: `${namespaces}/queryInitCards`
            })
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends Component {
    componentDidMount () {
        this.props.onDidMount()
    }

    render () {
        return (
            <div>
                {
                    this.props.cardList.map(card => {
                        return (
                            <Card key={ card.id }>
                                <div>Q: { card.setup }</div>
                                <div><b>A: { card.punchline }</b></div>
                            </Card>
                        )
                    })
                }
                <div>
                    {/*<Button onClick={ () => this.props.onClickAdd({*/}
                        {/*setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',*/}
                        {/*punchline: 'here we use dva'*/}
                    {/*}) }>添加卡片</Button>*/}
                </div>
            </div>
        )
    }
}
