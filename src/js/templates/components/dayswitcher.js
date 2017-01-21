import React from 'react';
import DayButton from './daybutton';


class DaySwitcher extends React.Component {

    constructor(){
        super();
        this.days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
        this.abbrdays = ['sun','mon','tue','wed','thu','fri','sat'];
        this.elements = [];
        for (var i = 0, len = this.days.length; i < len; i++) {
            this.elements.push(<DayButton day={this.days[i]} abbr={this.abbrdays[i]} />);
        }
    }
    render(){
        return (
                <div class="days">
                    {this.elements}
                </div>
                );

    }

}

export default DaySwitcher;

