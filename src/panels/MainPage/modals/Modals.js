import React, {Component} from 'react';
import {Button, FormItem, Input, ModalPage, ModalRoot, withAdaptivity} from "@vkontakte/vkui";
import {useDispatch, useSelector} from "react-redux";
import {removeActiveModal} from "../../../store/modalSlice";

const Modals = () => {

    const dispatch = useDispatch();
    const currentModal = useSelector(state => state.modal.activeModal)

    return (
            <ModalRoot activeModal={currentModal}>
                <ModalPage id="newTask"
                           header={'Добавить заметку'}
                           onClose={() => {dispatch(removeActiveModal())}}
                >
                    <FormItem top="Заголовок">
                        <Input type="text" defaultValue="" />
                    </FormItem>
                    <FormItem top="Описание">
                        <Input type="text" defaultValue="" />
                    </FormItem>
                    <Button onClick={() => {}}>Создать</Button>
                </ModalPage>
            </ModalRoot>
    );
}

export default Modals;