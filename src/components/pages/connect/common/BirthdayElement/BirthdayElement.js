import React from 'react';

import Input from '../../../../UI/Input/Input';

class BirthdayElement extends React.Component {
    state = {
        subElements: {
            birthDay: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'day'
                },
                value: '',
                validation: {
                    required: false
                }
            },
            birthMonth: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'month'
                },
                value: '',
                validation: {
                    required: false
                }
            },
            birthYear: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'year'
                },
                value: '',
                validation: {
                    required: false
                }
            }
        }
    }

    render() {
        const content = [];
        for (let elementName in this.state.subElements) {
            const element = this.state.subElements[elementName];
            content.push(
                <Input 
                    key={elementName}
                    elementType={element.elementType}
                    elementConfig={element.elementConfig}
                    value={element.value}
                >
                </Input>
            );
        }
        return content;
    }
}

export default BirthdayElement;