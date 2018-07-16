import * as React from 'react';
import { mount, shallow, ReactWrapper, ShallowWrapper } from 'enzyme';
import { Card, CardSection, ChildProps } from './Card';

describe('Card', () => {
    const title = 'My Card';
    const section = (
        <div className="child-item">
            <h5>Sub header</h5>Some content below..
        </div>
    );
    let card: ReactWrapper = mount(
        <Card>
            <Card.Header>{title}</Card.Header>
            <Card.Section>{section}</Card.Section>
        </Card>
    );

    it('should render', () => {
        const cardHeader = card.find('.Card-Header').text();
        const cardSection = card.find('.Card-Section').text();
        expect(cardHeader).toEqual(title);
        const cardChild = card.find('.child-item h5').text();
        expect(cardChild).toEqual('Sub header');
        expect(cardSection).toMatchSnapshot();
    });

    it('should change focus state', () => {
        expect(card.state()['focused']).toBeFalsy();
        card.simulate('click');
        expect(card.state()['focused']).toBeTruthy();
    });

    it('should render without children', () => {
        let card: ReactWrapper = mount(
            <Card>
                <Card.Header>{title}</Card.Header>
            </Card>
        );
        expect(card.find('.child-item')).toHaveLength(0);
    });

    it('should contain an empty section', () => {
        let card: ShallowWrapper<ChildProps>;
        card = shallow(<CardSection />);
        expect(card.text()).toHaveLength(0);
    });
});
