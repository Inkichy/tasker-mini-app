import React, {Component} from 'react';

import {
    Button,
    Cell,
    CellButton,
    Group,
    List
} from "@vkontakte/vkui";
import {Icon28AddOutline} from "@vkontakte/icons";
import {removeActiveModal, setActiveModal} from "../../../store/modalSlice";

class Tasks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            taskList: [
                {
                    fromId: 123456,
                    title: "Написать хороший код",
                    description: `Очень проработанный код и бла бля бла
                                  и бла бля бла и бла бля бла и бла бля бла`,
                },
                {
                    fromId: 123456,
                    title: "Сделать рефакторинг, отладку, красивый ui",
                    description: `Очень проработанный код и бла бля бла
                                  и бла бля бла и бла бля бла и бла бля бла`,
                },
                {
                    fromId: 123456,
                    title: "Скушать печенье",
                    description: `Очень проработанный код и бла бля бла
                                  и бла бля бла и бла бля бла и бла бля бла`,
                }
            ]
        }
    }

    reorderList = ({ from, to }, list) => {
        const _list = [...list];
        _list.splice(from, 1);
        _list.splice(to, 0, list[from]);
        this.changeState(_list, 'taskList');
    };

    removeFromList = (idx, list) => {
        const _list = [...list];
        _list.splice(idx, 1);
        this.changeState(_list, 'taskList');
    };

    changeState = (newState, variable) => this.setState({[variable]: newState})

    render() {
        return (
            <>
                <CellButton onClick={() => {dispatch(setActiveModal('newTask'))}} before={<Icon28AddOutline />}>
                    Добавить Заметку
                </CellButton>
                <Group>
                    <List>
                        {this.state.taskList.map((item, idx) => (
                            <Cell
                                key={item}
                                draggable
                                after={<Button
                                    appearance={'neutral'}
                                    size={'m'}
                                    onClick={() => {}}
                                >
                                    Подробнее
                                </Button>}
                                onDragFinish={({ from, to }) =>
                                    this.reorderList(
                                        { from, to },
                                        this.state.taskList
                                    )
                                }
                            >
                                {item.title}
                            </Cell>
                        ))}
                    </List>
                </Group>
            </>
        );
    }
}

export default Tasks;