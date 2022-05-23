import React, {Component} from 'react';
import PropTypes from "prop-types";

import {
    Group,
    Panel,
    PanelHeader,
    SizeType,
    Tabs,
    TabsItem, View
} from "@vkontakte/vkui";

import Tasks from "./components/Tasks";
import Notify from "./components/Notify";

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: "tasks",
            data: this.props.data
        };
    }

    render() {
        return (
            <Panel id={this.props.id}>
                <PanelHeader
                    separator={this.props.sizeX === SizeType.REGULAR}
                >
                    Tasker
                </PanelHeader>
                <Group>
                    <Tabs>
                        <TabsItem
                            onClick={() => this.setState({ activeTab: "tasks" })}
                            selected={this.state.activeTab === "tasks"}
                        >
                            Заметки
                        </TabsItem>
                        <TabsItem
                            onClick={() => this.setState({ activeTab: "notify" })}
                            selected={this.state.activeTab === "notify"}
                        >
                            Уведомления
                        </TabsItem>
                    </Tabs>
                    <View activePanel={this.state.activeTab}>
                        <Panel id={'tasks'}>
                            <Tasks />
                        </Panel>
                        <Panel id={'notify'}>
                            <Notify />
                        </Panel>
                    </View>
                </Group>
            </Panel>
        );
    }
}

MainPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default MainPage;