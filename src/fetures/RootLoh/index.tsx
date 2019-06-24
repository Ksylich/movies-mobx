import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { COUNTER_STORE, ICounterStore } from "../../mobx/stores/counter";

interface IProps {
    [COUNTER_STORE]?: ICounterStore;
}

@inject(COUNTER_STORE)
@observer
export class RootLoh extends Component<IProps> {

    public render() {
        const { [COUNTER_STORE]: counterStore } = this.props;
        return (
            <div>
                <h1>{`COUNTER: ${counterStore!.counter}`}</h1>
                <div onClick={counterStore!.increment}>
                    <p>++++++</p>
                </div>
                <div onClick={counterStore!.decrement}>
                    <p>--------</p>
                </div>
            </div>
        );
    }
}
