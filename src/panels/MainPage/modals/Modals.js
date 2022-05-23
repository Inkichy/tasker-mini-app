import React, {Component} from 'react';
import {Button, CellButton, FormItem, Headline, Input, ModalCard, ModalRoot} from "@vkontakte/vkui";

class Modals extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeModal: 'newTask',
            modalHistory: []
        }
    }

    setActiveModal(activeModal) {
        activeModal = activeModal || null;
        let modalHistory = this.state.modalHistory
            ? [...this.state.modalHistory]
            : [];

        if (activeModal === null) {
            modalHistory = [];
        } else if (modalHistory.indexOf(activeModal) !== -1) {
            modalHistory = modalHistory.splice(
                0,
                modalHistory.indexOf(activeModal) + 1
            );
        } else {
            modalHistory.push(activeModal);
        }

        this.setState({
            activeModal,
            modalHistory,
        });
    }

    render() {
        return (
            <ModalRoot activeModal={this.state.activeModal}>
                <ModalCard id="newTask"
                           header={'Добавить заметку'}
                           onClose={() => {this.setActiveModal(null)}}
                >
                    <FormItem top="Заголовок">
                        <Input type="text" defaultValue="" />
                    </FormItem>
                    <FormItem top="Описание">
                        <Input type="text" defaultValue="" />
                    </FormItem>
                    <Button onClick={() => {}}>Создать</Button>
                </ModalCard>
            </ModalRoot>
        );
    }
}

export default Modals;